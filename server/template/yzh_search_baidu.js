const puppeteer = require('puppeteer');
const os = require('../util/scroll.js');
const device = require('../util/device.js');
const monitor = require('../util/monitor.js');
const start = async (index) => {
	browser = await puppeteer.launch({
        headless: false,
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
    await page.waitForSelector('#kw')
    await page.type('#kw','辉兔子', {delay: 20})
    //search button
    let send = await page.$("#su")
    await send.click()

    await navigationPromise
    await page.waitFor(3000)
    await page.waitForSelector(".t  > a")
  //   await page.evaluate(page => {
  //       let yzh = document.querySelectorAll(".t  > a")
    
	 //    let tar =yzh.forEach(function(item,index){
		  
		//   if(item.innerText === "辉兔子 – 技术分享"){
		//   	console.log("找到了。。。")
		//   	let selector = ".t  > a:nth-child("+ ++index +")";
		//   	 page.click(selector)

		//      return item;
		//    }else{
		//    	continue;
		//    }
		// })
  //   }, 7);

    await page.click(".t  > a:nth-child(1)")
    await navigationPromise

	await page.waitFor(10000)
	await page.evaluate(async(page) => {
		let dom = document.querySelectorAll('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')
		// dom[0].click();
		page.click('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')
	})
	// await page.waitFor('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn');		  

	// await page.click('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')

	await navigationPromise
	
	await page.waitForSelector('ul > .cat-item > .children > .cat-item-18 > a')

	await page.click('ul > .cat-item > .children > .cat-item-18 > a')
	await page.close();

	await browser.close();  
}

start();