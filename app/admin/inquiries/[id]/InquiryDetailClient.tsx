"use client";

import Link from "next/link";
import { useInquiries } from "../../InquiriesContext";

interface InquiryDetailClientProps {
  id: string;
}

export function InquiryDetailClient({ id }: InquiryDetailClientProps) {
  const { inquiries } = useInquiries();
  const numericId = Number(id);
  const inquiry = inquiries.find((item) => item.id === numericId);

  if (!inquiry) {
    return (
      <div style={{ padding: 16 }}>
        <div style={{ marginBottom: 24 }}>
          <Link
            href="/admin/inquiries"
            style={{
              textDecoration: "underline",
              color: "#3b82f6",
            }}
          >
            ← 一覧へ戻る
          </Link>
        </div>
        <h1>Inquiry ID: {id}</h1>
        <p>見つからないがルートは動いている</p>
        <p>inquiry not found, but routing is working</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <div style={{ marginBottom: 24 }}>
        <Link
          href="/admin/inquiries"
          style={{
            textDecoration: "underline",
            color: "#3b82f6",
          }}
        >
          ← 一覧へ戻る
        </Link>
      </div>
      <h1>Inquiry ID: {id}</h1>
      <p>名前: {inquiry.name}</p>
      <p>件名: {inquiry.subject}</p>
      <p>ステータス: {inquiry.status}</p>
      <p>Contextが復活し、inquiryが見つかった</p>
    </div>
  );
}
