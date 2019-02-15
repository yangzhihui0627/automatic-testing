const puppeteer = require('puppeteer');
const os = require('../util/scroll.js');
const device = require('../util/device.js');
const monitor = require('../util/monitor.js');
const start = async (index) => {
    
  while(index){
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
    await device.setDevice(page,"sp");
    const navigationPromise = page.waitForNavigation(); 
    await page.goto("https://ecdemo.ptengine.cn/customer/account/login/",{
            waitUntil: 'networkidle0'
          }
    )

    await navigationPromise

    await page.waitForSelector('#email')
   
    await page.type('#email','zhihui.yang@ptmind.com', {delay: 20})

    await page.type('#pass','Ptmind2008',{delay:20})

    await page.evaluate(x => {
        let emai = document.querySelector("#email")
        let pass = document.querySelector("#pass")
    }, 7);

    let send = await page.$("#send2")
    await send.click()

    //wait for login result page content
    await navigationPromise

    await page.waitFor(3000)
    
    let viewport = await page.viewport();
    if(viewport.isMobile){
      //click menu button
      await page.waitForSelector('body > div.page-wrapper > header > div.header.content > span')
      await page.click('body > div.page-wrapper > header > div.header.content > span')

      await page.waitFor(3000)
      
      //click WOMEN button #ui-id-1 > li.level0.nav-2.level-top.parent.ui-menu-item
      await page.click("li.level0.nav-2.level-top.parent.ui-menu-item")

      await page.waitFor(3000)

      //click Jackets button
      await page.click("#ui-id-12")

      //wait for product list
      await navigationPromise

      await page.waitFor(3000)
      
      // scroll the product list
      await os.scroll(page);

      await page.close();

    }else{

      await page.close();

    }
    
    index --;
    console.log("第："+index + " 次....")
    await browser.close()
  }
  
}

start(10);