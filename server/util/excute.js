const puppeteer = require('puppeteer');
const util = require('util');
const os = require('./scroll.js');
const oc = require('./click.js');
const device = require('./device.js');
const start = async () => {
  const browser = await puppeteer.launch({
        headless: true,
        devtools: false
	    }
	);

  const page = await browser.newPage();
  page.on('console', msg => console.log(msg._text));
  let index = Math.round(Math.random()*10) + 1;
  while(index){
	  await device.setDevice(page);
  	  const {width,height} = page.viewport();
  	  console.log("像素："+width + " " + height +" index:"+index);
	  const navigationPromise = page.waitForNavigation()
	  await page.evaluate(async () => {
	    // use window.md5 to compute hashes
	    // const myString = 'PUPPETEER';
	    // const myHash = await window.md5(myString);
	    console.log("innnerWidth:"+window.innerWidth + " innerHeight:"+window.innerHeight + " ua:"+window.navigator.userAgent
);
	  });

	  await oc.click(page);
	  await os.scroll(page);
	  index--;
  }
  

  await browser.close();
};

start();
// const setIntervalTimer = util.promisify(setInterval);
// setIntervalTimer(start, 300000);