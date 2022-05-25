# 接口文档

## banner
广告位
---

参数
```
{
  position: 'home'
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

### productsMenu
商品菜单
---

参数:
```
{
  
}
```

返回值:
```
{
  "_id": "f6e08a64628deda3051d286a7451ad5b",
  "products": [
    {
      "catId": "0",
      "catName": "热门车型",
      "list": [
        {
          "desc": "四驱兄弟四驱小子S2底盘拼装车",
          "img": "https://gd3.alicdn.com/imgextra/i1/391130175/O1CN01GcGV0f1DAC1MlcuBL_!!391130175.jpg_400x400.jpg",
          "price": "20.00",
          "tag": "热门",
          "title": "锐泽DD四驱车",
          "url": "https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-24123859273.39.616f21e7Qa0oFu&id=655687352153"
        }
      ]
    },
    {
      "catId": "1",
      "catName": "改装配件",
      "list": [
        {
          "url": "https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-24123859273.33.22f64222rfxPix&id=43434170606",
          "desc": "1.5/3/6/12mm铝管螺丝套筒铝衬套 16颗",
          "img": "https://gd3.alicdn.com/imgextra/i4/0/TB1ul2OHpXXXXX8XVXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg",
          "price": "4.95",
          "tag": "热销",
          "title": "自制田宫四驱车配件铝管"
        },
        {
          "desc": "20周年限定 刻字玻纤维95072全覆盖式龙头",
          "img": "https://gd2.alicdn.com/imgextra/i3/391130175/TB2qlRssSJjpuFjy0FdXXXmoFXa_!!391130175.jpg_400x400.jpg",
          "price": "4.95起",
          "title": "自制田宫四驱车改装配件",
          "url": "https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-24123859273.75.43d34222pVZnTK&id=520310228613"
        }
      ]
    },
    {
      "catId": "1",
      "catName": "改装工具",
      "list": [
        {
          "title": "自制田宫四驱车战龙四驱车改装配件收纳盒",
          "url": "https://item.taobao.com/item.htm?spm=a1z10.5-c-s.w4002-24123859273.16.2d0a3a1dtK4rr2&id=39913964759",
          "desc": "10格马达零件工具盒",
          "img": "https://gd1.alicdn.com/imgextra/i2/391130175/TB2rwv7cpXXXXX2XXXXXXXXXXXX_!!391130175.jpg_400x400.jpg",
          "price": "4.95"
        }
      ]
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


