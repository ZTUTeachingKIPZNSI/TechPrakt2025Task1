const newsContainer = document.querySelector('.news');
const addNewsButton = document.getElementById('add-news');
const toggleThemeButton = document.querySelector('.toggle-theme');
const body = document.body;
const loadingText = document.querySelector('.loading');

const newsData = [
    { title: "Сонячний шторм може вплинути на Землю", image: "https://source.unsplash.com/800x400/?sun", text: "Вчені попереджають про можливі наслідки потужного сонячного шторму." },
    { title: "Знайдено нову екзопланету", image: "https://source.unsplash.com/800x400/?planet", text: "Астрономи відкрили нову планету, яка потенційно може бути схожою на Землю." },
    { title: "Програма освоєння Місяця розширюється", image: "https://source.unsplash.com/800x400/?moon", text: "NASA планує нові місії на Місяць у рамках програми Artemis." }
];

function addNews() {
    loadingText.style.display = 'block';
    setTimeout(() => {
        loadingText.style.display = 'none';
        const randomNews = newsData[Math.floor(Math.random() * newsData.length)];
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        newsItem.innerHTML = `
                    <img src="${randomNews.image}" alt="${randomNews.title}">
                    <h2 class="news-title">${randomNews.title}</h2>
                    <p>${randomNews.text}</p>
                `;
        newsContainer.appendChild(newsItem);
    }, 1500);
}

function toggleTheme() {
    body.classList.toggle('light-mode');
}

addNewsButton.addEventListener('click', addNews);
toggleThemeButton.addEventListener('click', toggleTheme);