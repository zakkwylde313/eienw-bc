// ParticipantDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function ParticipantDetailPage() {
  const { id } = useParams();
  const [participant, setParticipant] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchParticipant = async () => {
      const docRef = doc(db, 'participants', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setParticipant(docSnap.data());
      } else {
        setParticipant({ notFound: true });
      }
    };
    fetchParticipant();
  }, [id]);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!id) return;
      try {
        const res = await fetch(`/api/fetchRss?id=${id}`);
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        console.error('RSS 불러오기 실패:', err);
      }
    };
    fetchPosts();
  }, [id]);

  if (!participant) return <p className="p-4">불러오는 중...</p>;
  if (participant.notFound) return <p className="p-4 text-red-600">해당 캠퍼스를 찾을 수 없습니다.</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <header>
          <h1 className="text-2xl font-bold text-gray-800">{participant.campus} 캠퍼스</h1>
          <p className="text-sm text-gray-500">RSS 주소: {participant.rssUrl}</p>
        </header>

        <section className="bg-white shadow-md rounded-xl p-4 overflow-x-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">📄 포스팅 목록</h2>
          <table className="min-w-full table-auto text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">제목</th>
                <th className="px-4 py-2">날짜</th>
                <th className="px-4 py-2">글자 수</th>
                <th className="px-4 py-2">이미지 수</th>
                <th className="px-4 py-2">기준 통과</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr key={i} className="border-t">
                  <td className="px-4 py-2 text-blue-600 hover:underline max-w-xs truncate">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">{new Date(post.pubDate).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{post.wordCount}</td>
                  <td className="px-4 py-2">{post.imageCount}</td>
                  <td className="px-4 py-2 font-semibold {post.passed ? 'text-green-600' : 'text-red-600'}">
                    {post.passed ? '✅ 통과' : '❌ 미달'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
