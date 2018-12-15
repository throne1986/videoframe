//form script


        $(document).ready(function () {
            $(window).resize(resizeIframe);
            $(window).resize();
            $("input#name").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "name" + "&value=" + $("input#name").val(), "*");
            });

            $("input#nazwisko").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "nazwisko" + "&value=" + $("input#nazwisko").val(), "*");
            });

            $("input#miasto").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "miasto" + "&value=" + $("input#miasto").val(), "*");
            });

            $("input#kod").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "kod" + "&value=" + $("input#kod").val(), "*");
            });

            // play a video after the user enter an input email works perfect
            $("input#email").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "email" + "&value=" + $("input#email").val(), "*");
            });

            //play a video when a user clicks submit button this is not working !!!!!!!
            $("#button").on("click", function(){
              document.getElementById('videoframe').contentWindow.postMessage(
                  JSON.stringify({
                    event: 'openSubmit'
                  }), "*")
                   console.log('openSubmit');
            })


        });

        function resizeIframe() {
            console.log($("iframe#videoframe").width()*576/1024 );
            $("iframe#videoframe").height( $("iframe#videoframe").width()*576/1024 );

        }
