const puppeteer = require('puppeteer');

const start = async () => {
  const browser = await puppeteer.launch({
        headless: true,
        devtools: false
    }
);

  const page = await browser.newPage();
  page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 yzh");
  //view {width:800,height:600}
  const view = page.viewport();
  console.log(view);
  const options = {url:"http://www.yangzhihuiweb.com",path:"",content:"console.log('I am yzh')"}

  page.on('console', msg => console.log(msg._text));

  // var index = 2;
  // while(index){
  //   await page.goto('http://www.yangzhihuiweb.com');
  //   // page.mouse.click(150,150);
  //   // page.addScriptTag(options);
  //   const button = await page.$("#recent-posts-2 > ul > li:nth-child(1) > a")
  //   await button.click();
  //   index--;
  //   console.log('第'+index+'次');
  // }
  
  
  function wait (ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
  }

  await page.goto('http://www.yangzhihuiweb.com', {waitUntil: 'load'});
  // Get the height of the rendered page
  const bodyHandle = await page.$('body');
  const { height } = await bodyHandle.boundingBox();
  await bodyHandle.dispose();

  // Scroll one viewport at a time, pausing to let content load
  const viewportHeight = page.viewport().height;
  let viewportIncr = 0;
  while (viewportIncr + viewportHeight < height) {
    await page.evaluate(_viewportHeight => {
      window.scrollBy(0, _viewportHeight);
    }, viewportHeight);
    await wait(2000);
    viewportIncr = viewportIncr + viewportHeight;
  }

  // Scroll back to top
  await page.evaluate(_ => {
    window.scrollTo(0, 0);
  });

  // Some extra delay to let images load
  await wait(2000);


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
