
		$(".button__location__logo").click(function(){
				// $('.contacts__button__location').toggleClass("show");
				$('.contacts__button__address').toggleClass("show");		
			});
			

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next')
});


$('.slider__teem').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3
  });

  function myMap() {
	var mapProp= {
	  center:new google.maps.LatLng(49.553520,25.594770),
	  zoom:8
	};

	var myMarker = new google.maps.Marker({
		position: new google.maps.LatLng(49.553520, 25.594770),
		draggable: true
	});
	
	var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	}
	myMarker.googleMap(map);



