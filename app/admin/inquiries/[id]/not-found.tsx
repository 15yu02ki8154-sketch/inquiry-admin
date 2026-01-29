import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: 16 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        お問い合わせが見つかりません
      </h1>
      
      <p style={{ marginBottom: 24, color: "#6b7280" }}>
        指定されたIDのお問い合わせは存在しません。
      </p>
      
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
  );
}
