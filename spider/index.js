#!/usr/bin/env node

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

let getPageData = async(url) => {
  const browser = await puppeteer.launch({
    executablePath: '/mnt/c/Program\ Files\ \(x86\)/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
    ignoreDefaultArgs: ['--disable-extensions'],
    //设置页面的尺寸
    defaultViewport: {
      width: 1400,
      height: 800
    }
  })

  const page = await browser.newPage()
  // await page.goto('https://www.baidu.com')
  // status = status.status();
  // console.log(status)

  await page.goto(url)

  let productList = await page.evaluate(() => {
    let data = []
    let elements = document.querySelectorAll('.hpoi-glyphicons-list > li')
    for ( let i = 0; i < elements.length; i++) {
      let img = elements[i].firstElementChild.firstElementChild.getAttribute('src')
      let title = elements[i].firstElementChild.firstElementChild.getAttribute('title')
      let produceTime = elements[i].querySelector('.hpoi-detail-grid-info').children[1].childNodes[1].nodeValue.replace('出荷：', '')
      let price = elements[i].querySelector('.hpoi-detail-grid-info').children[2].childNodes[1].nodeValue.replace('价格：', '')
      data.push({
        img,
        title,
        produceTime,
        price
      })
    }

    return data
  })

  //关闭浏览器实例
  await browser.close();

  return productList
}

const urlList = [
  'https://www.hpoi.net/hobby/all?order=release&r18=-1&series=8569175&workers=&view=3&category=10000',
  'https://www.hpoi.net/hobby/all?order=release&r18=-1&series=8569175&workers=&view=3&category=10000&page=2',
  'https://www.hpoi.net/hobby/all?order=release&r18=-1&series=8569175&workers=&view=3&category=10000&page=3',
  'https://www.hpoi.net/hobby/all?order=release&r18=-1&series=8569175&workers=&view=3&category=10000&page=4',
  'https://www.hpoi.net/hobby/all?order=release&r18=-1&series=8569175&workers=&view=3&category=10000&page=5',
  'https://www.hpoi.net/hobby/all?order=release&r18=-1&series=8569175&workers=&view=3&category=10000&page=6',
]

let tasks = []
urlList.map(function(url) {
  tasks.push(getPageData(url))
})

Promise.all(tasks).then(values => {
  let allProducts = values.flat()

  //将爬取的数据转为json格式
  console.log(allProducts)
  let list = JSON.stringify(allProducts);
  //指定存储数据的json文件
  let file = path.join(__dirname, "car.json");

  fs.writeFile(file, list, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("success");
    }
  })

})



