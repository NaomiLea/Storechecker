$(document).ready(function() {
    $("#selectButton").click(function() {
        $("#search").css("color", "red");
        $("#search").css("font-size", "24px");
        $(".screen").css("background-image", "none");
        $("#search").css("display", "block");
        $(".item").css("visibility", "hidden");

    });
    $("#startButton").click(function() {
        $("#search").css("display", "none");
        $(".item").css("visibility", "visible");
        $(".itemlist").css("color", "white");
        $(".item").css("font-size", "18px");
        $(".games").css("visibility", "hidden");
    })
    $("#bButton").click(function() {
        $(".screen").css("background-image", "url(https://news.amaze.com/media/40551/imran-pardes.jpg)");
        $("li").css("display", "none");
    })
    var i = 0;
    console.log(i);
    var len = $('.itemlist').siblings().andSelf().length;
    $("#down").click(function() {
        if (i == len) {
            item0 = document.getElementById(i - 1);
            item0.style.color = "white";
            i = 0;
        }
        if (i != 0) {
            item0 = document.getElementById(i - 1);
            item0.style.color = "white";
        }
        var item1 = document.getElementById(i);
        item1.style.color = "red";
        i++;
        $("#aButton").click(function() {

            var url = $("#link" + (i - 1)).text();
            window.location.href = url;
            console.log(url);
        })
    })


    $("#right").click(function() {
        var games = 0;
        games++;
        $("#search").css("display", "none");
        if (games % 2 == 1) {
            $(".games").css("visibility", "visible");
            $(".item").css("visibility", "hidden");

        } else {
            $(".item").css("visibility", "visible");
            $(".games").css("visibility", "hidden");
        }

    })

    $("#left").click(function() {
        var games = 0;
        games++;
        $("#search").css("display", "none");
        if (games % 2 == 0) {
            $(".games").css("visibility", "visible");
            $(".item").css("visibility", "hidden");
        } else {
            $(".item").css("visibility", "visible");
            $(".games").css("visibility", "hidden");
        }

    })

});
