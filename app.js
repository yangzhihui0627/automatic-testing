const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  var index = 5;
    while(index){
      await page.goto('http://www.yangzhihuiweb.com/')
  
      await navigationPromise
      
      await page.waitForSelector('#sidebar > #categories-4 > ul > .cat-item-57 > a')
      await page.click('#sidebar > #categories-4 > ul > .cat-item-57 > a')
      
      await navigationPromise
      
      await page.waitForSelector('.blog-post > article > .entry-content > .red-btn > .btn')
      await page.click('.blog-post > article > .entry-content > .red-btn > .btn')
      
      await navigationPromise
      index--
    }
  
  await browser.close()
})()