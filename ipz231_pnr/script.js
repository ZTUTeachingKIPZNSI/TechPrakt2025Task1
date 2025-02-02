document.addEventListener("DOMContentLoaded", function () {
    const newsItems = document.querySelectorAll(".news-item");

    newsItems.forEach(item => {
        item.addEventListener("click", function () {
            alert("You clicked on: " + this.querySelector("h2").textContent);
        });
    });
});
