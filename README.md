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
