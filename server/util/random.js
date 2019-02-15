 /**
 * 生成指定范围的随机数
 */
 function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));   
}

/**
* 生成随机点击点，使点击看起来更加自然些
*/
async function RandomClick(doc,ele){
	let pos = doc.querySelector(ele);
		//随机生成点击坐标，为了让点击数据看起更自然些
		//coordinate :{"x":130.5,"y":1870.8125,"width":104.90625,"height":34,"top":1870.8125,"right":235.40625,"bottom":1904.8125,"left":130.5}
		let coordinate = pos.getBoundingClientRect();
		console.log("获取的坐标值："+JSON.stringify(coordinate));
		let offset = {"top":coordinate.top,"left":coordinate.left};
		let ele_shape = {"width":coordinate.width,"height":coordinate.height};
		let click_position = {"x":offset.left + ele_shape.width/2 + (GetRandomNum(-Math.round(ele_shape.width/2),Math.round(ele_shape.width/2))),"y":offset.top + ele_shape.height/2 + (GetRandomNum(-Math.round(ele_shape.height/2),Math.round(ele_shape.height/2)))}

	    console.log("left:"+offset.left + " top:" + offset.top + " width:"+ele_shape.width + " height:" + ele_shape.height + " click_position:" + click_position.x + " " + click_position.y);
	    return click_position;
}
module.exports = {"GetRandomNum":GetRandomNum,"RandomClick":RandomClick}