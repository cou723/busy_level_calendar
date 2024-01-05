# Harmony

## 使用ツール
- Volta
- Node.js
- Bun

## スタック
- TypeScript
- Next.js(App Router)
- React
- Emotion
- Storybook
- Jest
- ESLint
- Prettier
- knip
- Vercel
- Prisma
- PostgreSQL

## ディレクトリ構成

```
.
├── node_modules
├── package.json
├── prisma
├── public
└── src
   ├── app  // app router
   ├── assets // 画像など
   ├── components // コンポーネント
   ├── constants.ts // 定数
   ├── global.ts // グローバルな変数や関数
   ├── google-api.d.ts // Google APIの型定義
   ├── hooks // カスタムフック
   ├── index.css 
   ├── libs // コンポーネントのロジック
   ├── providers // プロバイダー
   ├── types
   └── utils
```


## 開発サーバー起動
```bash
bun run dev
```
