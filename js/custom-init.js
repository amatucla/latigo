$(document).bind("mobileinit", function() { 
    $.mobile.defaultPageTransition = "fade";
});

/************************************************************* INICIO ******************/
$(document).on('pageinit', '#inicio',  function() {
    window.addEventListener('devicemotion', function(event) {
			var x = event.accelerationIncludingGravity.x;
			var y = event.accelerationIncludingGravity.y;
			var z = event.accelerationIncludingGravity.z;
			if ((x > 20)) {
					myAudio = document.getElementById('sample');
			  		myAudio.pause();
			  		myAudio.currentTime = 0;
			  		myAudio.play();
			}
	});			
	
	$('img#chorddiagram').addClass('splash');
	$('img#chorddiagram').attr("src",'css/images/splash.png');
});



$(document).on('pageshow', '#inicio',  function() { 
		var started = sessionStorage.getItem("started");
		if (started == null) {
		$.mobile.loading('show', {
						text: "Loading FxOS news",
						textVisible: false
		});
		sessionStorage.setItem("started", true);
        }
});
