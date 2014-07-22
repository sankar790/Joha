var app = {
    initialize: function() {
        this.bindEvents();
    },
 
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
		
		// playAudio("http://tts-api.com/tts.mp3?q=hell how are you fine good or not");
		 FastClick.attach(document.body);
	 
    },
	store:function(){
		var textdef1=document.getElementById("regi_txtusername").value;
  		var textdef2=document.getElementById("regi_txtemail").value;
  		var textdef3=document.getElementById("regi_txtpwd").value;
  		//localStorage.username=document.getElementById("myText1").value;
  		localStorage.username=textdef1;
  		localStorage.password=textdef2;
  		localStorage.ip=textdef3;
  	//	document.getElementById("result").innerHTML="Configured I.P Address: " + localStorage.ip;
  		alert("Your Username is "+localStorage.username +"\nYour Password is "+localStorage.password+
  		  		 "\nYour Entered I.P Address is  "+localStorage.ip+"\n\nPlease Take Note of these Details!!");
  		//window.location.href="#Login";
		 $.mobile.changePage('#Login')
	},
	logMe:function(){
		  var user=localStorage.username;
	   var pass=localStorage.password;
	   var text1=document.getElementById("txtusername").value;
 		var text2=document.getElementById("txtpwd").value;
 		
	   if(user==text1 && pass==text2){
		   
		   if (user==""||pass==""){alert("Cannot be blank !!!");} 
		   
		   else{
			   $.mobile.changePage('#Homepage')
		   //window.location.href="#Homepage";
		   playAudio();
		   }
		   }
	   
	   else{
		   alert("Incorrect Login Details ");
		  // $.mobile.changePage('#Register');
		   //window.location.href="#Register";
		   }
		},
		logout:function(){
			//localStorage.username=null;
  		   //localStorage.password=null;
			  $.mobile.changePage('#Login')
			},
			startVoiceRecog:function(){
			
				  var maxMatches = 2;
                var promptString = "Speak now"; // optional
                var language = "en-US";                     // optional
                window.plugins.speechrecognizer.startRecognize(function(result){
                    alert(result);
                }, function(errorMessage){
                    console.log("Error message: " + errorMessage);
                }, maxMatches, promptString, language);
				},
};

	
		  
		  
		    var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio() {
            // Create Media object from src
			var src="http://tts-api.com/tts.mp3?q=hello "+localStorage.username+" to rams a remote auto-mation and monitoring system developed by Robert Perry in A I T";
            my_media = new Media(src, onSuccess, onError);

            // Play audio
            my_media.play();

            // Update my_media position every second
           
        }

function onSuccess() {
            console.log("playAudio():Audio Success");
        }

        // onError Callback 
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' + 
                  'message: ' + error.message + '\n');
        }


function myFunction(arg){
	var ip_var = localStorage.ip;
    	var delay1=document.getElementById("delay1").value;
    	var delay2=document.getElementById("delay2").value;
    	var delay3=document.getElementById("delay3").value;
    	var total=(delay1*3600000)+(delay2*60000)+(delay3*1000);
    	alert("Device Scheduled For "+delay1+" Hour(s) "+delay2+" Minute(s) "+delay3+" Second(s) Away " );
	//  alert(arg)
	}

$( document ).ready(function() {
							 
							 
				$('#delaylistview').on('click', 'li', function () {
   // alert('ok')
});
							 
							 
  $( "#contactuspage" ).on( "pageshow", function( event, ui ) {
  //alert( "This page was just hidden: " + ui.prevPage );
  var myCenter = new google.maps.LatLng(53.419188, -7.906433);

            //function initialize() {
                    var mapProp = {
                            center : myCenter,
                            zoom : 5,
                            mapTypeId : google.maps.MapTypeId.ROADMAP
                    };

                    var map = new google.maps.Map(document.getElementById("map_canvas"),
                                    mapProp);

                    var marker = new google.maps.Marker({
                            position : myCenter,
                            animation : google.maps.Animation.BOUNCE
                    });

                    marker.setMap(map);
  
                    var infowindow = new google.maps.InfoWindow(
                                    {
                content : '<div style="color:#000">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;R.A.M.S Headquaters</br>Where The Magic Happens!</div>'
                                    });

                    infowindow.open(map, marker);
                    
         //   }

          //  google.maps.event.addDomListener(window, 'load', initialize);	
  
 /* 
  var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(map_canvas, mapOptions);
	
	*/
  
});
});