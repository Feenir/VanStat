/*
* ===============================================================
* Секция case табуляция
* ===============================================================
* */


let tabButton = document.querySelectorAll('.cases__description ')
let tabButtonActive = 'cases__description--active'
let contentBox = document.querySelectorAll('.cases__content')
let contentBoxTab = 'cases__content--active'
let tabTitle = document.querySelector('.cases__title')

tabButton.forEach(function (tabsBtn){

    tabsBtn.addEventListener('click',function (e) {
        const path = e.currentTarget.dataset.path;


        tabButton.forEach(function (btn){
            btn.classList.remove(tabButtonActive)
            e.currentTarget.classList.add(tabButtonActive)
        })

        contentBox.forEach(function (tabsBtn) {
            tabsBtn.classList.remove(contentBoxTab)
            document.querySelector(`[data-target="${path}"]`).classList.add(contentBoxTab)

        })

    })

})

// ==============================================
// WEBP на Background
// ==============================================
// <div style="background-image: url('/images/image.webp')" data-bg="/images/image.jpg" data-bg-webp="/images/image.webp"></div> // html код
// Проверяем, можно ли использовать Webp формат
    function canUseWebp() {
        // Создаем элемент canvas
        let elem = document.createElement('canvas');
        // Приводим элемент к булеву типу
        if (!!(elem.getContext && elem.getContext('2d'))) {
            // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
            return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
        }
        // Иначе Webp не используем
        return false;
    }

window.onload = function () {
    // Получаем все элементы с дата-атрибутом data-bg
    let images = document.querySelectorAll('[data-bg]');
    // Проходимся по каждому
    for (let i = 0; i < images.length; i++) {
        // Получаем значение каждого дата-атрибута
        let image = images[i].getAttribute('data-bg');
        // Каждому найденному элементу задаем свойство background-image с изображение формата
        images[i].style.backgroundImage = 'url(' + image + ')';
    }

    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (canUseWebp() || firefoxVer >= 65) {
        // Делаем все то же самое что и для формата, но уже для изображений формата Webp
        let imagesWebp = document.querySelectorAll('[data-bg-webp]');
        for (let i = 0; i < imagesWebp.length; i++) {
            let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
            imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
        }
    }
};

// ==============================================
// Текущая дата
// ==============================================
const date = document.querySelector('.footer__text .date-footer')
date.innerHTML = new Date().getFullYear();

// ==============================================
// Лет на рынке
// ==============================================

const yearWork = document.querySelector('.about__item-number .year-work')
const projectDone = document.querySelector('.about__item-number .project-done')
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const firm = {
    nowMonth: 4,
    firmEducated: 2015,
    projectInMonth: 14,
    monthInYear: 12
}
const inWork = year - firm.firmEducated
const projectDoneYear = ((firm.projectInMonth * firm.monthInYear * inWork) + (month * firm.projectInMonth)) - (firm.nowMonth * firm.projectInMonth)

yearWork.innerHTML = inWork;
projectDone.innerHTML = projectDoneYear



// ==============================================
// Смена состояния active на хэдере
// ==============================================
let menuItem = document.querySelectorAll('.header__items');

for (let i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function (event) {
        for (let j = 0; j < menuItem.length; j++) {
            menuItem[j].classList.remove("header__items--active");
        }
        this.classList.add("header__items--active");
    })
}

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

