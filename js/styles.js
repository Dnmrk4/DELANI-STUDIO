$(document).ready(function() {
            $(".block4hidden, .block4showing").click(function() {
                $(".block4showing").slideToggle('fast');
                $(".block4hidden").slideToggle('fast');
            });
            $(".block4bhidden, .block4bshowing").click(function() {
                $(".block4bshowing").slideToggle('fast');
                $(".block4bhidden").slideToggle('fast');
            });
            $(".block4chidden, .block4cshowing").click(function() {
                $(".block4cshowing").slideToggle('fast');
                $(".block4chidden").slideToggle('fast');
            });
            $("#work1").hover(function() {
                $(this).css("background-color", "grey");
            }, function() {
                $(this).css("background-color", "white");
            });
            $("#work2").hover(function() {
                $(this).css("background-color", "lightblue");
            }, function() {
                $(this).css("background-color", "white");
            });
            $("#work3").hover(function() {
                $(this).css("background-color", "sandybrown");
            }, function() {
                $(this).css("background-color", "white");
            });
            $("#work4").hover(function() {
                $(this).css("background-color", "teal");
            }, function() {
                $(this).css("background-color", "white");
            });
            $("#work5").hover(function() {
                $(this).css("background-color", "steelblue");
            }, function() {
                $(this).css("background-color", "white");
            });
            $("#work6").hover(function() {
                $(this).css("background-color", "sandybrown");
            }, function() {
                $(this).css("background-color", "white");
            });
            $("#work7").hover(function() {
                $(this).css("background-color", "brown");
            }, function() {
                $(this).css("background-color", "white");
            });
            $("#work8").hover(function() {
                $(this).css("background-color", "peru");
            }, function() {
                $(this).css("background-color", "white");
            });
            $("#submit").click(function() {
                        alert("Your message has been received!");
                        alert("THANK YOU!");
                    });
                });