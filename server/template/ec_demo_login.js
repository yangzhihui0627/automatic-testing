const puppeteer = require('puppeteer');
const os = require('../util/scroll.js');
const start = async (index) => {
  
  let deviceEmulate = {
      'name': 'ptengine_emulate',
      'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
      'viewport': {
        'width': 375,
        'height': 667,
        'deviceScaleFactor': 1,
        'isMobile':true,
        'hasTouch':true,
        'isLandscape':false
      }
    }
  
  
  while(index){
    browser = await puppeteer.launch({
        headless: false,
        devtools: false
      })
    page = await browser.newPage()
    //重置最长超时时间，默认为30秒
    page.setDefaultNavigationTimeout(60000)
    // await page.setRequestInterception(true)
    page.on('console', async(msg) => {
      try{
          console.log(msg._text)
      }catch(e){

      }
    });
    page.on('request', async(req) => {
      try{
        if(req.url().indexOf("loginPost") > 0){
          console.log("请求："+req.url() + " body:"+req.body + " params:"+req.params + " query:"+req.query + " cookies:"+req.cookies)
        }
         // req.continue()
      }catch(e){
        console.log("try catch:"+e);
        // req.continue()
      }    
    });
    page.on('response', res =>{
      try{
        if(res.ok()){
          let request = res.request()
          console.log("响应成功："+request.url())
        }
      }catch(e){
        console.log("try catch:"+e)
      }
      
    })

    //set device
    await page.emulate(deviceEmulate);
    const navigationPromise = page.waitForNavigation(); 
    await page.goto("https://ecdemo.ptengine.cn/customer/account/login/",{
            waitUntil: 'networkidle0'
          }
    )

    await navigationPromise

    await page.waitForSelector('#email')
    // let email_input =await page.$("#email")
    // await email_input.click()
    await page.type('#email','zhihui.yang@ptmind.com', {delay: 20})

    // let password_input = await page.$("#pass")
    // await password_input.click()
    await page.type('#pass','Ptmind2008',{delay:20})

    await page.evaluate(x => {
        let emai = document.querySelector("#email")
        let pass = document.querySelector("#pass")
        console.log("登录条件："+emai.value + "  "+pass.value + " cookies:"+ document.cookie);
    }, 7);

    let send = await page.$("#send2")
    await send.click()

    //wait for login result page content
    await navigationPromise

    await page.waitFor(3000)
    
    let viewport = await page.viewport();
    if(viewport.isMobile){
      //click menu button
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

start(8);