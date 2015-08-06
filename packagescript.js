
//SPECIAL PACKAGES//
$('#college-button').click(function(){
	$('#college-p').removeClass("hidden");
	$('#college-padding').removeClass("padding")
	$('#holiday-p').addClass("hidden");
	$('#spooky-p').addClass("hidden");
});

$('#holiday-button').click(function(){
	$('#college-p').addClass("hidden");
	$('#holiday-p').removeClass("hidden");
	$('#holiday-padding').removeClass("padding")
	$('#spooky-p').addClass("hidden");
});
$('#spooky-button').click(function(){
	$('#college-p').addClass("hidden");
	$('#holiday-p').addClass("hidden");
	$('#spooky-p').removeClass("hidden");
	$('#spooky-padding').removeClass("padding")
});

//NORMAL PACKAGES//
$('#thinker-button').click(function(){
	$('#thinker-p').removeClass("hidden")
	$('#thinker-padding').removeClass("padding")
	$('#whiz-p').addClass("hidden")
	$('#genius-p').addClass("hidden")
})
$('#whiz-button').click(function(){
	$('#thinker-p').addClass("hidden")
	$('#whiz-padding').removeClass("padding")
	$('#whiz-p').removeClass("hidden")
	$('#genius-p').addClass("hidden")
})
$('#genius-button').click(function(){
	$('#thinker-p').addClass("hidden")
	$('#whiz-p').addClass("hidden")
	$('#genius-p').removeClass("hidden")
	$('#genius-padding').removeClass("padding")
})