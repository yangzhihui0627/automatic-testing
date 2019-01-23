
async function pt_click(page){
	const navigationPromise = page.waitForNavigation();	

	await page.goto("http://www.yangzhihuiweb.com");  	   
	await navigationPromise
	await page.waitForSelector('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn');		  

	await page.click('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')

	await navigationPromise
	
	await page.waitForSelector('ul > .cat-item > .children > .cat-item-18 > a')

	await page.click('ul > .cat-item > .children > .cat-item-18 > a')
	
	await navigationPromise
	
	await page.waitForSelector('#post-170 > .blog-post > article > .entry-content > .red-btn > .btn')

	await page.click('#post-170 > .blog-post > article > .entry-content > .red-btn > .btn')
	
	await navigationPromise
	
	await page.waitForSelector('#sidebar > #categories-4 > ul > .cat-item-35 > a')
	await page.click('#sidebar > #categories-4 > ul > .cat-item-35 > a')
	
	await navigationPromise
	
	await page.waitForSelector('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')
	await page.click('#post-272 > .blog-post > article > .entry-content > .red-btn > .btn')
	
	await navigationPromise
	
	await page.waitForSelector('.two-tone-layout > .col-sm-9 > .detail-content > div > div:nth-child(16)')
	await page.click('.two-tone-layout > .col-sm-9 > .detail-content > div > div:nth-child(16)')
	
	await page.waitForSelector('.container > .two-tone-layout > .col-sm-9 > .detail-content > div:nth-child(11)')
	await page.click('.container > .two-tone-layout > .col-sm-9 > .detail-content > div:nth-child(11)')
	
	await page.waitForSelector('.container > .two-tone-layout > .col-sm-9 > .detail-content > .detail_image_wrapper')
	await page.click('.container > .two-tone-layout > .col-sm-9 > .detail-content > .detail_image_wrapper')
	
	await page.waitForSelector('.container > .two-tone-layout > .col-sm-9 > .detail-content > .detail_image_wrapper')
	await page.click('.container > .two-tone-layout > .col-sm-9 > .detail-content > .detail_image_wrapper')
}

module.exports = {"click":pt_click}