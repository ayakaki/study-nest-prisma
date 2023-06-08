# study-nest-prisma

Prisma の使用方法の学習（NestJS 使用）

## DB 用意

### Docker コンテナ立ち上げ

- `cd infrastructure`
- `docker-compose up`

### DB 接続確認

`docker exec -it infrastructure_db_1 mysql -u user -pP_ssw0rd`

## Prisma 使用コマンド

### Prisma ディレクトリ等の作成

`npx prisma init`

### マイグレーションファイルの作成

`npx prisma migrate dev --name create_profile_table`

### マイグレーション実行

`npx prisma migrate deploy --preview-feature`

### seed ファイルの実行

`npx prisma db seed --preview-feature`

### Prisma Client の生成

`npx prisma generate`

## HOW TO USE

- Docker コンテナ起動
  - 新規タブを開く
  - `cd infrastructure`
  - `docker-compose up`
- Prisma によるテーブル作成と Prisma Client の作成
  - 新規タブを開く
  - `cd prisma`
  - `npx prisma migrate deploy --preview-feature` : テーブル作成
  - `npx prisma generate`:Prisma Client の作成
- アプリケーションの実行
  - 新規タブを開く
  - `npm run start:dev`

## REFERENCE

- [マイグレーション｜ Prisma チュートリアル](https://zenn.dev/thirosue/books/49a4ee418743ed/viewer/57d161)
