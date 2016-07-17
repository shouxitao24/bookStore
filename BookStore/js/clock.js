window.onload=function(){
	var oDial=document.getElementById('dial');
	var oHour=document.getElementById('hour');
	var oMin=document.getElementById('min');
	var oSec=document.getElementById('sec');
	toDial(oDial);

	toTime(oHour,oMin,oSec);
	setInterval(function(){
		toTime(oHour,oMin,oSec);
	},1000)
	
	
	var oDate=new Date();
	var week=oDate.getDay();
	var date=oDate.getDate();
	
	
	var array=['日','一','二','三','四','五','六'];
	var win=document.getElementById('win');
	var str="<a>"+array[week]+"</a>|<a>"+date+"</a>";
	win.innerHTML=str;
}

function toTime(oHour,oMin,oSec){
	var oDate=new Date();
	var iSec=oDate.getSeconds();
	var iMin=oDate.getMinutes()+iSec/60;
	var iHour=(oDate.getHours()%12)+iMin/60;
	oSec.style.webkitTransform="rotate("+(iSec*360/60)+"deg)";
	oMin.style.webkitTransform="rotate("+(iMin*360/60)+"deg)";
	oHour.style.webkitTransform="rotate("+(iHour*360/12)+"deg)";
	oSec.style.MozTransform="rotate("+(iSec*360/60)+"deg)";
	oMin.style.MozTransform="rotate("+(iMin*360/60)+"deg)";
	oHour.style.MozTransform="rotate("+(iHour*360/12)+"deg)";
	
}

function toDial(obj){
	var sHtml="";
	var iDeg=6;
	for(var i=0;i<60;i++){
		
		sHtml+="<span style='-webkit-transform:rotate("+iDeg*i+"deg)'></span>";
		sHtml+="<span style='-moz-transform:rotate("+iDeg*i+"deg)'></span>"

		
	}
	obj.innerHTML=sHtml;
}	