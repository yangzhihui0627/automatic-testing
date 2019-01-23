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

  // let index = Math.round(Math.random()*10) + 1;
  let index = 1;
  while(index){
  	  let page = await browser.newPage();
  	  page.on('console', msg => console.log(msg._text));
	  await device.setDevice(page);
  	  const {width,height} = page.viewport();
  	  console.log("像素："+width + " " + height +" index:"+index);
	  await oc.click(page);
	  await os.scroll(page);
	  await page.close();
	  
	  index--;
  }
  await browser.close();  
};

start();
// const setIntervalTimer = util.promisify(setInterval);
// setIntervalTimer(start, 300000);