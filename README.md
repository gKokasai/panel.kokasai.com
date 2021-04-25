# panel.kokasai.com
管理者向けコントロールパネル。

## 開発

### コマンド

#### 依存関係の導入
```shell
yarn install
```

#### テストサーバーの起動
```shell
yarn start:dev # API_Server: dev-api.kokasai.com

yarn start:local # API_Server: localhost:8080
```

#### ビルド
```shell
yarn build:product # 本番環境

yarn build:dev # テスト環境
```

#### 依存関係の更新確認
```shell
npx -p npm-check-updates  -c "ncu"
```

#### 依存関係の更新
```shell
npx -p npm-check-updates  -c "ncu -u"
```

#### package.json の整理
```shell
npx sort-package-json
```

### コミットについて

#### コミットメッセージテンプレート

```
<種類>: <簡単な説明>
```

#### 種類

- **feat**: 機能の追加
- **fix**: バグ修正
- **docs**: ドキュメントの変更
- **style**: 処理を変えていないコードの修正 (コードフォーマット等)
- **refactor**: バグ修正や機能追加を行わないコードの修正
- **perf**: パフォーマンスの改善
- **test**: テストの追加・修正
- **chore**: ライブラリの更新等の雑務
