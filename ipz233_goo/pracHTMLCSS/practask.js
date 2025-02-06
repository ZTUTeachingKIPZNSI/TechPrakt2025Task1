const img = document.getElementById("oleg");

let x = 100, y = 100;
let dx = 3, dy = 3;

function moveImage() {
    const maxX = window.innerWidth - img.clientWidth;
    const maxY = window.innerHeight - img.clientHeight;

    x += dx;
    y += dy;

    if (x <= 0 || x >= maxX) dx *= -1;
    if (y <= 0 || y >= maxY) dy *= -1;

    img.style.left = x + "px";
    img.style.top = y + "px";

    requestAnimationFrame(moveImage);
}

moveImage();