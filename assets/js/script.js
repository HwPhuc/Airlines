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
