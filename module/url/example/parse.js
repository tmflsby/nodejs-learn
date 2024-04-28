// const url = require('url');
// const str = 'https://www.baidu.com:80/path?name%3Dzhangsan%26age%3D12%23comment';
//
// const obj = url.parse(str);
// const decodeObj = url.parse(str, true);
// console.log(obj);
// console.log(decodeObj);


const url = require('url');
const str = '//foo/bar';

const obj = url.parse(str, true, false);
console.log(obj);

const obj2 = url.parse(str, true, true);
console.log(obj2);
