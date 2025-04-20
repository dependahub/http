[![Stability](https://img.shields.io/badge/Stability-ALPHA-red.svg)]()
[![Node.js Version](https://img.shields.io/badge/node-20.x-brightgreen.svg)](https://nodejs.org/)
[![XO code style](https://shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray&logoSize=auto)](https://github.com/xojs/xo)

# http

HTTP通信モジュール

現在はfetchのラッパーとして作成しています。

## example

```javascript
import {http} from '@dependahub/http';

http.defaults.baseUrl = 'url';
http.defaults.headers = {};

const reseponse = await http.get('url', {
  headers: {},
  query: {},
});

const reseponse = await http.post('url', {
  headers: {},
  query: {},
  body: {},
});

const reseponse = await http.put('url', {
  headers: {},
  query: {},
  body: {},
});

const reseponse = await http.delete('url', {
  headers: {},
  query: {},
});

const {status, data} = reseponse;
```
