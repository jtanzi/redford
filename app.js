//Goal: Change the image displayed within the main-image div based on what the user selects in the sidebar.


var $image = $("<img>");
var $caption = $("<p></p>");
var mainimage = $("#main-image img");
                 
//Capture the click event on a link to an image.
$("#sidebar a").click(function(event) {
  event.preventDefault();
	mainimage.hide();
	mainimage.attr("src", "img/" + $(this).text() + ".jpg");
	mainimage.fadeIn("slow");
});
