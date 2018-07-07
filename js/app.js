//flip cards on click event

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
	   moves = 1;
     count = 0;
     num = 5;
  	$('.card').on('click',function(){
  		var cps = [].slice.call(document.querySelectorAll('.is-flipped'));
  		console.log(cps);
  		var temp = [];
  		var len = cps.length;
  		if(len == 16)
  		{

        var stars = $("#rateYo").rateYo("option", "rating");
        $('#timing').html("<p>"+"hello"+"</p>");
        $('#timing').html("With " + moves + " moves " + stars+ " stars"+" "+"Time taken " + timer.getTotalTimeValues().seconds + " seconds");
        timer.stop();
  			$('.box').hide();
        $('.start').hide();
        $('.card').removeClass('matched is-flipped');
  			$('.message').show();
        $('#rateYo').hide();
        $('#clock').hide();
        $('.scene').removeClass('active');

  		}
  		if(len%2 == 0){
  			var j =0;
  			for(i=0;i<len;i++){
  				if(!$(cps[i]).hasClass('matched')){
  					temp[j]=cps[i];
  					j++;

  				}
  				}
  				if(temp[0].getElementsByTagName("i")[0].className === temp[1].getElementsByTagName("i")[0].className){
  					console.log("matched");
            console.log(temp);
  					$(temp).addClass('matched');
  					$(temp).effect("bounce",{times:2});
  				}
  				else{
  					$(temp).effect("shake");
  					$(temp).find("div").effect('highlight',{color: "red"}, 300);
  					$(temp).removeClass('is-flipped');
            console.log(count);
            if(count >= 2){
              num--;
              $("#rateYo").rateYo("option", "rating", num);
            }
            count++;
  				}
          moves++;
          // console.log(moves);
  			}
  	});

});
//show game 
function showGame(){
  $('.message').hide();
  $('.box').show();
  $('.start').show();
  $("#rateYo").rateYo("option", "rating", 5);
  $('#rateYo').show();
  $('#clock').show();
  $('#clock').html("00:00:00");
  // timer.reset();
  // timer.stop();
  moves = 1;
  count = 0;
  num = 5;
}

var timer;
var moves;
var count;
var num;
// var $rateYo = $("#rateYo").rateYo();
function startClock(){
$('.scene').addClass('active');
timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#clock').html(timer.getTimeValues().toString());
});
}

// $('.start button').click(function(){
//   var timer = new Timer();
//   timer.start();
//   timer.addEventListener('secondsUpdated', function (e) {
//     $('#clock').html(timer.getTimeValues().toString());
// });
// });