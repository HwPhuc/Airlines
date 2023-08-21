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
