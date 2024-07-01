const menu = {
    mainDishes: [
        {
            img: "Adana veya urfa kebap",
            name: {
                ru: "Адана или Урфа Кебаб",
                tr: "Adana veya Urfa Kebap",
                en: "Adana or Urfa Kebab"
            },

            price: {
                "1": 250,
                "1.5": 375,
            },
        },
        {
            img: "Kuzu Şiş",
            name: {
                ru: "Бараний Шашлык",
                tr: "Kuzu Şiş",
                en: "Lamb Shish"
            },

            price: {
                "1": 350,
                "1.5": 525,
            },
        },
        {
            img: "Tavuk Şiş",
            name: {
                ru: "Куриный Шашлык",
                tr: "Tavuk Şiş",
                en: "Chicken Shish"
            },

            price: {
                "1": 240,
                "1.5": 360,
            },
        },
        {
            img: "Izgara kofte",
            name: {
                ru: "Котлеты на Гриле",
                tr: "Izgara Köfte",
                en: "Grilled Meatball"
            },
            price: {
                "1": 250,
                "1.5": 375,
            },
        },
        {
            img: "Patlicanli kebap",
            name: {
                ru: "Шашлык с Баклажаном",
                tr: "Patlıcanlı Kebap",
                en: "Kebab with Eggplant"
            },

            price: {
                "1": 300,
                "1.5": 450,
            },
        },
        {
            img: "İskender köfte",
            name: {
                ru: "Искендер с Котлетами",
                tr: "İskender Köfte",
                en: "Iskender Meatball"
            },
            price: {
                "150 gr": 250,
                "200 gr": 375,
            },
        },
        {
            img: "Karışık Izgara Et",
            name: {
                ru: "Мясное Ассорти на Гриле",
                tr: "Karışık Izgara Et",
                en: "Mixed Grilled Meat"
            },
            price: {
                "1": 1050,
                "2": 2100,
            },
        },
        {
            img: "Ciğer",
            name: {
                ru: "Печень",
                tr: "Ciğer",
                en: "Liver"
            },
            price: {
                "1": 280,
                "1.5": 420,
            },
        },
        {
            img: "Sade et doner",
            name: {
                ru: "Мясной Донер",
                tr: "Sade Et Döner",
                en: "Plain Meat Doner"
            },
            price: {
                "100 gr": 250,
                "150 gr": 375,
                "200 gr": 500,
            },
        },
        {
            img: "Pilav ustu et doner",
            name: {
                ru: "Донер с Мясом и Рисом",
                tr: "Pilav ustu et doner",
                en: "Meat doner with rice"
            },
            price: {
                "100 gr": 250,
                "150 gr": 375,
                "200 gr": 500,
            },
        },
        {
            img: "Sade tavuk doner", // Pilav üstu Tavuk Döner
            name: {
                ru: "Куриный Донер с Рисом",
                tr: "Pilav üstu Tavuk Döner",
                en: "Chicken Doner with Rice"
            },

            price: {
                "100 gr": 190,
                "150 gr": 285,
                "200 gr": 380,
            },
        },
        {
            img: "Pilav ustu tavuk doner", // Sade Tavuk Döner
            name: {
                ru: "Куриный Донер",
                tr: "Sade Tavuk Döner",
                en: "Plain Chicken Doner"
            },
            price: {
                "100 gr": 190,
                "150 gr": 285,
                "200 gr": 380,
            },
        },
        {
            img: "Kuzu pirzola",
            name: {
                ru: "Бараньи Отбивные",
                tr: "Kuzu Pirzola",
                en: "Lamb Chops"
            },
            price: {
                "1": 460,
                "1.5": 690,
            },
        },
    ],

    pide: [

        {
            img: "Kuşbaşılı kaşarlı pıde",
            name: {
                ru: "Пиде с Мясом и Сыром Кашар",
                tr: "Kuşbaşılı Kaşarlı Pide",
                en: "Pita with Meat Cubes and Kashar Cheese"
            },
            price: {
                "1": 240,
                "1.5": 360,
            },
        },
        {
            img: "Kuşbaşılı pıde",
            name: {
                ru: "Пиде с Мясом",
                tr: "Kuşbaşılı Pide",
                en: "Pita with Meat Cubes"
            },
            price: {
                "1": 210,
                "1.5": 305,
            },
        },
        {
            img: "Kaşarlı pide",
            name: {
                ru: "Пиде с Сыром Кашар",
                tr: "Kaşarlı Pide",
                en: "Pita with Kashar Cheese"
            },
            price: {
                "1": 180,
                "1.5": 270,
            },
        },
        {
            img: "Kıymalı pide",
            name: {
                ru: "Пиде с Фаршем",
                tr: "Kıymalı Pide",
                en: "Pita with Ground Meat"
            },
            price: {
                "1": 180,
                "1.5": 270,
            },
        },
        {
            img: "Karışık pide",
            name: {
                ru: "Пиде Ассорти",
                tr: "Karışık Pide",
                en: "Mixed Pita"
            },
            price: {
                "1": 240,
                "1.5": 345,
            },
        },
        {
            img: "Kıymalı kaşarlı pide",
            name: {
                ru: "Пиде из Фарша и Сыром Кашар",
                tr: "Kıymalı Kaşarlı Pide",
                en: "Pita with Kashar Cheese and Ground Meat"
            },
            price: {
                "1": 210,
                "1.5": 305,
            },
        },
        {
            img: "Sucuklu kaşarlı pide",
            name: {
                ru: "Пиде с Колбасой",
                tr: "Sucuklu Kaşarlı Pide",
                en: "Pita with Soujouk and Kashar Cheese"
            },
            price: {
                "1": 210,
                "1.5": 305,
            },
        },
        {
            img: "Lahmacun",
            name: {
                ru: "Лахмаджун",
                tr: "Lahmacun",
                en: "Lahmacun"
            },
            price: {
                "2": 190,
            },
        },
    ],
    hamburgers: [
        {
            img: "Cizburger",
            name: {
                ru: "Чизбургер",
                tr: "Çizburger",
                en: "Cheeseburger"
            },
            price: {
                "1": 220,
            },
        },
        {
            img: "Et döner burger",
            name: {
                ru: "Бургер с Мясным Донером",
                tr: "Et Döner Burger",
                en: "Meat Doner Burger"
            },
            price: {
                "1": 240,
            },
        },
        {
            img: "Hamburger",
            name: {
                ru: "Гамбургер",
                tr: "Hamburger",
                en: "Hamburger"
            },
            price: {
                "1": 185,
            },
        },
        {
            img: "Tavuk döner Burger",
            name: {
                ru: "Бургер с Куриным Донером",
                tr: "Tavuk Döner Burger",
                en: "Chicken Doner Burger"
            },
            price: {
                "1": 185,
            },
        },
    ],
    kiramika: [
        {
            img: "Et güveç",
            name: {
                ru: "Мясная Запеканка",
                tr: "Et Güveç",
                en: "Meat Stew"
            },
            price: {
                "1": 380,
                "1.5": 570,
            },
        }
        {
            img: "Tavuk güveç",
            name: {
                ru: "Куриная Запеканка",
                tr: "Tavuk Güveç",
                en: "Chicken Stew"
            },
            price: {
                "1": 260,
                "1.5": 390,
            },
        },
        {
            img: "Kofte güveç",
            name: {
                ru: "Запеканка с Котлетами",
                tr: "Köfte Güveç",
                en: "Meatball Stew"
            },
            price: {
                "1": 270,
                "1.5": 405,
            },
        },
        {
            img: "Kaşarlı mantar güveç",
            name: {
                ru: "Грибная Запеканка с Сыром",
                tr: "Kaşarlı Mantar Güveç",
                en: "Stew with Mushroom and Kashar Cheese"
            },
            price: {
                "1": 210,
                "1.5": 305,
            },
        },

    ],
    pizza: [
        {
            img: "Karisik pizza",
            name: {
                ru: "Пицца Ассорти",
                tr: "Karışık Pizza",
                en: "Mixed Pizza"
            },
            price: {
                "1": 190,
            },
        },
        {
            img: "Sebzell pizza",
            name: {
                ru: "Овощная Пицца",
                tr: "Sebzeli Pizza",
                en: "Vegetable Pizza"
            },
            price: {
                "1": 190,
            },
        },
        {
            img: "Margarita pizza",
            name: {
                ru: "Пицца Маргарита",
                tr: "Margarita Pizza",
                en: "Margarita Pizza"
            },
            price: {
                "1": 180,
            },
        },
    ],
    snacks: [
        {
            img: "Kapali Et Doner",
            name: {
                ru: "Закрытый Донер с Мясом",
                tr: "Kapalı Et Döner ",
                en: "Closed Doner with Meat"
            },

            price: {
                "1": 280,
                "1.5": 420,
            },
        },
        {
            img: "Kapali Tavuk doner",
            name: {
                ru: "Закрытый Донер с Курицей",
                tr: "Kapalı Tavuk Döner",
                en: "Closed Doner with Chicken"
            },
            price: {
                "1": 260,
                "1.5": 390,
            },
        },
        {
            img: "Et iskander",
            name: {
                ru: "Мясной Искандер",
                tr: "Et İskender",
                en: "Meat Iskender"
            },
            price: {
                "100 gr": 250,
                "150 gr": 375,
                "200 gr": 500,
            },
        },
        {
            img: "Tavuk iskander",
            name: {
                ru: "Куриный Искандер",
                tr: "Tavuk İskender",
                en: "Chicken Iskender"
            },
            price: {
                "100 gr": 210,
                "150 gr": 315,
                "200 gr": 420,
            },
        },
        {
            img: "Beyti sarma",
            name: {
                ru: "Кебаб Бейти",
                tr: "Beyti Sarma",
                en: "Beyti Wrap"
            },
            price: {
                "1": 280,
                "1.5": 420,
            },
        },
        {
            img: "Et gobit",
            name: {
                ru: "Мясной Гоббит",
                tr: "Et Gobit",
                en: "Meat Gobit"
            },
            price: {
                "100 gr": 210,
                "150 gr": 315,
                "200 gr": 420,
            },
        },
        {
            img: "Tavuk gobit",
            name: {
                ru: "Куриный Гоббит",
                tr: "Tavuk Gobit",
                en: "Chicken Gobit"
            },
            price: {
                "100 gr": 100,
                "150 gr": 150,
                "200 gr": 200,
            },
        },
        {
            img: "Et durum",
            name: {
                ru: "Мясная Шаурма ",
                tr: "Et Dürüm",
                en: "Meat Wrap"
            },
            price: {
                "100 gr": 210,
                "150 gr": 315,
                "200 gr": 420,
            },
        },
        {
            img: "Tavuk dürüm",
            name: {
                ru: "Шаурма с Курицей",
                tr: "Tavuk Dürüm",
                en: "Chicken Wrap"
            },
            price: {
                "100 gr": 100,
                "150 gr": 150,
                "200 gr": 200,
            },
        }
    ],
    salads: [
        {
            img: "Çoban salata",
            name: {
                ru: "Салат Чобан",
                tr: "Çoban Salata",
                en: "Shepherd Salad"
            },
            price: {
                "1": 95,
            },
        },
        {
            img: "Mevsim salata",
            name: {
                ru: "Сезонный Салат",
                tr: "Mevsim Salata",
                en: "Seasonal Salad"
            },
            price: {
                "1": 95,
            },
        },
        {
            img: "Patlıcan salatası",
            name: {
                ru: "Салат из Баклажанов",
                tr: "Patlıcan Salatası",
                en: "Eggplant Salad"
            },
            price: {
                "1": 95,
            },
        },
    ],
    dessert: [
        {
            img: "Künefe",
            name: {
                ru: "Кунефе",
                tr: "Künefe",
                en: "Künefe"
            },
            price: {
                "1": 100,
            },
        },
    ],

    drinks: [
        {
            img: "Fanta",
            name: {
                ru: "Фанта",
                tr: "Fanta",
                en: "Fanta"
            },
            price: {
                "1": 45,
            },
        },
        {
            img: "Sprite",
            name: {
                ru: "Спрайт",
                tr: "Sprite",
                en: "Sprite"
            },
            price: {
                "1": 45,
            },
        },        {
            img: "Coca cola",
            name: {
                ru: "Кока Кола",
                tr: "Coca Cola",
                en: "Coca Cola"
            },
            price: {
                "1": 45,
            },
        },
        {
            img: "Cappuccino",
            name: {
                ru: "Капучино",
                tr: "Cappuccino",
                en: "Cappuccino"
            },
            price: {
                "1": 50,
            },
        },
        {
            img: "Çayı",
            name: {
                ru: "Чай",
                tr: "Çay",
                en: "Tea"
            },
            price: {
                "1": 15,
            },
        },
        {
            img: "Meyve suları",
            name: {
                ru: "Фруктовые Соки",
                tr: "Meyve Suları",
                en: "Fruit Juices"
            },
            price: {
                "1": 45,
            },
        },
        {
            img: "Fuse tea",
            name: {
                ru: "Fuse tea",
                tr: "Fuse tea",
                en: "Fuse tea"
            },
            price: {
                "1": 45,
            },
        },
        {
            img: "Ayran",
            name: {
                ru: "Айран",
                tr: "Ayran",
                en: "Ayran"
            },
            price: {
                "1": 25,
            },
        },
        {
            img: "Yayık ayran",
            name: {
                ru: "Домашний Айран",
                tr: "Yayık Ayran",
                en: "Buttermilk Drink"
            },
            price: {
                "1": 40,
            },
        },
        {
            img: "Meyvelı soda",
            name: {
                ru: "Фруктовая Газировка",
                tr: "Meyveli Soda",
                en: "Fruit Sparkling Water"
            },
            price: {
                "1": 25,
            },
        },
        {
            img: "Soda",
            name: {
                ru: "Сода",
                tr: "Soda",
                en: "Sparkling Water"
            },
            price: {
                "1": 25,
            },
        },
        {
            img: "Limonata",
            name: {
                ru: "Лимонад",
                tr: "Limonata",
                en: "Lemonade"
            },
            price: {
                "1": 45,
            },
        },
        {
            img: "Şalgam",
            name: {
                ru: "Шалгам",
                tr: "Şalgam",
                en: "Beet"
            },
            price: {
                "1": 30,
            },
        },
        {
            img: "Su",
            name: {
                ru: "Вода",
                tr: "Su",
                en: "Water"
            },
            price: {
                "1": 10,
            },
        },
    ]
}


//конец базы даных 



const lang = document.querySelector("html").getAttribute("lang");



let wordPorsion;
if (lang == 'ru') {
    wordPorsion = 'порция';
} else if (lang == 'en') {
    wordPorsion = 'portion';
} else if (lang == 'tr') {
    wordPorsion = 'porsiyon';
}

const menuListAll = document.querySelectorAll(".menu-list"); // Дивы с категориями для карточек
for (let i = 0; i < menuListAll.length; i++) { // Цикл, который подставляет все карточки с блюдами
    const menuListDiv = menuListAll[i];
    const menuListDivID = menuListDiv.getAttribute("id");
    for (let j = 0; j < menu[menuListDivID].length; j++) {
        const cartInfo = menu[menuListDivID][j];
        let cartDiv = document.createElement("div");
        cartDiv.className = "menu-cart";

        // Создание элементов для цен и количества
        let priceElements = '';
        console.log(cartInfo)
        for (let priceKey of Object.keys(cartInfo.price).sort((a, b) => parseFloat(a) - parseFloat(b))) {
            priceElements += `
            <div class="menu-cart__price-amount" data-dish-name="${cartInfo.name[lang]}" data-dish-name-tr="${cartInfo.name.tr}" data-portion="${priceKey}" data-price="${cartInfo.price[priceKey]}">
                <span class="price__value">${priceKey} ${wordPorsion}: ${cartInfo.price[priceKey]}₺</span>
                <div class="menu-cart__amount">
                    <button class="amount-decrease"> - </button>
                    <span class="amount-number">0</span>
                    <button class="amount-increase"> + </button>
                </div>
            </div>`;
        }

        cartDiv.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <img src="./img/menu/${menuListDivID}/${cartInfo.img}.jpg" alt="">
            <div class="menu-cart__info">
                <div>
                    <h3>${cartInfo.name[lang]}</h3>
                </div>
                <div class="menu-cart__details">
                ${priceElements}
                </div>
            </div>
        `;
        menuListDiv.appendChild(cartDiv);
    }
}

let selectedItems = []; // Массив для хранения выбранных блюд
// Функция для обновления выбранных блюд
function updateSelectedItems(dishName, dishNameTr, portion, amount, price) {
    const existingItem = selectedItems.find(item => item.dishName === dishName && item.portion === portion);
    if (existingItem) {
        existingItem.amount = amount;
        existingItem.totalPrice = amount * price;
        if (amount === 0) {
            const index = selectedItems.indexOf(existingItem);
            selectedItems.splice(index, 1);
        }
    } else {
        selectedItems.push({
            dishName: dishName,
            dishNameTr: dishNameTr,
            portion: portion,
            amount: amount,
            totalPrice: amount * price
        });
    }
    console.log(selectedItems); // Выводим в консоль для проверки
    updateBasket();
    updateMenuCards();
    saveToLocalStorage(selectedItems); // Сохраняем данные в локальное хранилище
}

// Функция для сохранения данных в локальное хранилище
function saveToLocalStorage(data) {
    localStorage.setItem("selectedItems", JSON.stringify(data));
}
// Функция для загрузки данных из локального хранилища
function loadFromLocalStorage() {
    const data = localStorage.getItem("selectedItems");
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

// Загрузка данных из локального хранилища при загрузке страницы
selectedItems = loadFromLocalStorage();

// Добавление обработчика события для окончания загрузки страницы
window.addEventListener("load", function () {
    updateBasket();
    updateMenuCards();
});

// Функция для обновления корзины
function updateBasket() {
    const basketDiv = document.querySelector(".basket__list");
    basketDiv.innerHTML = ''; // Очистка корзины

    let totalPrice = 0; // Инициализация общей стоимости

    selectedItems.forEach(item => {
        let basketItemDiv = document.createElement("div");
        basketItemDiv.className = "basket-item";
        basketItemDiv.setAttribute("data-dish-name", item.dishName);
        basketItemDiv.setAttribute("data-portion", item.portion);

        basketItemDiv.innerHTML = `
            <div class="basket-item__info">
                <h4>${item.dishName}</h4>
                <h4>(${item.dishNameTr})</h4>
            </div>
            <div class="basket-item__amount">
                <button class="basket-amount-decrease"> - </button>
                <span class="basket-amount-number">${item.amount}</span>
                <button class="basket-amount-increase"> + </button>
            </div>
            <div class="basket-item__price">
                <p>${item.portion} порция</p>
                <p>${item.totalPrice} TL</p>
            </div>

        `;

        basketDiv.appendChild(basketItemDiv);
        totalPrice += item.totalPrice; // Обновление общей стоимости
    });

    // Обновление итоговой стоимости в спане
    const totalNumberSpan = document.querySelector("#basketAll");
    totalNumberSpan.textContent = totalPrice;
    basketShowHide();
}

// Функция для обновления карточек меню
function updateMenuCards() {
    const menuCards = document.querySelectorAll(".menu-cart__price-amount");
    menuCards.forEach(card => {
        const dishName = card.getAttribute("data-dish-name");
        const dishNameTr = card.getAttribute("data-dish-name-tr");
        const portion = card.getAttribute("data-portion");
        const amountElement = card.querySelector(".amount-number");
        const selectedItem = selectedItems.find(item => item.dishName === dishName && item.portion === portion);
        if (selectedItem) {
            amountElement.textContent = selectedItem.amount;
        } else {
            amountElement.textContent = "0";
        }
    });
}

// Добавление обработчиков событий для кнопок
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("amount-increase")) {
        const amountNumber = event.target.previousElementSibling;
        const newAmount = parseInt(amountNumber.textContent) + 1;
        amountNumber.textContent = newAmount;

        const priceAmountDiv = event.target.closest(".menu-cart__price-amount");
        const dishName = priceAmountDiv.getAttribute("data-dish-name");
        const dishNameTr = priceAmountDiv.getAttribute("data-dish-name-tr");
        const portion = priceAmountDiv.getAttribute("data-portion");
        const price = parseInt(priceAmountDiv.getAttribute("data-price"));

        updateSelectedItems(dishName, dishNameTr, portion, newAmount, price);
    } else if (event.target.classList.contains("amount-decrease")) {
        const amountNumber = event.target.nextElementSibling;
        const newAmount = parseInt(amountNumber.textContent) > 0 ? parseInt(amountNumber.textContent) - 1 : 0;
        amountNumber.textContent = newAmount;

        const priceAmountDiv = event.target.closest(".menu-cart__price-amount");
        const dishName = priceAmountDiv.getAttribute("data-dish-name");
        const dishNameTr = priceAmountDiv.getAttribute("data-dish-name-tr");
        const portion = priceAmountDiv.getAttribute("data-portion");
        const price = parseInt(priceAmountDiv.getAttribute("data-price"));

        updateSelectedItems(dishName, dishNameTr, portion, newAmount, price);
    } else if (event.target.classList.contains("basket-amount-increase")) {
        const amountNumber = event.target.previousElementSibling;
        const newAmount = parseInt(amountNumber.textContent) + 1;
        amountNumber.textContent = newAmount;

        const basketItemDiv = event.target.closest(".basket-item");
        const dishName = basketItemDiv.getAttribute("data-dish-name");
        const portion = basketItemDiv.getAttribute("data-portion");
        const item = selectedItems.find(item => item.dishName === dishName && item.portion === portion);

        updateSelectedItems(dishName, item.dishNameTr, portion, newAmount, item.totalPrice / item.amount);
    } else if (event.target.classList.contains("basket-amount-decrease")) {
        const amountNumber = event.target.nextElementSibling;
        const newAmount = parseInt(amountNumber.textContent) > 0 ? parseInt(amountNumber.textContent) - 1 : 0;
        amountNumber.textContent = newAmount;

        const basketItemDiv = event.target.closest(".basket-item");
        const dishName = basketItemDiv.getAttribute("data-dish-name");
        const portion = basketItemDiv.getAttribute("data-portion");
        const item = selectedItems.find(item => item.dishName === dishName && item.portion === portion);

        updateSelectedItems(dishName, item.dishNameTr, portion, newAmount, item.totalPrice / item.amount);
    }
});


const basketDiv = document.querySelector(".basket");//див в которым отображается карзина 



const basketList = document.querySelector(".basket__list");//див в кором отображаются выброные блюда
function basketShowHide() {//фуекцыя включения или отключения корзины
    if (selectedItems.length == 0) {// если корзина пустая то мы ее прячем
        basketDiv.classList.remove("basket_active");
    } else {//если карина не пустая 
        basketDiv.classList.add("basket_active");
    }
}



const basketButton = document.querySelector(".basket__buttonOpen");
basketButton.onclick = function () {
    basketButton.classList.toggle("basket__button_active");
    basketDiv.classList.toggle("basket_active_full");
}

// // Получаем данные из локального хранилища
// const dataToPass = localStorage.getItem("selectedItems");

// // Кодируем данные в URL-параметр и переходим на page2.html
// if (dataToPass) {
//     const encodedData = encodeURIComponent(dataToPass);
//     window.location.href = `reviewsRU.html?data=${encodedData}`;
// } else {
//     alert("Данные в локальном хранилище отсутствуют.");
// }
