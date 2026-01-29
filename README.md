# Inquiry Admin（問い合わせ管理画面）

Next.js（App Router）を用いて作成した、管理画面向けの問い合わせ管理アプリです。  
一覧表示・詳細表示・404制御を実装しています。

## Demo（ローカル）
- 一覧ページ: `/admin/inquiries`
- 詳細ページ: `/admin/inquiries/1`
- 404ページ: `/admin/inquiries/9999`

## 主な機能
- 問い合わせ一覧表示（ID / 名前 / 件名 / ステータス）
- 問い合わせ詳細表示（動的ルーティング）
- 存在しないIDの場合は notFound() による404表示
- 「一覧へ戻る」ナビゲーション
- Context API による状態管理

## 技術スタック
- Next.js 16（App Router）
- React / TypeScript
- Context API

## 設計・実装のポイント
- 一覧ページと詳細ページを App Router で構成
- 動的ルート `/admin/inquiries/[id]` では Server Component で `params` を受け取り、
  データの存在チェックを行ったうえで表示
- 表示処理は Client Component に切り出し、Context からデータを取得
- Provider は `AdminProviders` を用いて layout 配下で管理
- `notFound()` と `not-found.tsx` を組み合わせて、適切な404画面を実装

## セットアップ方法
```bash
npm install
npm run dev
