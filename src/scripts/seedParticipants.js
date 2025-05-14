// src/scripts/seedParticipants.js
import { db } from '../firebase';
import { collection, setDoc, doc } from 'firebase/firestore';

const participants = [
  {
    id: 'hd',
    campus: '고양 향동',
    rssUrl: 'https://rss.blog.naver.com/eieganga19.xml'
  },
  {
    id: 'pm',
    campus: '김포 풍무',
    rssUrl: 'https://rss.blog.naver.com/eiesunny1.xml'
  },
  {
    id: 'sn',
    campus: '파주 산내',
    rssUrl: 'https://rss.blog.naver.com/hyunstar7961.xml'
  }
];

export async function seedParticipants() {
  for (const p of participants) {
    await setDoc(doc(db, 'participants', p.id), {
      campus: p.campus,
      rssUrl: p.rssUrl
    });
    console.log(`${p.campus} 등록 완료`);
  }
}
