//form script


        $(document).ready(function () {
            $(window).resize(resizeIframe);
            $(window).resize();
            $("input#name").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "name" + "&value=" + $("input#name").val(), "*");
            });

            $("input#nazwisko").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "nazwisko" + "&value=" + $("input#nnazwisko").val(), "*");
            });
            
            $("input#miasto").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "name" + "&value=" + $("input#name").val(), "*");
            });
            
            $("input#kod").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "name" + "&value=" + $("input#kod").val(), "*");
            });

            $("input#email").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "name" + "&value=" + $("input#email").val(), "*");
            });
        });

        function resizeIframe() {
            console.log($("iframe#videoframe").width()*576/1024 );
            $("iframe#videoframe").height( $("iframe#videoframe").width()*576/1024 );

        }

    