/**
 * Set Emulate
 */
async function device(page){
	let deviceType = ["pc","sp","ipad"];
	let device = deviceInfo[deviceType[GetRandomNum(0,2)]];
	let deviceEmulate = {
	    'name': 'ptengine_emulate',
	    'userAgent': device[GetRandomNum(0,device.length-1)].ua,
	    'viewport': {
	      'width': device[GetRandomNum(0,device.length-1)].px.width,
	      'height': device[GetRandomNum(0,device.length-1)].px.height,
	      'deviceScaleFactor': 1,
	      'isMobile': device == "pc"?false:true,
	      'hasTouch': device == "pc"?false:true,
	      'isLandscape': false
	    }
	  }
	  await page.emulate(deviceEmulate);
	// page.setUserAgent(device[GetRandomNum(0,device.length-1)].ua);
    // page.setViewport(device[GetRandomNum(0,device.length-1)].px);
}
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
} 
const deviceInfo = 
{"pc":[
	{"ua":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) firefox/70.0.3538.102 Safari/537.36","px":{"width":1024,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36","px":{"width":1024,"height":768}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.14 (KHTML, like Gecko) Chrome/24.0.1292.0 Safari/537.14","px":{"width":1024,"height":768}},
	{"ua":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2226.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2225.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2224.3 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.93 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.124 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.67 Safari/537.36","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1944.0 Safari/537.36","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.3319.102 Safari/537.36","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2309.372 Safari/537.36","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2117.157 Safari/537.36","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36","px":{"width":1440,"height":900}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1866.237 Safari/537.36","px":{"width":1440,"height":900}},
	{"ua":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/4E423F","px":{"width":1440,"height":900}},
	{"ua":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.517 Safari/537.36","px":{"width":1440,"height":900}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1667.0 Safari/537.36","px":{"width":1440,"height":900}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36","px":{"width":1440,"height":900}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1664.3 Safari/537.36","px":{"width":1440,"height":900}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.16 Safari/537.36","px":{"width":1440,"height":900}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1623.0 Safari/537.36","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.17 Safari/537.36","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.62 Safari/537.36","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (X11; CrOS i686 4319.74.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1468.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1467.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1464.0 Safari/537.36","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1500.55 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.93 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.90 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (X11; NetBSD) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (X11; CrOS i686 3912.101.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36","px":{"width":1280,"height":720}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1312.60 Safari/537.17","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.17 (KHTML, like Gecko) Chrome/24.0.1309.0 Safari/537.17","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.15 (KHTML, like Gecko) Chrome/24.0.1295.0 Safari/537.15","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; rv:27.3) Gecko/20130101 Firefox/27.3","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:27.0) Gecko/20121011 Firefox/27.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:25.0) Gecko/20100101 Firefox/25.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.6; rv:25.0) Gecko/20100101 Firefox/25.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:24.0) Gecko/20100101 Firefox/24.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.0; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; rv:22.0) Gecko/20130405 Firefox/23.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20130406 Firefox/23.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:23.0) Gecko/20131011 Firefox/23.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; rv:22.0) Gecko/20130405 Firefox/22.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:22.0) Gecko/20130328 Firefox/22.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; rv:22.0) Gecko/20130405 Firefox/22.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Microsoft Windows NT 6.2.9200.0); rv:22.0) Gecko/20130405 Firefox/22.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:16.0.1) Gecko/20121011 Firefox/21.0.1","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:16.0.1) Gecko/20121011 Firefox/21.0.1","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:21.0.0) Gecko/20121011 Firefox/21.0.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20130331 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:21.0) Gecko/20100101 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (X11; Linux i686; rv:21.0) Gecko/20100101 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; WOW64; rv:21.0) Gecko/20130514 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; rv:21.0) Gecko/20130326 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130401 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130331 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20130330 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130401 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20130328 Firefox/21.0","px":{"width":1680,"height":1050}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; rv:21.0) Gecko/20100101 Firefox/21.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20130401 Firefox/21.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20130331 Firefox/21.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1; rv:21.0) Gecko/20100101 Firefox/21.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows NT 5.0; rv:21.0) Gecko/20100101 Firefox/21.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:21.0) Gecko/20100101 Firefox/21.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows NT 6.2; Win64; x64;) Gecko/20100101 Firefox/20.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows x86; rv:19.0) Gecko/20100101 Firefox/19.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; rv:6.0) Gecko/20100101 Firefox/19.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; rv:14.0) Gecko/20100101 Firefox/18.0.1","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:18.0)  Gecko/20100101 Firefox/18.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:17.0) Gecko/20100101 Firefox/17.0.6","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/4.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/1.22 (compatible; MSIE 10.0; Windows 3.1)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows; U; MSIE 9.0; WIndows NT 9.0; en-US))","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (Windows; U; MSIE 9.0; Windows NT 9.0; en-US)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 7.1; Trident/5.0)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8; Zune 4.7)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; Media Center PC 6.0; InfoPath.3; MS-RTC LM 8; Zune 4.7","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; chromeframe/12.0.742.112)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; yie8)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; FunWebProducts)","px":{"width":1280,"height":960}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; chromeframe/13.0.782.215)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0; chromeframe/11.0.696.57)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0) chromeframe/10.0.648.205","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.1; SV1; .NET CLR 2.8.52393; WOW64; en-US)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0; chromeframe/11.0.696.57)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/4.0; GTB7.4; InfoPath.3; SV1; .NET CLR 3.1.76908; WOW64; en-US)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB7.4; InfoPath.2; SV1; .NET CLR 3.3.69573; WOW64; en-US)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; InfoPath.1; SV1; .NET CLR 3.8.36217; WOW64; en-US)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0; .NET CLR 2.7.58687; SLCC2; Media Center PC 5.0; Zune 3.4; Tablet PC 3.6; InfoPath.3)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.2; Trident/4.0; Media Center PC 4.0; SLCC1; .NET CLR 3.0.04320)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 1.1.4322)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; InfoPath.2; SLCC1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 2.0.50727)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; .NET CLR 1.1.4322; .NET CLR 2.0.50727)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.1; SLCC1; .NET CLR 1.1.4322)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 5.0; Trident/4.0; InfoPath.1; SV1; .NET CLR 3.0.4506.2152; .NET CLR 3.5.30729; .NET CLR 3.0.04506.30)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 5.0; Trident/4.0; FBSMTWB; .NET CLR 2.0.34861; .NET CLR 3.0.3746.3218; .NET CLR 3.5.33652; msn OptimizedIE8;ENUS)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.2; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; Media Center PC 6.0; InfoPath.2; MS-RTC LM 8)","px":{"width":1360,"height":768}},
	{"ua":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; Media Center PC 6.0; InfoPath.2; MS-RTC LM 8","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; Media Center PC 6.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C)","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; InfoPath.3; .NET4.0C; .NET4.0E; .NET CLR 3.5.30729; .NET CLR 3.0.30729; MS-RTC LM 8)","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; InfoPath.2)","px":{"width":1920,"height":1080}},
	{"ua":"Opera/9.80 (Windows NT 6.1; WOW64; U; pt) Presto/2.10.229 Version/11.62","px":{"width":1920,"height":1080}},
	{"ua":"Opera/9.80 (Windows NT 6.0; U; pl) Presto/2.10.229 Version/11.62","px":{"width":1920,"height":1080}},
	{"ua":"Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52","px":{"width":1920,"height":1080}},
	{"ua":"Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; de) Presto/2.9.168 Version/11.52","px":{"width":1920,"height":1080}},
	{"ua":"Opera/9.80 (Windows NT 5.1; U; en) Presto/2.9.168 Version/11.51","px":{"width":1920,"height":1080}},
	{"ua":"Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; de) Opera 11.51","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (X11; Linux x86_64; U; fr) Presto/2.9.168 Version/11.50","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (X11; Linux i686; U; hu) Presto/2.9.168 Version/11.50","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (X11; Linux i686; U; ru) Presto/2.8.131 Version/11.11","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (X11; Linux i686; U; es-ES) Presto/2.8.131 Version/11.11","px":{"width":1920,"height":1200}},
	{"ua":"Mozilla/5.0 (Windows NT 5.1; U; en; rv:1.8.1) Gecko/20061208 Firefox/5.0 Opera 11.11","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (X11; Linux x86_64; U; bg) Presto/2.8.131 Version/11.10","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 6.0; U; en) Presto/2.8.99 Version/11.10","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 5.1; U; zh-tw) Presto/2.8.131 Version/11.10","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 6.1; Opera Tablet/15165; U; en) Presto/2.8.149 Version/11.1","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (X11; Linux x86_64; U; Ubuntu/10.10 (maverick); pl) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (X11; Linux i686; U; ja) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (X11; Linux i686; U; fr) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 6.1; U; zh-tw) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 6.1; U; zh-cn) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 6.1; U; sv) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 6.1; U; en-US) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 6.1; U; cs) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 6.0; U; pl) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 5.2; U; ru) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 5.1; U;) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Opera/9.80 (Windows NT 5.1; U; cs) Presto/2.7.62 Version/11.01","px":{"width":1920,"height":1200}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.1; cs-CZ) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.0; ja-JP) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; zh-cn) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; ja-jp) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; ja-jp) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; zh-cn) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; sv-se) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; ko-kr) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; ja-jp) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; it-it) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; fr-fr) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; es-es) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-us) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; en-gb) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; de-de) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.1; sv-SE) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.1; ja-JP) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.1; de-DE) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.0; hu-HU) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.0; de-DE) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 5.1; ja-JP) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 5.1; it-IT) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1366,"height":768}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_7; en-us) AppleWebKit/534.16+ (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; fr-ch) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; de-de) AppleWebKit/534.15+ (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_5; ar) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Android 2.2; Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-HK) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.19.4 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.0; tr-TR) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.0; nb-NO) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5","px":{"width":1600,"height":900}},
	{"ua":"Mozilla/5.0 (Windows; U; Windows NT 6.0; fr-FR) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5","px":{"width":1600,"height":900}}
],
"sp":[
	{"ua":"Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1","px":{"width":375,"height":667}},
	{"ua":"Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1","px":{"width":414,"height":736}},
	{"ua":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1","px":{"width":375,"height":812}},
	{"ua":"Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Mobile Safari/537.36","px":{"width":360,"height":640}},
	{"ua":"Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) HUAWEI_G606-T00_TD/1.0 Linux/3.0.8 Android/4.0.3 Release/01.06.2013 Browser/Webkit54731 Profile/MIDP-2.1 Configuration/CLDC-1.1","px":{"width":360,"height":640}},
	{"ua":"Mozilla/5.0 (Linux; Android 7.1.2; MI 5X Build/N2G47H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/64.0.3282.137 Mobile Safari/537.36","px":{"width":375,"height":667}},
	{"ua":"Mozilla/5.0 (Linux; Android 6.0; HUAWEI MLA-AL10 Build/HUAWEIMLA-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36","px":{"width":360,"height":640}}
],	
"ipad":[
	{"ua":"Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1","px":{"width":768,"height":1024}},
	{"ua":"Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1","px":{"width":1024,"height":1366}}
]}
module.exports = {"setDevice":device}