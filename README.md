# Mental Harmony

## 使用ツール
- Volta
- Node.js
- Bun

## 技術スタック
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


# セットアップ
- 1. postgresの環境を作る
- 2. postgresでユーザーを作る
- 3. postgresでデータベースを作る
- 4. .env.local.sampleを参考に.env.localファイルを設定する
- 5. prismaのmigrateを実行する
- 6. ローカルサーバーを起動する
```bash
bun run dev
```