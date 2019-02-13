//监听函数，监听控制台信息，请求以及响应消息
function monitor(page){
	page.on('console', async(msg) => {
      try{
          console.log(msg._text)
      }catch(e){
      	  console.log("uncatch exception"+msg._text)
      }
    });
    page.on('request', async(req) => {
      try{
        if(req.url().indexOf("ptengine") > 0){
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
        let response = res.request()
        if(res.status() == 200 && response.url().indexOf('collect.ptengine') > -1){
          console.log("数据采集："+response.url())
        }else if(res.status() != 200){
          console.log("非200状态码："+res.status()+" url:"+response.url())
        }
      }catch(e){
        console.log("try catch:"+e)
      }
      
    })
}

module.exports = {"setMonitor":monitor}