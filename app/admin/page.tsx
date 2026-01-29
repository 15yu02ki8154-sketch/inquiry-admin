"use client";

import Link from "next/link";
import { statusClassName, statusLabel } from "./inquiriesData";
import { useInquiries } from "./InquiriesContext";

export default function AdminInquiriesPage() {
  const { inquiries } = useInquiries();

  return (
    <div className="min-h-screen bg-zinc-50 py-10 px-6 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 border-b border-zinc-200 pb-4">
          <h1 className="text-2xl font-semibold tracking-tight">お問い合わせ一覧</h1>
          <p className="mt-1 text-sm text-zinc-500">
            管理画面 / お問い合わせ一覧
          </p>
        </header>

        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
          <table className="min-w-full border-collapse text-sm">
            <thead className="bg-zinc-100 text-left text-xs font-semibold text-zinc-600 uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3 w-16">ID</th>
                <th className="px-4 py-3 w-48">名前</th>
                <th className="px-4 py-3">件名</th>
                <th className="px-4 py-3 w-32">ステータス</th>
                <th className="px-4 py-3 w-28 text-center">詳細</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((inquiry) => (
                <tr
                  key={inquiry.id}
                  className="border-t border-zinc-200 hover:bg-zinc-50"
                >
                  <td className="px-4 py-3 text-xs text-zinc-500">
                    #{inquiry.id}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-zinc-900">
                    {inquiry.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-zinc-700">
                    {inquiry.subject}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusClassName[inquiry.status]}`}
                    >
                      {statusLabel[inquiry.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Link
                      href={`/admin/inquiries/${inquiry.id}`}
                      className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-100"
                    >
                      詳細
                    </Link>
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-10 text-center text-sm text-zinc-500"
                  >
                    現在表示できるお問い合わせはありません。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

