//form script


        $(document).ready(function () {
            $(window).resize(resizeIframe);
            $(window).resize();
            $("input#imie").on("change", function () {
                document.getElementById('videoframe').contentWindow.postMessage( "event=fieldchanged&fieldtype=" + "imie" + "&value=" + $("input#imie").val(), "*");
            });

        });

        function resizeIframe() {
            console.log($("iframe#videoframe").width()*576/1024 );
            $("iframe#videoframe").height( $("iframe#videoframe").width()*576/1024 );

        }
