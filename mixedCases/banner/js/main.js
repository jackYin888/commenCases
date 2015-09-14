var bannerSlide=function(){
		var bannerBox=document.getElementById('bannerBox');
	var bannerItem=bannerBox.getElementsByTagName('li');
	var bannerSelector=document.getElementById('selector').getElementsByTagName('span');
	var timer=setInterval(function(){
		
		n++;
		if(n>2)n=0;
		currentIndex(n);
		//console.log(n);
	},2000);

	for(var i=0;i<bannerSelector.length;i++){
		bannerSelector[i].index=i;
		bannerSelector[i].onmouseover=function(){
		clearInterval(timer);		
         currentIndex(this.index);
	},
	bannerSelector[i].onmouseout=function(){
		timer=setInterval(function(){
		
		n++;
		if(n>2)n=0;
		currentIndex(n);
		//console.log(n);
	},2000);
	}
}

	var n=0;
	

var currentIndex= function (index){
	for(var j=0;j<bannerSelector.length;j++){
				bannerSelector[j].className='';
			}
			bannerBox.style.top=-index*300+'px';
			bannerSelector[index].className='on';
		
}
}