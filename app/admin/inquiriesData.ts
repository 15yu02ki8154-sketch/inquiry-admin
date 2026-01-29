export type InquiryStatus = "open" | "in_progress" | "closed";

export type Inquiry = {
  id: number;
  name: string;
  subject: string;
  status: InquiryStatus;
  body: string;
};

export const inquiries: Inquiry[] = [
  {
    id: 1,
    name: "山田 太郎",
    subject: "ログインできない",
    status: "open",
    body: "PC からログインしようとするとエラーが表示されてログインできません。エラーコードは「AUTH-001」です。対処方法を教えてください。",
  },
  {
    id: 2,
    name: "佐藤 花子",
    subject: "パスワード再発行について",
    status: "in_progress",
    body: "パスワード再発行メールが届きません。迷惑メールフォルダも確認しましたが見つかりませんでした。",
  },
  {
    id: 3,
    name: "Suzuki Ken",
    subject: "請求内容の確認",
    status: "closed",
    body: "先月分の請求書に身に覚えのない利用がありました。詳細を確認したいです。",
  },
  {
    id: 4,
    name: "田中 一郎",
    subject: "アカウント削除依頼",
    status: "open",
    body: "使用しなくなったためアカウントの削除をお願いします。必要な手続きを教えてください。",
  },
];

export const statusLabel: Record<InquiryStatus, string> = {
  open: "未対応",
  in_progress: "対応中",
  closed: "完了",
};

export const statusClassName: Record<InquiryStatus, string> = {
  open: "bg-red-100 text-red-700",
  in_progress: "bg-yellow-100 text-yellow-800",
  closed: "bg-emerald-100 text-emerald-700",
};

