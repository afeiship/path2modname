# path2modname
> Path to module name.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/path2modname
```

## usage
```js
import path2modname from '@jswork/path2modname';

const path1 = 'features.user-center.profile';
const path2 = 'features.profile';
const path3 = 'features.user-center';

console.log(path2modname(path1)); // 'features.userCenterProfile'
console.log(path2modname(path2)); // 'features.profile'
console.log(path2modname(path3)); // 'features.userCenter'
```

## license
Code released under [the MIT license](https://github.com/afeiship/path2modname/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/path2modname
[version-url]: https://npmjs.org/package/@jswork/path2modname

[license-image]: https://img.shields.io/npm/l/@jswork/path2modname
[license-url]: https://github.com/afeiship/path2modname/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/path2modname
[size-url]: https://github.com/afeiship/path2modname/blob/master/dist/index.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/path2modname
[download-url]: https://www.npmjs.com/package/@jswork/path2modname
