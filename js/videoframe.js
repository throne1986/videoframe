   // creating stage variables for animation
   var stage = null;
   var timeline = null;

   var audioArray = [];

   var autoplay = true;

   var moviePowitalny = "https://skodavideo.s3-eu-west-1.amazonaws.com/skoda_gos_1168_m_11549.mp4";
   var movieName1 = "./videos/videoplayback.mp4"
   var movieNazwisko1 = "https://skodavideo.s3-eu-west-1.amazonaws.com/skoda_gos_1168_m_11549.mp4"

   // creating animation 
   $(document).ready(function () {
       stage = new createjs.Stage("videocanvas");
       timeline = new createjs.Timeline();

       createjs.Ticker.framerate = 50;
       createjs.Ticker.addEventListener("tick", tick);

       $(window).resize(resizeFunction);
       $(window).resize();
   });


   // creating ticker function for handling time 
   function tick() {
       timeline.gotoAndStop($("#playervideo")[0].currentTime * 1000);

       if ($("#playervideo")[0].currentTime > 2 && $("#playervideo")[0].currentTime < 4) {
           $("#testform").css("display", "block");


       } else {
           $("#testform").css("display", "none");
       }
       stage.update();

       for (var audio in audioArray) {

           if ($("#playervideo")[0].paused == true || $("#playervideo")[0].muted == true) {
               audioArray[audio].howl.pause();
               audioArray[audio].state = "paused";
           } else {

               if ($("#playervideo")[0].currentTime < audioArray[audio].position) {
                   audioArray[audio].howl.seek(0);
                   audioArray[audio].howl.pause();
                   audioArray[audio].state = "paused";



               } else if ($("#playervideo")[0].currentTime >= audioArray[audio].position && $("#playervideo")[0].currentTime < audioArray[audio].position + audioArray[audio].duration) {

                   console.log(2);

                   if (audioArray[audio].state == "paused") {
                       audioArray[audio].howl.seek($("#playervideo")[0].currentTime - audioArray[audio].position);
                       audioArray[audio].howl.play();
                       audioArray[audio].state = "playing";
                   }
               } else if ($("#playervideo")[0].currentTime > audioArray[audio].position + audioArray[audio].duration) {
                   if (audioArray[audio].state == "playing") {
                       audioArray[audio].state = "paused";
                   }
               }
           }

       }
   }

   function resizeFunction() {
       $("#videowrapper").height($("#videowrapper").width() * 576 / 1024);

   }

   window.addEventListener("message", receiveMessage, false);

   function receiveMessage(eventPosted) {

       var values = eventPosted.data.split("&");
       var event = values[0].split("=")[1];
       var fieldtype = values[1].split("=")[1];
       var value = values[2].split("=")[1];

       console.log(event, fieldtype, value);

       switch (event) {
           case "fieldchanged":

               switch (fieldtype) {
                   case "name":

                       openSlide("nameSlide", {
                           value: value
                       });

                       //                        switch(value) {
                       //                            case "0":
                       //
                       //                                openSlide("powitalny", { value: value });
                       //                               // playVideo(movie1);
                       //
                       //                                break;
                       //                            case "1":
                       //                                openSlide("powitalny", { value: value });
                       //                               // playVideo(movie2);
                       //
                       //                                break;
                       //                            default:
                       //
                       //                            break;
                       //                        }
                       break;
                   case "nazwisko":
                       openSlide("nazwiskoSlide", {
                           value: value,
                       });
                    break
                       

                   default:
                       break;
               }
               break;
           default:
               console.log("Event not supported");
               break;
       }

   }

   function openSlide(slideName, params) {
       switch (slideName) {
           case "powitalny":
               openPowitalny(params);
               break;
               case "nameSlide":
               openName(params);
               break;
               case "nazwiskoSlide":
               openNazwisko(params);
               break;
       }

   }
   var sampleImage = null;
   var imageLoaded = false;
   var sound = null;
   var params = null;
   var audioLoaded = false;

   function openName(_params) {

    playVideo(movieName1);

   }

   function openNazwisko(_params) {
    playVideo(movieNazwisko1);

   }
   function openPowitalny(_params) {

       clearAllCanvas();

       params = _params;

       sampleImage = new Image();
       sampleImage.onload = function () {
           imageLoaded = true;
           checkIfAllLoaded();
       }
       sampleImage.src = "images/download.jpg";

       // sound = new Howl({
       //   src: ['audio/1001.mp3']
       // });

       // audioArray['nameStartboard'] = { position:3, howl: sound, duration: 0 };

       // sound.once('load', function(){

       //     sound.seek(0.4);
       //     sound.play();

       //     audioLoaded = true;
       //     checkIfAllLoaded();
       // });





   }

   function checkIfAllLoaded() {
       //if( imageLoaded==true && audioLoaded==true ) {
       if (imageLoaded == true) {
           for (var audio in audioArray) {
               console.log(audio);
               audioArray[audio].duration = audioArray[audio].howl.duration();
               audioArray[audio].state = "paused";
           }

           openPowitalnyContentReady();
       }
   }

   function openPowitalnyContentReady() {

       var circle = new createjs.Shape();
       circle.graphics.beginFill("DeepSkyBlue").drawRect(0, 0, 50, 100);
       circle.x = 100;
       circle.y = 100;
       stage.addChild(circle);

       var circleTween = createjs.Tween.get(circle).to({
           x: 900
       }, 1000, createjs.Ease.getPowInOut(4));
       timeline.addTween(circleTween);


       var obrazek = new createjs.Bitmap(sampleImage);
       obrazek.x = 512;
       obrazek.y = 150;
       obrazek.regX = sampleImage.width / 2;
       obrazek.regY = sampleImage.height / 2;
       stage.addChild(obrazek);

       var obrazekTween = createjs.Tween.get(obrazek).to({
           alpha: 0,
           scale: 0.1
       }, 0).wait(600).to({
           alpha: 1,
           scale: 0.4
       }, 300).wait(4600).to({
           alpha: 0,
           scale: 0.1
       }, 300);
       timeline.addTween(obrazekTween);


       obrazek.addEventListener("click", function () {
           alert("Nie drażnij lwa");
       });


       var text = new createjs.Text(params.value, "bold 30px Arial", "#000000");
       text.x = 1024 / 2;
       text.y = 405;
       text.alpha = 0;
       text.textAlign = "center";
       text.textBaseline = "alphabetic";

       stage.addChild(text);

       var textTween = createjs.Tween.get(text).to({
           alpha: 0
       }, 0, createjs.Ease.elasticOut()).wait(600).to({
           alpha: 1
       }, 300).wait(4600).to({
           alpha: 0
       }, 300, createjs.Ease.elasticIn());
       timeline.addTween(textTween);

       stage.update();

       playVideo(moviePowitalny);
       //playVideo(movie2);

   }

   function clearAllCanvas() {
       // timeline.removeAll();
       stage.removeAllChildren();
       audioArray = []

   }

   function playVideo(src) {


       $("#playervideo").attr("src", src);
       $("#playervideo")[0].muted = false;



       if (autoplay == true) {

           var playPromise = $("#playervideo")[0].play();

           if (playPromise !== undefined) {

               playPromise.then(function () {}).catch(function () {

                   if (autoplay == true) {
                       $("#video-unmute-button").addClass("show");
                       $("#playervideo")[0].muted = true;
                       var playPromise2 = $("#playervideo")[0].play();

                       playPromise2.then(function () {

                       }).catch(function () {
                           $("#video-start-button").addClass("show");


                           $("#video-start-button").on("click", function () {
                               $("#playervideo")[0].muted = false;
                               $("#playervideo")[0].play();
                               $("#video-start-button").removeClass("show");

                           });
                       });

                       console.log("pause force");
                   } else {

                   }
               });
           } else {}
       } else {

       }

   }