document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.slide');

    if (slides.length === 0) {
        console.error("Слайди не знайдені!");
        return;
    }

    function changeSlide(step) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + step + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function openNews(index) {
        let newsFull = document.getElementById('newsFull');
        let newsData = [
            { title: "Іннагурація Дональда Трампа 20.01.2025", text: "Повний текст новини 1..." },
            { title: "Ілон Маск і його 'дивні задуми'", text: "Повний текст новини 2..." },
            { title: "Дональд Трамп об'являє війну Панамі", text: "Повний текст новини 3..." },
            { title: "Дональд Трамп обговорює приєднання Канади", text: "Повний текст новини 4..." }
        ];
        newsFull.innerHTML = `<h2>${newsData[index - 1].title}</h2><p>${newsData[index - 1].text}</p>`;
        newsFull.classList.add('show');
    }
});