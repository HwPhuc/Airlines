$(document).ready(() => {
    $(".tabs-nav > ul > li:first-child").addClass("active");
    $(".tabs-nav > ul > li").addClass("default");
    $("#tab-content-1").show();
    for(var i = 2; i <= 4; i++){
        $("#tab-content-"+ i).hide();
    }
    $(".tabs-nav > ul > li").click(function(){
        $(".tabs-nav > ul > li").addClass("default");
        $(".tabs-nav li").removeClass("active");
        $(this).removeClass("default");
        $(this).addClass("active");
        // Show / Hide 
        let tabID = $(this).attr("id").replace("tab-link-", "");
        $("div.tab-content").hide();
        $("#tab-content-" + tabID).show();
    });
    $(".hightbox-content").hide();
    $(".item").click(function(){
        let tabID = $(this).attr("class").replace("item #", "");
        let x = $(this).attr("id").replace("item-", "");
        let selector = ".more-" + tabID +" .hightbox-content-" + x;
        $(".hightbox-content").hide();
        $(selector).show();
        $(".delete").click(function(){
            $(selector).hide();
        });
    });
    // RATING STAR
    for(var i = 0; i <= 5; i++){
        $(".rating-list-" + i + " .rating-star i:nth-child(-n+" + i + ")").css("color", "#ffd52e");    
    }
    $("#rating-list").show();
    $("#0-star").css("border", "1.5px #0078c2 solid");
    $(".rating-filter").css("border", "2px #000 solid");
    $(".rating-filter").click(function(){
        let active_border =  "2px rgb(26, 148, 255) solid";
        let default_border = "2px #000 solid";
        $(".rating-filter").css("border", default_border);
        $(this).css("border", active_border);
        $(".rating-filter").css("background-color", "");
        $(this).css("background-color", "rgb(240, 248, 255)")
        let No = $(this).attr("id").replace("-star", "");
        var selector = ".rating-list-" + No;
        $(".rating__list").hide();
        if(No == 0) {
            $(".rating__list").show();
        }
        else {
            $(selector).show();
        }
    });
    //Số lượng đánh giá
    // for(var i = 1; i <= 5; i++) {
    //     // var amount = $(".rating-list-" + i).length;
    //     var amount = 0;
    //     for(var c of $(".rating-list-" + i))
    //     {
    //         amount = amount + 1;
    //     }
    //     $("#" + i + "-star > i").append(" (" + amount + ")");
    // }
    // Click like
    $(".like").one("click", function(){
        $(this).css("background-color", "rgb(219, 238, 255)");
        $(this).css("border-color", "transparent");
        $(this).append("(1)");
    });
});
function ShowTimeNow(){
    const curDate = new Date(); //Ngày hiện tại
    var curHour = curDate.getHours(); // Giờ hiện tại
    var curMin = curDate.getMinutes(); // Phút hiện tại
    var curSec = curDate.getSeconds(); // Giây hiện tại
    // Định dạng giờ theo kiểu HH:MM:SS
    var timeStr = (curHour < 10 ? "0" + curHour : curHour) + ":" +
                    (curMin < 10 ? "0" + curMin : curMin) + ":" +
                    (curSec < 10 ? "0" + curSec : curSec);    
    // Gán vào thẻ HTML có id là "time"
    document.getElementById("time").innerHTML = "Giờ địa phương: " + timeStr;
  }
  // Biến chứa số từ 1 đến 5
var number = 1;
var selector = "rating-list-" + number;
// Lấy danh sách tất cả các phần tử có giá trị giống nhau
var elements = document.querySelectorAll(selector);

// Lặp qua từng phần tử trong danh sách
elements.forEach(function(element) {
    element.style.color = 'yellow';
});


  //Gọi hàm khi tải xong trang web
window.onload = function(){
   ShowTimeNow();
}
setInterval(ShowTimeNow, 1000);    //Gọi lại hàm sau mỗi giây