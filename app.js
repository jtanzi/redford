//Goal: Change the image displayed within the main-image div based on what the user selects in the sidebar.


var $image = $("<img>");
var $caption = $("<p></p>");
var mainimage = $("#main-image img");
var $artistInfo = $("<p>The Artist</p>");
var $contact = $("<p></p>");

//Fade h1 on load
$("html").ready(function() {
	$("h1").slideDown(600);
	mainimage.hide();
	$("#contact").hide();
	mainimage.delay(1000).fadeIn(600);
});
                 
//Capture the click event on a link to an image.
$("#sidebar a").click(function(event) {
  event.preventDefault();
	mainimage.hide();
	mainimage.attr("src", "img/" + $(this).text() + ".jpg");
	
	if($(this).hasClass("artist")) {
		$caption.remove();
		$("#main-image").prepend($artistInfo);
		$("#contact").show();
	} else {
		$artistInfo.remove();
		$("#contact").hide();
		$("#main-image").append($caption);
		$caption.text($(this).text());
	}
	mainimage.fadeIn("slow");
});