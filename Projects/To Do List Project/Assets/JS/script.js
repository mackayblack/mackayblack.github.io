// Check Off To Dos By CLicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

// Click on X to delete to do
$("ul").on("click", "span", function (event) {
	event.stopPropagation();
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
});

// Add to dos when pressing enter
$("input[type='text']").on("keypress", function (event) {
	if(event.which === 13) {
		// grabbing new todo text from input
		var todoText = $(this).val();	
		// clear text input
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle();
});