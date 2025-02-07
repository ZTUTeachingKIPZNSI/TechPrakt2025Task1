document.addEventListener("DOMContentLoaded", function () {
    const newsContainer = document.querySelector('.news');
    const addNewsButton = document.getElementById('add-news');
    const clearNewsButton = document.getElementById('clear-news');

    function loadNews() {
        const storedNews = JSON.parse(localStorage.getItem('news')) || [];
        newsContainer.innerHTML = ""; // Очищаємо перед відображенням
        storedNews.forEach(news => addNewsToDOM(news));
    }

    function addNewsToDOM(news) {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
            <img src="${news.image}" alt="${news.title}">
            <h2 class="news-title">${news.title}</h2>
            <p>${news.text}</p>
        `;
        newsContainer.appendChild(newsItem);
    }

    function saveNews(news) {
        const storedNews = JSON.parse(localStorage.getItem('news')) || [];
        storedNews.push(news);
        localStorage.setItem('news', JSON.stringify(storedNews));
    }

    addNewsButton.addEventListener("click", function () {
        const title = prompt("Введіть заголовок новини:");
        if (!title) return;

        const text = prompt("Введіть опис новини:");
        if (!text) return;

        const image = prompt("Вставте посилання на зображення:");
        if (!image) return;

        const news = { title, text, image };
        saveNews(news);
        addNewsToDOM(news);
    });

    clearNewsButton.addEventListener("click", function () {
        localStorage.removeItem('news');
        newsContainer.innerHTML = "";
    });

    loadNews();
});
