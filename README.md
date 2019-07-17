# 都道府県別の総人口推移グラフ

## 修正予定
- タイトルをつける
-  yarn devすると ERROR  fsevents.watch is not a function が表示される
- チェックボック一覧のデザインに窮屈さを感じるので修正する
- UIが古臭い(VuetifyやVuesax、material-uiなどを使う)
- コメントアウトコードが多く、それがgithubのコミット差分から見れるのはだめ
- コミットの粒度が曖昧
- components/Graph.vueのcomputedのoptionsが長い
- チェック時の状態変更はemitでなくstore経由でやる
- 人口データ取得はmiddlewareでやるべきでなく、pagesのmountedでやる
- reset.cssが古い(npm install Normalize.cssを使う)

## 準備

RESAS APIの「都道府県一覧」からAPIを取得しています。  
そのため、RESAS APIのAPI Keyが必要です。  
「.env」ファイルをプロジェクト直下に作成して、下記のように発行したAPI keyを記述してください。  

```env
API_KEY=発行したAPI key
```

## 参考

* RESAS API: https://opendata.resas-portal.go.jp/
* RESAS API仕様書: https://opendata.resas-portal.go.jp/docs/api/v1/index.html
* Highcharts: https://www.highcharts.com/
* Vue2-highcharts: https://www.npmjs.com/package/vue2-highcharts
* Nuxt.js: https://nuxtjs.org

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
