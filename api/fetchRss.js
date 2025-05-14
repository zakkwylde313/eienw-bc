// api/fetchRss.js
import Parser from 'rss-parser';

const parser = new Parser();

const rssMap = {
  hs: 'https://rss.blog.naver.com/hyangsan_eie.xml',
  sn: 'https://rss.blog.naver.com/hyunstar7961.xml',
  yk: 'https://rss.blog.naver.com/kjylsh1812.xml',
  pm: 'https://rss.blog.naver.com/eiesunny1.xml',
  de: 'https://rss.blog.naver.com/eie_deogeun.xml',
  hd: 'https://rss.blog.naver.com/eieganga19.xml',
  jc: 'https://rss.blog.naver.com/eiejichuk.xml',
  bb: 'https://rss.blog.naver.com/eiebbsscampus',
  ss: 'https://rss.blog.naver.com/eiemath.xml'
};

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id || !rssMap[id]) {
    return res.status(400).json({ error: '잘못된 요청입니다: 유효한 캠퍼스 ID가 필요합니다.' });
  }

  try {
    const feed = await parser.parseURL(rssMap[id]);

    const posts = feed.items.map((item) => {
      const content = item['content:encoded'] || item.content || '';
      const text = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
      const wordCount = text.length;
      const imageCount = (content.match(/<img /g) || []).length;

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        wordCount,
        imageCount,
        passed: wordCount >= 1000 && imageCount >= 3
      };
    });

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ posts });
  } catch (error) {
    console.error('RSS 파싱 오류:', error);
    return res.status(500).json({ error: 'RSS를 불러오는 중 오류가 발생했습니다.' });
  }
}
