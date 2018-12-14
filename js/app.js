
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
        // $(function(){
        //     $.ajax({                                      
        //       url: '/database/db.php',                       
        //       data: "",                                                      
        //       dataType: 'json',                
        //       success: function(data)          
        //       {
        //         //var obj=JSON.parse(data);
        //         var obj=data;
        //         for (var x in obj)
        //           {
        //           alert(obj[x].id + " AND " + obj[x].desc);
        //           }         
        //       } 
        //    });   
        // });   