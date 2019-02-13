const puppeteer = require('puppeteer');
const os = require('../util/scroll.js');
const device = require('../util/device.js');
const monitor = require('../util/monitor.js');
const start = async (index) => {
    while(index){
        try{
            browser = await puppeteer.launch({
                headless: true,
                devtools: false
              })
            page = await browser.newPage()
            //重置最长超时时间，默认为30秒
            page.setDefaultNavigationTimeout(60000)
            // await page.setRequestInterception(true)
            // 设置监听
            await monitor.setMonitor(page)

            //set device
            await device.setDevice(page,"pc");
            const navigationPromise = page.waitForNavigation(); 
            await page.goto("https://www.baidu.com/",{
                    waitUntil: 'networkidle0'
                  }
            )

            await navigationPromise
            await page.waitFor(3000)
            await page.waitForSelector('#kw')
            await page.type('#kw','辉兔子', {delay: 20})
            //search button
            let send = await page.$("#su")
            await send.click()

            await navigationPromise
            await page.waitFor(3000)
            await page.waitForSelector(".t  > a")

            await page.click(".t  > a:nth-child(1)")
            await navigationPromise

            await page.waitFor(7000)

            //由于从搜索引擎跳转到目标网站新创建了tab页面，因此需要将句柄切换到当前页面进行操作 
            const page2 = ( await browser.pages() )[2]
            await monitor.setMonitor(page2)
            await page2.waitFor('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn');       

            await page2.click('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')

            await navigationPromise

            await page2.waitFor(5000)

            await page2.waitForSelector('ul > .cat-item > .children > .cat-item-18 > a')

            await page2.click('ul > .cat-item > .children > .cat-item-18 > a')

            await browser.close();
            index--;
            console.log('round ' + index + ' time...')  
        }catch(e){
            console.log("yzh_search_baidu.js"+e)
            index--;
            await browser.close();
        }
    }
	
}

start(8);