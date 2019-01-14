const puppeteer = require('puppeteer');

const start = async () => {
  const browser = await puppeteer.launch({
        headless: true,
        devtools: false
	    }
	);

  const page = await browser.newPage();
  page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36");
  //view {width:800,height:600}
  const view = page.viewport();
  console.log(view);

  page.on('console', msg => console.log(msg._text));

  var index = 2;
  while(index){
    await page.goto('http://www.yangzhihuiweb.com');
    const button = await page.$("#recent-posts-2 > ul > li:nth-child(1) > a")
    await button.click();
    index--;
    console.log('第'+index+'次');
  }
  
  

  // Get the "viewport" of the page, as reported by the page.
  // const dimensions = await page.evaluate(() => {
    
  //   return {
  //     width: document.documentElement.clientWidth,
  //     height: document.documentElement.clientHeight,
  //     deviceScaleFactor: window.devicePixelRatio
  //   };
  // });

  
  // console.log('Dimensions:', dimensions);

  await browser.close();
};

start();
