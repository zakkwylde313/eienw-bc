// DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* 상단 제목 및 기간 안내 */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">EiE 경기 서북부 블로그 포스팅 챌린지</h1>
            <p className="text-sm text-gray-500">진행 기간: 2025년 6월 1일 ~ 6월 30일</p>
          </div>
          <div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">관리자 로그인</button>
          </div>
        </header>

        {/* 하이라이트 카드 3종 */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">참가 캠퍼스 수</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">12</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">오늘 포스팅 등록한 캠퍼스</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">8</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">Top 2 순위</h2>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-gray-800">🥇 고양 향동 (21회)</p>
              <p className="text-sm text-gray-800">🥈 김포 풍무 (19회)</p>
            </div>
          </div>
        </section>

        {/* 참가자 현황 테이블 */}
        <section className="bg-white shadow-md rounded-xl p-4 overflow-x-auto">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">📊 참가자 현황</h2>
          <table className="min-w-full table-auto text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">캠퍼스명</th>
                <th className="px-4 py-2">현재 포스팅 수</th>
                <th className="px-4 py-2">기준 충족 수</th>
                <th className="px-4 py-2">누적 피드백</th>
                <th className="px-4 py-2">현재 순위</th>
                <th className="px-4 py-2">상세 보기</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">고양 향동</td>
                <td className="px-4 py-2">19</td>
                <td className="px-4 py-2">17 ✅</td>
                <td className="px-4 py-2">3개 ✏️</td>
                <td className="px-4 py-2">🥈 2등</td>
                <td className="px-4 py-2">
                  <a href="/participant/hd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">보기</a>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">김포 풍무</td>
                <td className="px-4 py-2">21</td>
                <td className="px-4 py-2">20 ✅</td>
                <td className="px-4 py-2">1개 ✏️</td>
                <td className="px-4 py-2">🥇 1등</td>
                <td className="px-4 py-2">
                  <a href="/participant/pm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">보기</a>
                </td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">파주 산내</td>
                <td className="px-4 py-2">11</td>
                <td className="px-4 py-2">9</td>
                <td className="px-4 py-2">없음</td>
                <td className="px-4 py-2">5등</td>
                <td className="px-4 py-2">
                  <a href="/participant/sn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">보기</a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
