// Объект с переводами всех текстовых элементов
const translations = {
    // --- ДОБАВЛЕНИЕ НОВЫХ КЛЮЧЕЙ ДЛЯ ПЕРЕВОДА ---
    "welcome-message": {
        "ru": "Добро пожаловать",
        "kg": "Кош келиңиз"
    },
    "portal-description": {
        "ru": "Официальный портал Кара-Гуз айыл аймагы.",
        "kg": "Кара-Гуз айыл аймагынын расмий порталы."
    },
    // --- СУЩЕСТВУЮЩИЕ ПЕРЕВОДЫ ---
    "nav-home": {
        "ru": "Главная",
        "kg": "Башкы бет"
    },
    "nav-about": {
        "ru": "О нас",
        "kg": "Биз жөнүндө"
    },
    "nav-news": {
        "ru": "Новости",
        "kg": "Жаңылыктар"
    },
    "nav-documents": {
        "ru": "Документы",
        "kg": "Документтер"
    },
    "nav-appeals": {
        "ru": "Обращения",
        "kg": "Кайрылуулар"
    },
    "nav-gallery": {
        "ru": "Галерея",
        "kg": "Галерея"
    },
    "nav-contacts": {
        "ru": "Контакты",
        "kg": "Байланыш"
    },
    "page-home-title": {
        "ru": "Официальный портал местного самоуправления",
        "kg": "Жергиликтүү өз алдынча башкаруунун расмий порталы"
    },
    "page-home-subtitle": {
        "ru": "Кара-ГУЗ айыл аймагы",
        "kg": "Кара-Гуз айыл аймагы"
    },
    "info-news-title": {
        "ru": "Последние новости",
        "kg": "Акыркы жаңылыктар"
    },
    "info-news-desc": {
        "ru": "Будьте в курсе всех событий нашего региона.",
        "kg": "Биздин аймактагы бардык окуялардан кабардар болуңуз."
    },
    "info-news-link": {
        "ru": "Смотреть все новости",
        "kg": "Бардык жаңылыктарды көрүү"
    },
    "info-decrees-title": {
        "ru": "Указы",
        "kg": "Токтомдор"
    },
    "info-decrees-desc": {
        "ru": "Ознакомьтесь с указами.",
        "kg": "Токтомдор менен таанышыңыз."
    },
    "info-link": {
        "ru": "Перейти в раздел",
        "kg": "Бөлүмгө өтүү"
    },
    "info-corruption-title": {
        "ru": "Борьба с коррупцией",
        "kg": "Коррупцияга каршы күрөш"
    },
    "info-corruption-desc": {
        "ru": "Информация о мерах по противодействию коррупции.",
        "kg": "Коррупцияга каршы күрөшүү боюнча маалымат."
    },
    "info-plans-title": {
        "ru": "Планы и цели",
        "kg": "План жана максаттар"
    },
    "info-plans-desc": {
        "ru": "Ознакомьтесь с будущими прогрессиями.",
        "kg": "Келечектеги прогрессиялар менен таанышыңыз."
    },
    "info-improvement-title": {
        "ru": "Планы по улучшению айылного округа",
        "kg": "Айыл аймагын жакшыртуу пландары"
    },
    "info-improvement-desc": {
        "ru": "План по социально-экономическому развитию на 2025-2030 годы.",
        "kg": "2025-2030-жылдарга карата социалдык-экономикалык өнүктүрүү планы."
    },
    "info-appeal-title": {
        "ru": "Обращение",
        "kg": "Кайрылуу"
    },
    "info-appeal-desc": {
        "ru": "Задайте свой вопрос или оставьте обращение онлайн.",
        "kg": "Сурооңузду бериңиз же кайрылууңузду онлайн калтырыңыз."
    },
    "sidebar-leader-title": {
        "ru": "Глава айыл окмоту",
        "kg": "Айыл өкмөтүнүн башчысы"
    },
    "sidebar-leader-position": {
        "ru": "Глава Кара-Гуз айыл аймагы",
        "kg": "Кара-Гуз айыл аймагынын башчысы"
    },
    "section-about-title": {
        "ru": "Об айылном аймаке",
        "kg": "Айыл аймагы жөнүндө"
    },
    "about-info-title": {
        "ru": "Общая информация",
        "kg": "Жалпы маалымат"
    },
    "about-official-name": {
        "ru": "Официальное название:",
        "kg": "Расмий аталышы:"
    },
    "about-year-founded": {
        "ru": "Год основания:",
        "kg": "Негизделген жылы:"
    },
    "about-location": {
        "ru": "Географическое расположение:",
        "kg": "Географиялык жайгашуусу:"
    },
    "about-head": {
        "ru": "Глава:",
        "kg": "Башчысы:"
    },
    "about-climate": {
        "ru": "Климат:",
        "kg": "Климаты:"
    },
    "about-composition": {
        "ru": "Состав:",
        "kg": "Курамы:"
    },
    "about-key-indicators-title": {
        "ru": "Ключевые показатели (на 01.01.2025)",
        "kg": "Негизги көрсөткүчтөр (01.01.2025-ж.)"
    },
    "table-header-indicator": {
        "ru": "Показатель",
        "kg": "Көрсөткүч"
    },
    "table-header-value": {
        "ru": "Значение",
        "kg": "Мааниси"
    },
    "about-area-label": {
        "ru": "Площадь",
        "kg": "Аянты"
    },
    "about-distance-district": {
        "ru": "Расстояние от районного центра",
        "kg": "Район борборунан аралыгы"
    },
    "about-distance-region": {
        "ru": "Расстояние от областного центра",
        "kg": "Областтык борбордон аралыгы"
    },
    "about-population": {
        "ru": "Общая численность населения",
        "kg": "Жалпы калкынын саны"
    },
    "about-households": {
        "ru": "Количество хозяйств",
        "kg": "Чарбалардын саны"
    },
    "about-altitude": {
        "ru": "Высота над уровнем моря",
        "kg": "Деңиз деңгээлинен бийиктиги"
    },
    "about-nationality": {
        "ru": "Национальный состав",
        "kg": "Улуттук курамы"
    },
    "about-social-composition": {
        "ru": "Социальный состав",
        "kg": "Социалдык курамы"
    },
    "about-crimes-registered": {
        "ru": "Зарегистрировано преступлений",
        "kg": "Катталган кылмыштардын саны"
    },
    "about-villages-title": {
        "ru": "Села и их население",
        "kg": "Айылдар жана алардын калкы"
    },
    "section-news-title": {
        "ru": "Новости",
        "kg": "Жаңылыктар"
    },
    "section-docs-title": {
        "ru": "Документы",
        "kg": "Документтер"
    },
    "filter-all": {
        "ru": "Все",
        "kg": "Бардыгы"
    },
    "filter-reports": {
        "ru": "Отчеты",
        "kg": "Отчеттор"
    },
    "filter-resolutions": {
        "ru": "Постановления",
        "kg": "Токтомдор"
    },
    "doc-date-text": {
        "ru": "Дата:",
        "kg": "Датасы:"
    },
    "doc-download-link": {
        "ru": "Скачать (PDF)",
        "kg": "Жүктөп алуу (PDF)"
    },
    "doc-1-title": {
        "ru": "Постановление \"О мерах по благоустройству села\"",
        "kg": "“Айылды көрктөндүрүү боюнча чаралар жөнүндө” токтому"
    },
    "doc-1-desc": {
        "ru": "Постановление, касающееся уборки и озеленения территорий айыл аймагы.",
        "kg": "Айыл аймагынын аймактарын тазалоо жана жашылдандырууга тиешелүү токтом."
    },
    "doc-2-title": {
        "ru": "Отчет о расходовании средств за II квартал 2025",
        "kg": "2025-жылдын II чейрегиндеги каражаттардын чыгымдалышы жөнүндө отчет"
    },
    "doc-2-desc": {
        "ru": "Итоговый годовой отчет о деятельности айыл окмоту.",
        "kg": "Айыл өкмөтүнүн ишмердүүлүгү жөнүндө жылдык жыйынтык отчет."
    },
    "doc-3-title": {
        "ru": "Постановление \"О порядке рассмотрения обращений граждан\"",
        "kg": "“Жарандардын кайрылууларын кароонун тартиби жөнүндө” токтому"
    },
    "doc-3-desc": {
        "ru": "Документ, регламентирующий процесс приёма и рассмотрения обращений жителей.",
        "kg": "Жашоочулардын кайрылууларын кабыл алуу жана кароо процессин жөнгө салган документ."
    },
    "doc-4-title": {
        "ru": "Отчет о проделанной работе за 2024 год",
        "kg": "2024-жыл ичинде аткарылган иштер жөнүндө отчет"
    },
    "doc-4-desc": {
        "ru": "Итоговый годовой отчет о деятельности айыл окмоту.",
        "kg": "Айыл өкмөтүнүн ишмердүүлүгү жөнүндө жылдык жыйынтык отчет."
    },
    "section-appeals-title": {
        "ru": "Свяжитесь с нами",
        "kg": "Биз менен байланышыңыз"
    },
    "appeals-text-1": {
        "ru": "Если у вас есть официальное обращение, вопрос или предложение, вы можете отправить его напрямую на нашу электронную почту. Мы рассмотрим ваше письмо в ближайшее время.",
        "kg": "Эгерде сизде расмий кайрылуу, суроо же сунуш болсо, аны түздөн-түз биздин электрондук почтага жөнөтсөңүз болот. Биз сиздин катыңызды жакынкы убакта карап чыгабыз."
    },
    "appeals-email-text": {
        "ru": "Электронная почта для обращений:",
        "kg": "Кайрылуулар үчүн электрондук почта:"
    },
    "appeals-email-instruction": {
        "ru": "Нажмите на адрес, чтобы отправить письмо через вашу почтовую программу.",
        "kg": "Кат жөнөтүү үчүн дарекке басыңыз."
    },
    "section-gallery-title": {
        "ru": "Галерея",
        "kg": "Галерея"
    },
    "gallery-search-placeholder": {
        "ru": "Поиск по галерее...",
        "kg": "Галереядан издөө..."
    },
    "section-contacts-title": {
        "ru": "Контакты",
        "kg": "Байланыш"
    },
    "contacts-address": {
        "ru": "Адрес:",
        "kg": "Дареги:"
    },
    "contacts-phone": {
        "ru": "Телефон:",
        "kg": "Телефон:"
    },
    "contacts-email": {
        "ru": "Email:",
        "kg": "Email:"
    },
    "contacts-postcode": {
        "ru": "Почтовый индекс:",
        "kg": "Почта индекси:"
    },
    "footer-copyright": {
        "ru": "© 2025 Кара-Гуз айыл аймагы. Все права защищены.",
        "kg": "© 2025 Кара-Гуз айыл аймагы. Бардык укуктар корголгон."
    },
    "back-to-news-btn": {
        "ru": "← Все новости",
        "kg": "← Бардык жаңылыктар"
    },
    "read-more-btn": {
        "ru": "Подробнее",
        "kg": "Кененирээк"
    },
    "no-news-message": {
        "ru": "На данный момент новостей нет.",
        "kg": "Учурда жаңылыктар жок."
    },
    "fetch-error-message": {
        "ru": "Не удалось загрузить новости. Пожалуйста, попробуйте позже.",
        "kg": "Жаңылыктарды жүктөй алган жок. Сураныч, кийинчерээк кайталап көрүңүз."
    },
    "api-error-message": {
        "ru": "Сетевая ошибка при загрузке",
        "kg": "Жүктөөдө тармактык ката"
    }
};

// Функция для установки языка
function setLanguage(lang) {
    // Перевод элементов с data-translate
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });

    // Перевод ссылок с data-translate-link-text
    const linkElements = document.querySelectorAll('[data-translate-link-text]');
    linkElements.forEach(element => {
        const key = element.getAttribute('data-translate-link-text');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });

    // Отдельная обработка для placeholder
    const gallerySearch = document.getElementById('gallery-search');
    if (gallerySearch) {
        const key = gallerySearch.getAttribute('data-translate-placeholder');
        if (translations[key] && translations[key][lang]) {
            gallerySearch.placeholder = translations[key][lang];
        }
    }

    // Отдельная обработка для элементов с strong (в основном в секции "О нас")
    const strongElements = document.querySelectorAll('p strong');
    strongElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });
}

// Загрузка и отображение новостей (существующий код)
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация языка по умолчанию
    setLanguage('ru');

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav'); // Изменено с '.nav-menu' на '.nav'

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('data-target');

            sections.forEach(section => {
                section.style.display = 'none';
                section.classList.remove('active');
            });

            const activeSection = document.getElementById(target);
            if (activeSection) {
                activeSection.style.display = 'block';
                activeSection.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');

            // Закомментированный старый код
            // if (menuToggle.classList.contains('open')) {
            //     menuToggle.classList.remove('open');
            //     navMenu.classList.remove('open');
            // }

            // Добавлен новый код для закрытия меню, если оно открыто
            if (navMenu.classList.contains('is-open')) {
                navMenu.classList.remove('is-open');
                menuToggle.classList.remove('is-open');
            }
        });
    });

    menuToggle.addEventListener('click', () => {
        // Закомментированный старый код
        // menuToggle.classList.toggle('open');
        // navMenu.classList.toggle('open');

        // Добавлен новый код
        navMenu.classList.toggle('is-open');
        menuToggle.classList.toggle('is-open');
    });

    // Обработчики кнопок для переключения языка
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            langButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const lang = e.target.id.replace('lang-', '');
            setLanguage(lang);
        });
    });

    const newsListView = document.querySelector('.news-list-view');
    const newsFullView = document.querySelector('.news-full-view');

    // Функция для загрузки и отображения списка новостей
    const fetchNews = async () => {
        try {
            const response = await fetch('http://localhost:1337/api/News?populate=image');
            if (!response.ok) {
                throw new Error('Сетевая ошибка при загрузке новостей.');
            }
            const data = await response.json();
            displayNews(data.data);
        } catch (error) {
            console.error('Ошибка при загрузке новостей:', error);
            const currentLang = document.querySelector('.lang-btn.active').id.replace('lang-', '');
            newsListView.innerHTML = `<p>${translations["fetch-error-message"][currentLang]}</p>`;
        }
    };

    // Функция для отображения списка новостей
    const displayNews = (articles) => {
        const currentLang = document.querySelector('.lang-btn.active').id.replace('lang-', '');
        newsListView.innerHTML = '';
        if (articles && articles.length > 0) {
            const newsGrid = document.createElement('div');
            newsGrid.className = 'news-grid';

            articles.forEach(article => {
                const imageUrl = article.attributes.image?.data?.attributes?.url ? `http://localhost:1337${article.attributes.image.data.attributes.url}` : 'images/placeholder-news.jpg';
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <img src="${imageUrl}" alt="${article.attributes.title}" loading="lazy" width="100%" height="200">
                    <div style="padding: 15px;">
                        <h3 class="news-title">${article.attributes.title}</h3>
                        <p class="news-date">${new Date(article.attributes.date).toLocaleDateString(currentLang === 'kg' ? 'ky-KG' : 'ru-RU')}</p>
                        <p>${article.attributes.description}</p>
                    </div>
                    <a href="#" class="read-more-btn" data-id="${article.id}">${translations["read-more-btn"][currentLang]}</a>
                `;
                newsGrid.appendChild(newsItem);
            });
            newsListView.appendChild(newsGrid);
        } else {
            newsListView.innerHTML = `<p>${translations["no-news-message"][currentLang]}</p>`;
        }
    };

    // Функция для отображения полной статьи
    const showFullArticle = (article) => {
        const currentLang = document.querySelector('.lang-btn.active').id.replace('lang-', '');
        newsFullView.style.display = 'block';
        newsListView.style.display = 'none';

        const imageUrl = article.attributes.image?.data?.attributes?.url ? `http://localhost:1337${article.attributes.image.data.attributes.url}` : 'images/placeholder-news.jpg';
        newsFullView.innerHTML = `
            <div class="full-article">
                <button class="back-to-news-btn">${translations["back-to-news-btn"][currentLang]}</button>
                <h3>${article.attributes.title}</h3>
                <p class="news-date" style="text-align: center;">${new Date(article.attributes.date).toLocaleDateString(currentLang === 'kg' ? 'ky-KG' : 'ru-RU')}</p>
                <img src="${imageUrl}" alt="${article.attributes.title}" class="full-article-photo">
                <div class="full-article-content">
                    <p>${article.attributes.content}</p>
                </div>
            </div>
        `;
        document.querySelector('.back-to-news-btn').addEventListener('click', () => {
            newsFullView.style.display = 'none';
            newsListView.style.display = 'block'; // Возвращаем отображение списка
        });
    };

    // Обработка кликов по кнопке "Подробнее"
    newsListView.addEventListener('click', async (e) => {
        if (e.target.classList.contains('read-more-btn')) {
            e.preventDefault();
            const articleId = e.target.dataset.id;
            try {
                const response = await fetch(`http://localhost:1337/api/News/${articleId}?populate=image`);
                if (!response.ok) {
                    throw new Error('Сетевая ошибка при загрузке статьи.');
                }
                const data = await response.json();
                showFullArticle(data.data);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } catch (error) {
                console.error('Ошибка при загрузке статьи:', error);
            }
        }
    });

    // Запускаем загрузку новостей при загрузке страницы
    fetchNews();

});