# tomboo

Tomboo is a sample game made in Tombo.js of jsx.

### clone repository

```
$git clone git@github.com:phi1618/tomboo.git
$cd tomboo
```

### setup

[Tombo.js](https://github.com/tkihira/Tombo.js) を submodule として使っているので
下記コマンドで submodule のセットアップをしてください.

```
$git submodule init
$git submodule update
```

あとは npm install でサクッとセットアップ♪

```
$npm install
```

※ grunt-cli をグローバルインストールしておく必要あり


### jsx convert to js

下記コマンドを実行すると jsx/main.jsx が
build/main.js にコンバートされます.

```
$grunt jsx
```

build/index.html で build/main.js を使ったサンプルを見れます.


### watch jsx file

下記コマンドを実行すると jsx ファイルを watch して
jsx ファイルが更新されると自動で js ファイルを出力します.


```
$grunt watch
```


