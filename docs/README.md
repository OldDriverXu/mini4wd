# 接口文档

## banner
广告位
---

参数
```
{
  position: '1'
}
```

返回值
```
{
  "_id": "058dfefe62846ac104269a125ac6e480",
  "list": [
    {
      "url": "https://www.baidu.com",
      "desc": " 邪道杰克1",
      "img": "https://user-images.githubusercontent.com/3946415/169445981-0e7448c7-0b87-4910-bc9f-c1387f7034ca.jpg",
      "title": "邪道杰克1"
    },
    {
      "img": "https://user-images.githubusercontent.com/3946415/169445985-152d381e-e8ee-49cb-9ee2-fe56025537c3.jpg",
      "title": "2",
      "url": "https://www.taobao.com",
      "desc": "22222"
    },
    {
      "desc": "3333",
      "img": "https://user-images.githubusercontent.com/3946415/169445990-c34b6636-e2a2-420c-b60a-f8cc1720dbf0.jpg",
      "title": "3",
      "url": "https://www.baidu.com"
    },
    {
      "img": "https://user-images.githubusercontent.com/3946415/169445992-9a53f74e-ec1d-4d2b-af6a-b24ef6542bd3.jpg",
      "title": "4",
      "url": "https://www.taobao.com",
      "desc": "4444"
    },
    {
      "desc": "5555",
      "img": "https://user-images.githubusercontent.com/3946415/169445974-5b3ef196-b2de-4df6-a2c3-9bdae2c8f6d1.jpg",
      "title": "5",
      "url": "https://www.baidu.com"
    }
  ],
  "position": "1"
}
```

## articles
文章详情
---

参数
```
{
  aid: '1' // 文章id
}
```

返回值
```
{
  aid: '1',  // 文章id
  title: '街头迷你四驱车历史',  // 文章标题
  content: '<div>文字</div>'  // html富文本
}
```

## activities
活动列表
---

参数: 无

返回值:
```
{
  list: [
    {
      aid: '3',  // 文章id
      title: '',  // 标题
      desc: '',  // 描述
      img: ''  // 图片
    }
  ]
}
```

### products
商品列表
---

参数:
```
{
  
}
```

返回值:
```
{
  list: [
    {
      pid: '1',
      title: '充电电池',
      desc: '倍量充电电池',
      tags: ['hot', 'recommend'],
      category: '3'
      img: ''
    }
  ]
}
```
### product
商品详情
---
参数:
```
{
  pid: '1'
}
```

返回值:
```
{
  pid: '1',  // 商品id
  title: '',  // 商品标题
  desc: '',  // 商品描述
  category: '3',  // 分类
  tags: [],  // 商品标签
  imgs: ['url1', 'url2'], // 商品图片
  link: '' // 跳转链接
}
```


