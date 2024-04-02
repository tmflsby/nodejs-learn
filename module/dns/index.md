## 域名解析：dns.lookup()

比如我们要查询域名 www.qq.com 对应的ip，可以通过 dns.lookup() 。

```javascript
const dns = require('dns')

dns.lookup('www.qq.com', (err, address, family) => {
    if (err) throw err
    console.log('address', address)
    console.log('family', family)
})
```

输出如下：

```bash
address 58.49.216.230
family 4
```

我们知道，同一个域名，可能对应多个不同的ip。那么，如何获取一个域名对应的多个ip呢？可以这样。


```javascript
const dns = require('dns')

dns.lookup('www.qq.com', {
    all: true
}, (err, addresses) => {
    if (err) throw err
    console.log('address', addresses)
})
```

输出如下：

```bash
address [
  { address: '58.49.216.230', family: 4 },
  { address: '58.49.216.194', family: 4 }
]
```


## 域名解析：dns.resolve4()

上文的例子，也可以通过 dns.resolve4() 来实现。

```javascript
const dns = require('dns')

dns.resolve4('www.qq.com', (err, addresses) => {
    if (err) throw err
    console.log(addresses)
})
```

输出如下：

```bash
[ '58.49.216.194', '58.49.216.230' ]
```

如果要获取IPv6的地址，接口也差不多，不赘述。

## dns.lookup()跟dns.resolve4()的区别

从上面的例子来看，两个方法都可以查询域名的ip列表。那么，它们的区别在什么地方呢？

可能最大的差异就在于，当配置了本地Host时，是否会对查询结果产生影响。

* dns.lookup()：有影响。
* dns.resolve4()：没有影响。

举例，在hosts文件里配置了如下规则。

>127.0.0.1 www.qq.com

运行如下对比示例子，就可以看到区别。

```javascript
const dns = require('dns')

dns.lookup('www.qq.com', (err, address, family) => {
    if (err) throw err
    console.log('配置host后，dns.lookup =>' + address)
})

dns.resolve4('www.qq.com', (err, addresses) => {
    if (err) throw err
    console.log('配置host后，dns.resolve4 =>' + addresses)
})
```

输出如下

```bash
node lookup-vs-resolve4.js 
配置host后，dns.lookup =>127.0.0.1
配置host后，dns.resolve4 =>58.49.216.194,58.49.216.230

```

## 其他接口

对DNS有了解的同学，应该对A记录、NS记录、CNAME等不陌生，同样可以通过相应的API进行查询，感兴趣的可以自行尝试下。

## 相关链接

官方文档：https://nodejs.org/api/dns.html#dns_dns_resolve4_hostname_callback
