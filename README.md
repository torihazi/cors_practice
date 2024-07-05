# CORSエラー再現
CORSエラーを手軽に再現できるとのことだったのでやってみた

1. クローン

`git clone https://github.com/torihazi/cors_practice.git`

2.移動し、package.jsonをインストール

```
cd cors_practice
docker compose run --rm back npm i
```

3. docker compose実行

`docker compose up --build`

4. http://localhost:8100 にアクセス
5. 検証ツールからconsoleを開く
6. ブラウザに表示されているボタンを押して、jsonを取得できているか確認する
7. CORSエラーを起こすにはindex.jsのorigin: ***を削除すれば良い。


