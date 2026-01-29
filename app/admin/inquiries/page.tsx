"use client";

import Link from "next/link";
import { useInquiries } from "../InquiriesContext";
import { statusClassName, statusLabel } from "../inquiriesData";

export default function InquiriesPage() {
  const { inquiries } = useInquiries();

  return (
    <div style={{ padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
        お問い合わせ一覧
      </h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {inquiries.map((inquiry) => (
          <Link
            key={inquiry.id}
            href={`/admin/inquiries/${inquiry.id}`}
            style={{
              display: "block",
              padding: 16,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              textDecoration: "none",
              color: "inherit",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#f9fafb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ minWidth: 60, fontSize: 14, fontFamily: "monospace" }}>
                #{inquiry.id}
              </div>
              
              <div style={{ flex: 1, fontSize: 16, fontWeight: 500 }}>
                {inquiry.name}
              </div>
              
              <div style={{ flex: 2, fontSize: 14, color: "#6b7280" }}>
                {inquiry.subject}
              </div>
              
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "4px 10px",
                    fontSize: 12,
                    fontWeight: 500,
                    borderRadius: 9999,
                    backgroundColor: statusClassName[inquiry.status],
                    color: "white",
                  }}
                >
                  {statusLabel[inquiry.status]}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {inquiries.length === 0 && (
        <div style={{ textAlign: "center", padding: 32, color: "#6b7280" }}>
          お問い合わせがありません
        </div>
      )}
    </div>
  );
}
