const puppeteer = require('puppeteer');
const os = require('../util/scroll.js');
const device = require('../util/device.js');
const monitor = require('../util/monitor.js');
const scroll = require('../util/scroll.js')
const start = async (index) => {
    while(index){
        try{
            browser = await puppeteer.launch({
                headless: true,
                devtools: false
              })
            page = await browser.newPage()
            //重置最长超时时间，默认为30秒
            page.setDefaultNavigationTimeout(20000)
            // await page.setRequestInterception(true)
            // 设置监听
            await monitor.setMonitor(page)

            //set device
            await device.setDevice(page,"pc");
            const navigationPromise = page.waitForNavigation(); 
            await page.goto("https://www.so.com/",{
                    waitUntil: 'networkidle0'
                  }
            )

            await navigationPromise
            await page.waitForSelector('#input')
            await page.type('#input','辉兔子', {delay: 20})
            //search button
            let send = await page.$("#search-button")
            await send.click()

            // await navigationPromise
            await page.waitFor(6000)
            await page.waitForSelector("#main > ul > li:nth-child(1) > h3 > a")
              
            await page.click("#main > ul > li:nth-child(1) > h3 > a").then(function(page){        
            console.log("完成。。。")
            },function(reject){
               console.log("失败。。。" + reject)   
            }).catch((error)=>{
                console.log("异常信息。。。" + error)
            })

            await navigationPromise
            await page.waitFor(7000)
            //由于从搜索引擎跳转到目标网站新创建了tab页面，因此需要将句柄切换到当前页面进行操作 
            const page2 = ( await browser.pages() )[2]
            //监听ptengine数据
            await monitor.setMonitor(page2)

            await page2.waitForSelector('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')
            
            await page2.click('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')
            //切换页面后，导航对象是浏览器级别的，因此不需要重新创建
            await navigationPromise

            await page2.waitForSelector('ul > .cat-item > .children > .cat-item-18 > a')

            await page2.click('ul > .cat-item > .children > .cat-item-18 > a')

            await browser.close();  
            index--;
            console.log('round '+ index + ' cycle...')
        }catch(e){
            console.log("yzh_search_so.js" + e)
            index--;
            await browser.close(); 
        }
    }
	
}

start(5);