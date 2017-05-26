/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a
 * singleton.
 */

var imageRepository;
var audioRepository;



imageRepository = new function() {
  this.ready = false;

  // Define images
  this.bull = new Image();
  this.chain = new Image();
  this.indy = new Image();
  this.lungeing = new Image();
  this.nine = new Image();
  this.riding = new Image();
  this.romal = new Image();
  this.signal = new Image();
  this.stock = new Image();

  // Define audios
  this.bull_sound = new Audio();
  this.chain_sound = new Audio();
  this.indy_sound = new Audio();
  this.lungeing_sound = new Audio();
  this.nine_sound = new Audio();
  this.riding_sound = new Audio();
  this.romal_sound = new Audio();
  this.signal_sound = new Audio();
  this.stock_sound = new Audio();
  
  // Ensure all images have loaded before starting the game
  var numFiles =  18;
  var numLoaded = 0;
  

  function fileLoaded() {
    numLoaded++;
    if (numLoaded === numFiles) {
          init();
    }
  }
  
  this.bull.onload = function() {
    fileLoaded();
  }
  
  this.chain.onload = function() {
    fileLoaded();
  }
  
  this.indy.onload = function() {
    fileLoaded();
  }
  
  this.lungeing.onload = function() {
    fileLoaded();
  }
  
  this.nine.onload = function() {
    fileLoaded();
  }
  
  this.riding.onload = function() {
    fileLoaded();
  }
  
  this.romal.onload = function() {
    fileLoaded();
  }
  
  this.signal.onload = function() {
    fileLoaded();
  }

  this.stock.onload = function() {
    fileLoaded();
  }

  
  this.bull.src = "whips/bull/image.png";
  this.chain.src = "whips/chain/image.png";
  this.indy.src = "whips/indy/image.png";
  this.lungeing.src = "whips/lungeing/image.png";
  this.nine.src = "whips/nine/image.png";
  this.riding.src = "whips/riding/image.png";
  this.romal.src = "whips/romal/image.png";
  this.signal.src = "whips/signal/image.png";
  this.stock.src = "whips/stock/image.png";


this.bull_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false);

  this.chain_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false);

  this.indy_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false);

  this.lungeing_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false);
  
  this.nine_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false);

  this.riding_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false);

  this.romal_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false);

  this.signal_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false);
 
  this.stock_sound.addEventListener('canplaythrough', function() {
    fileLoaded();
  }, false); 
  
  
  if (this.bull_sound.canPlayType('audio/ogg')) {
      extension = '.ogg';
  } else {
      extension = '.mp3';
  }
  sessionStorage.setItem("extension", extension);


  // Set images src
  this.bull_sound.src = "whips/bull/sound"+extension;
  this.chain_sound.src = "whips/chain/sound"+extension;
  this.indy_sound.src = "whips/indy/sound"+extension;
  this.lungeing_sound.src = "whips/lungeing/sound"+extension;
  this.nine_sound.src = "whips/nine/sound"+extension;
  this.riding_sound.src = "whips/riding/sound"+extension;
  this.romal_sound.src = "whips/romal/sound"+extension;
  this.signal_sound.src = "whips/signal/sound"+extension;
  this.stock_sound.src = "whips/stock/sound"+extension;
}




function init() {

setTimeout(function(){
               $('img#chorddiagram').fadeOut("fast",function(){
               		$('img#chorddiagram').removeClass('splash'); 
			   		var c1 =  $('#select1').val();
			   		$('img#chorddiagram').attr("src",'whips/' + c1 + '/image.png');
			   		$('audio#sample').attr("src",'whips/' + c1 + '/sound' + sessionStorage.getItem("extension"));
            $('img#chorddiagram').fadeIn("fast");	
            $('#select1').selectmenu('enable');
            $.mobile.loading('hide');
               });
		 	}, 1000);
}


$(function() { 
	$('#select1').change(function()
	{	   
	   var c1 =  $(this).val();
		
	   $('div#chord').fadeOut( "fast", function () { 
	   		$('img#chorddiagram').attr("src",'whips/' + c1 + '/image.png'); 
	   	 	$('div#chord').fadeIn('fast');
	   }); 
	   sessionStorage.getItem("extension");
     $('audio#sample').attr("src",'whips/' + c1 + '/sound' + sessionStorage.getItem("extension")); 
	});
	
	
	$('img#chorddiagram').click(function()
    {	 
			  myAudio = document.getElementById('sample');
			  myAudio.pause();
			  myAudio.currentTime = 0;
			  myAudio.play();
	});	
	
}); 