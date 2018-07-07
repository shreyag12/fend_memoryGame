$(function () {
 
  $("#rateYo").rateYo({
    starWidth: "20px",
    rating: 5,
    readOnly: true,
  });
 
});

function getRating(){

	var rating = $rateYo.rateYo("rating");
    window.alert("Its " + rating + " Yo!");
  };

