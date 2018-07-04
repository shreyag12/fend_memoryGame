
var cards = document.querySelectorAll('.card');
for(i=0;i<cards.length;i++){
	cards[i].addEventListener('click',function(){
		if($(this).hasClass('matched'))
			return false;
		else
			this.classList.toggle('is-flipped');
	});;
}
 
$(document).ready(function(){
	
  	$('.card').on('click',function(){
  		var cps = [].slice.call(document.querySelectorAll('.is-flipped'));
  		console.log(cps);
  		var temp = [];
  		var len = cps.length;
  		if(len%2 == 0){
  			var j =0;
  			for(i=0;i<len;i++){
  				if(!$(cps[i]).hasClass('matched')){
  					temp[j]=cps[i];
  					j++;

  				}
  				}
  				console.log(temp);
  				if(temp[0].getElementsByTagName("i")[0].className === temp[1].getElementsByTagName("i")[0].className){
  					console.log("matched");
  					$(temp).addClass('matched');
  					$(temp).effect("bounce",{times:2});
  				}
  				else{
  					$(temp).effect("shake");
  					$(temp).removeClass('is-flipped');
  				}
  			}
  	});

});