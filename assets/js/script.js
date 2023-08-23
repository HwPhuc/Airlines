// Trượt đến vị trí của nội dung nav ul li
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

            var targetId = this.getAttribute("href").substring(1); // Lấy giá trị id từ href
            var target = document.getElementById(targetId); // Lựa chọn phần tử theo id

            if (target) {
                target.scrollIntoView({ behavior: "smooth" }); // Trượt đến vị trí của phần tử
            }
        });
    });
});

//Auto Complete
$(document).ready(function () {
    function showSuggestions(inputId, suggestId, suggestList) {
        $(inputId).on("keyup", function () {
            let keyword = $(this).val();
            let suggestions = [];

            for (let c of suggestList) {
                if (c.indexOf(keyword) >= 0) {
                    suggestions.push(c);
                }
            }

            let suggestElement = $(suggestId);
            suggestElement.empty();

            if (suggestions.length > 0) {
                for (let i = 0; i < suggestions.length; i++) {
                    let suggestion = suggestions[i];
                    let li = $("<li>").text(suggestion);
                    li.on("click", function () {
                        $(inputId).val(suggestion);
                        suggestElement.empty();
                    });
                    suggestElement.append(li);
                }
                suggestElement.show();
            } else {
                suggestElement.hide();
            }
        });
    }

    // Load JSON data
    $.getJSON("assets/js/countries.json", function (data) {
        showSuggestions("#place1", "#suggest1", data);
    });

    $("html").on("click", function () {
        $(".suggest-container ul").hide();
    });

    $(window).on("scroll", function () {
        $(".suggest-container ul").hide();
    });
});

// Nút go to top
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Xử lý sự kiện scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            // Hiển thị nút khi lăn chuột xuống dưới
            scrollToTopBtn.style.display = "block";
        } else {
            // Ẩn nút khi lăn chuột lên đầu
            scrollToTopBtn.style.display = "none";
        }
    });

    // Xử lý sự kiện click
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// Hiệu ứng xuất hiện khi kéo qua thanh nav
var nav = document.querySelector("nav");
var navHeight = nav.offsetHeight;
var navOffset = nav.offsetTop;

window.addEventListener("scroll", function () {
    if (window.pageYOffset > navOffset + navHeight) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

function changeBackground(selectedOption) {
    const bookingOptions = document.querySelectorAll(".booking__option");

    // Loại bỏ lớp CSS 'active' từ tất cả các ô
    bookingOptions.forEach((option) => {
        option.classList.remove("active");
        option.style.backgroundColor = "#f1f5f9";
    });

    // Thêm lớp CSS 'active' cho ô được click và thay đổi màu nền thành xanh
    selectedOption.classList.add("active");
    selectedOption.style.backgroundColor = "#3d5cb8";
}

function redirect(page) {
    window.location.href = page;
}

// Nhấy nháy nếu input rỗng
function checkForm(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút submit

    var inputElements = document.querySelectorAll(".booking__container input");
    var allInputsFilled = true;

    inputElements.forEach(function (inputElement) {
        if (!inputElement.value) {
            inputElement.classList.add("blink-animation");
            allInputsFilled = false;

            setTimeout(function () {
                inputElement.classList.remove("blink-animation");
            }, 2000);
        }
    });

    if (allInputsFilled) {
        // Chuyển hướng đến trang HTML khác
        window.location.href = "ticket.html";
    }
}

// Ẩn hiện nav ul khi click vào icon 3 dấu gạch ngang
// Cách 1
// const menuToggle = document.querySelector(".menu-toggle");
// const navLinks = document.querySelector(".nav__links");
// const mobileNavLinks = document.querySelector(".mobile__nav__links");
// const mobileNavLinksItems = mobileNavLinks.querySelectorAll("li");

// menuToggle.addEventListener("click", function () {
//     navLinks.classList.toggle("active");
//     mobileNavLinks.classList.toggle("active");
// });

// mobileNavLinksItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//         mobileNavLinks.classList.toggle("active");
//     });
// });

// Cách 2
$(document).ready(() => {
    var check_click = 0;
    $(".mobile__nav__links").hide();
    $(".menu-toggle").click(function () {
        check_click++;
        if (check_click % 2 == 0) {
            $(".mobile__nav__links").hide();
        } else {
            $(".mobile__nav__links").show();
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("btn-sub");
    button.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định

        var emailInput = document.getElementById("email");
        var email = emailInput.value.trim();
        if (isGmailAddress(email)) {
            alert("Chúng tôi sẽ gửi thông báo mới nhất cho bạn");
        } else {
            alert("Vui lòng nhập một địa chỉ email Gmail hợp lệ");
        }
    });

    function isGmailAddress(email) {
        var re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return re.test(email);
    }
});
