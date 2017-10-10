$(function(){
	//this code will execute after the DOM is loaded
	var carouselList = $("#carousel ul");

		$('#button.button-left').click(function(){
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last").after(firstItem);
								
		});

		$('#button.button-right').click(function(){
			var lastItem = carouselList.find("li:last");
			var firstItem = carouselList.find("li:first").before(lastItem);
		});

		setInterval(function changeSlide(){ 
			carouselList.animate({'marginLeft':-400}, 500, function moveFirstSlide(){
				var firstItem = carouselList.find("li:first");
				var lastItem = carouselList.find("li:last").after(firstItem);
				carouselList.css({marginLeft:0});
			}); 
		}, 5000 ); 

		
});

