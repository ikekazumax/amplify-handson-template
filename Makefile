.PHONY: setup dev build

## 初回セットアップ（依存関係のインストール）
setup:
	npm install

## 開発サーバー起動
dev:
	npm run dev

## 本番ビルド
build:
	npm run build
