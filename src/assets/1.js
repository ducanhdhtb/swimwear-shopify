$( document ).ready(function() {
	$('#mycontent').slideUp();
    $('#mytitle').click(function(){
    	$('#mycontent').slideToggle();
	});

	$('#mycontent2').slideUp();
    $('#mytitle2').click(function(){
    	$('#mycontent2').slideToggle();
	});

	$('#mycontent3').slideUp();
    $('#mytitle3').click(function(){
    	$('#mycontent3').slideToggle();
	});

	$('#mycontent4').slideUp();
    $('#mytitle4').click(function(){
    	$('#mycontent4').slideToggle();
	});
});