# Inquiry Admin（問い合わせ管理画面）

Webサイトから送信された問い合わせを、管理者が一覧・詳細で確認し、
対応状況を管理するための管理画面（Admin Dashboard）です。

実務でよく利用される管理画面構成を想定し、
一覧表示・詳細遷移・存在しないデータへの404制御といった
基本要素を Next.js（App Router）で実装しました。

## URL（本番）
- 本番URL：＜https://inquiry-admin-olxe.vercel.app/admin/inquiries＞
- 一覧ページ：https://inquiry-admin-olxe.vercel.app/admin/inquiries
- 詳細ページ：https://inquiry-admin-olxe.vercel.app/admin/inquiries/1
- 404ページ例：https://inquiry-admin-olxe.vercel.app/admin/inquiries/9999

## 開発背景・目的
Web開発の現場では、ユーザー向け画面だけでなく
管理者が利用する管理画面の実装が多いと考えました。

特に、
- 一覧画面と詳細画面の遷移
- 存在しないデータへのアクセス制御
- 状態管理
といった要素は実務で頻出であるため、
それらを一通り経験することを目的として本アプリを開発しました。

## 主な機能
- 問い合わせ一覧表示（ID / 名前 / 件名 / ステータス）
- 問い合わせ詳細表示（動的ルーティング）
- 存在しないIDの場合は notFound() による404表示
- 一覧画面へのナビゲーション
- Context API による状態管理

## 使用技術
- Next.js（App Router）
  - 一覧・詳細ページの責務分離や動的ルーティングを学ぶため
- React / TypeScript
  - 型安全性を意識した実装を行うため
- React Context API
  - グローバルな状態管理の基礎理解を目的として採用

## 設計・実装の工夫
- App Router を用いて一覧ページと詳細ページを分離
- 動的ルート `/admin/inquiries/[id]` で `params` を受け取り、
  データの存在チェックを行ったうえで表示
- 表示処理は Client Component に切り出し、Context からデータを取得
- Provider を layout 配下で管理し、状態管理の責務を集約
- `notFound()` と `not-found.tsx` を組み合わせ、適切な404画面を実装

## 今後の改善
- DB（Supabase 等）との連携
- 認証機能の追加
- ページネーション・検索機能の実装

## セットアップ方法（ローカル）
```bash
npm install
npm run dev
