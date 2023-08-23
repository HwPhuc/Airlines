function addClickEventListeners() {
    const flightItems = document.querySelectorAll(".flight-item");

    flightItems.forEach((item) => {
        item.addEventListener("click", handleClick);
        item.addEventListener("mouseleave", handleMouseLeave); // Thêm sự kiện mouseleave
    });
}

function loadTickets() {
    fetch("./assets/js/ticket.json")
        .then((res) => res.json())
        .then((data) => {
            let html = "";
            for (let ticket of data) {
                html += `
                    <li class="flight-item">
                        <div class="flight-name">${ticket.name}</div>
                        <div class="flight-details">${ticket.details}</div>
                        <div class="flight-price">${ticket.price}</div>
                    </li>
                `;
            }
            const flightList = document.querySelector(".container");
            flightList.innerHTML += html;
            addClickEventListeners();
        })
        .catch((error) => console.log(error));
}

window.onload = function () {
    loadTickets();
};

function handleClick(event) {
    const item = event.currentTarget;
    item.classList.toggle("clicked");

    if (item.classList.contains("clicked")) {
        const confirmation = confirm("Xác nhận đặt vé?");
        if (confirmation) {
            alert("Đặt vé thành công");
            const returnConfirmation = confirm("Trở về trang chủ?");

            if (returnConfirmation) {
                window.location.href = "index.html";
            }
        } else {
            item.classList.remove("clicked");
        }
    }
}

function handleMouseLeave(event) {
    const item = event.currentTarget;
    item.classList.remove("clicked");
}

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

// Ẩn hiện khi click icon 3 gạch ngang
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
