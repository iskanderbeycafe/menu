const dishesList = [
  // Начало категории "Основные блюда"
  {
    category: {
      ru: 'Дёнеры с мясом и курицей',
      tr: 'Et ve Tavuk Dönerler',
      en: 'Meat and Chicken Doners',
    },
    dishes: [
      // Начало блюда 1
      {
        "img": "",
        "name": {
          "ru": "Простой мясной донер",
          "tr": "Sade Et Döner",
          "en": "Plain Meat Doner"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "100 gr", "cost": "250" },
          { "name": "150 gr", "cost": "375" },
          { "name": "200 gr", "cost": "500" }
        ]
      },
      // Конец блюда 1
      // Начало блюда 2
      {
        "img": "",
        "name": {
          "ru": "Мясной донер с рисом",
          "tr": "Pilav Üstü Et Döner",
          "en": "Meat Doner with Rice"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "100 gr", "cost": "250" },
          { "name": "150 gr", "cost": "375" },
          { "name": "200 gr", "cost": "500" }
        ]
      },
      // Конец блюда 2
      {
        "img": "",
        "name": {
          "ru": "Мясной Искендер",
          "tr": "Et İskender",
          "en": "Meat Iskender"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "100 gr", "cost": "250" },
          { "name": "150 gr", "cost": "375" },
          { "name": "200 gr", "cost": "500" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Закрытый донер с мясом",
          "tr": "Kapalı Döner Et",
          "en": "Closed Doner Meat"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "280" },
          { "name": "1.5", "cost": "420" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Закрытый донер с курицей",
          "tr": "Kapalı Döner Tavuk",
          "en": "Closed Doner Chicken"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "260" },
          { "name": "1.5", "cost": "390" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Искендер Кефте",
          "tr": "İskender Köfte",
          "en": "Iskender Meatball"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "150 gr", "cost": "250" },
          { "name": "200 gr", "cost": "375" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Простой куриный донер",
          "tr": "Sade Tavuk Döner",
          "en": "Plain Chicken Doner"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "100 gr", "cost": "190" },
          { "name": "150 gr", "cost": "285" },
          { "name": "200 gr", "cost": "380" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриный донер с рисом",
          "tr": "Pilav Üstü Tavuk Döner",
          "en": "Chicken Doner with Rice"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "100 gr", "cost": "190" },
          { "name": "150 gr", "cost": "285" },
          { "name": "200 gr", "cost": "380" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриный Искендер",
          "tr": "Tavuk İskender",
          "en": "Chicken Iskender"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "100 gr", "cost": "210" },
          { "name": "150 gr", "cost": "315" },
          { "name": "200 gr", "cost": "420" }
        ]
      },
    ],
  },
  // Конец категории "Основные блюда"

  // Начало категории "Пиде"
  {
    category: {
      ru: 'пиде',
      tr: 'pideler',
      en: 'pitas',
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Пиде с мясным фаршем",
          "tr": "Kıymalı Pide",
          "en": "Pita with Ground Meat"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "180" },
          { "name": "1.5", "cost": "270" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с кашаром",
          "tr": "Kaşarlı Pide",
          "en": "Pita with Kashar Cheese"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "180" },
          { "name": "1.5", "cost": "270" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с кусочками мяса",
          "tr": "Kuşbaşılı Pide",
          "en": "Pita with Meat Cubes"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "210" },
          { "name": "1.5", "cost": "305" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с кашаром и мясным фаршем",
          "tr": "Kıymalı Kaşarlı Pide",
          "en": "Pita with Kashar Cheese and Ground Meat"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "210" },
          { "name": "1.5", "cost": "305" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Пиде с кусочками мяса и кашаром",
          "tr": "Kuşbaşılı Kaşarlı Pide",
          "en": "Pita with Meat Cubes and Kashar Cheese"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "240" },
          { "name": "1.5", "cost": "360" }
        ]
      }, 
      {
        "img": "",
        "name": {
          "ru": "Пиде с суджуком и кашаром",
          "tr": "Sucuklu Kaşarlı Pide",
          "en": "Pita with Soujouk and Kashar Cheese"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "210" },
          { "name": "1.5", "cost": "305" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Смешанная Пиде",
          "tr": "Karışık Pide",
          "en": "Mixed Pita"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "230" },
          { "name": "1.5", "cost": "345" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Лахмаджун",
          "tr": "Lahmacun",
          "en": "Lahmacun"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "2", "cost": "190" }
        ]
      },                                            
    ],
  },
  // Конец категории "Пиде"

  // Начало категории "тушеное мясо"
  {
    category: {
      ru: 'тушеное мясо',
      tr: 'güveçler',
      en: 'stews',
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Мясное рагу",
          "tr": "Et Güveç",
          "en": "Meat Stew"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "380" },
          { "name": "1.5", "cost": "570" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Куриное рагу",
          "tr": "Tavuk Güveç",
          "en": "Chicken Stew"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "260" },
          { "name": "1.5", "cost": "390" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Рагу с фрикадельками",
          "tr": "Köfte Güveç",
          "en": "Meatball Stew"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "270" },
          { "name": "1.5", "cost": "405" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Рагу с грибами и кашаром",
          "tr": "Kaşarlı Mantar Güveç",
          "en": "Stew with Mushroom and Kashar Cheese"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "210" },
          { "name": "1.5", "cost": "305" }
        ]
      },                        
    ],
  },
  // Конец категории "тушеное мясо"

  // Начало категории "бургеры"
  {
    category: {
      ru: 'бургеры',
      tr: 'burgerler',
      en: 'burgers',
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Гамбургер",
          "tr": "Hamburger",
          "en": "Hamburger"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "185" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Чизбургер",
          "tr": "Çizburger",
          "en": "Cheeseburger"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "220" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Бургер с куриным донером",
          "tr": "Tavuk Döner Burger",
          "en": "Chicken Doner Burger"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "185" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Бургер с мясным донером",
          "tr": "Et Döner Burger",
          "en": "Meat Doner Burger"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "240" }
        ]
      }     
    ],
  },
  // Конец категории "бургеры"
   // Начало категории "пиццы"
   {
    category: {
      ru: 'пиццы',
      tr: 'pizzalar',
      en: 'pizzas',
    },
    dishes: [
      {
        "img": "",
        "name": {
          "ru": "Пицца Маргарита",
          "tr": "Margarita Pizza",
          "en": "Margarita Pizza"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "180" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Смешанная пицца",
          "tr": "Karışık Pizza",
          "en": "Mixed Pizza"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "190" }
        ]
      },
      {
        "img": "",
        "name": {
          "ru": "Овощная пицца",
          "tr": "Sebzeli Pizza",
          "en": "Vegetable Pizza"
        },
        "description": {
          "ru": "",
          "tr": "",
          "en": ""
        },
        "portionList": [
          { "name": "1", "cost": "190" }
        ]
      }   
    ],
  },
  // Конец категории "пиццы"
     // Начало категории "пиццы"
     {
      category: {
        ru: 'салаты',
        tr: 'salatalar',
        en: 'salad',
      },
      dishes: [
        {
          "img": "",
          "name": {
            "ru": "Салат пастуха",
            "tr": "Çoban Salata",
            "en": "Shepherd Salad"
          },
          "description": {
            "ru": "",
            "tr": "",
            "en": ""
          },
          "portionList": [
            { "name": "1", "cost": "95" }
          ]
        },
        {
          "img": "",
          "name": {
            "ru": "Сезонный салат",
            "tr": "Mevsim Salata",
            "en": "Salad with Season's Vegetables"
          },
          "description": {
            "ru": "",
            "tr": "",
            "en": ""
          },
          "portionList": [
            { "name": "1", "cost": "95" }
          ]
        },
        {
          "img": "",
          "name": {
            "ru": "Салат из баклажанов",
            "tr": "Patlıcan Salatası",
            "en": "Eggplant Salad"
          },
          "description": {
            "ru": "",
            "tr": "",
            "en": ""
          },
          "portionList": [
            { "name": "1", "cost": "95" }
          ]
        },        
      ],
    },
    // Конец категории "пиццы"
  
];




// Функция для обновления img поля
function updateDishesWithImage() {
  dishesList.forEach(categoryObj => {
    const categoryNameEn = categoryObj.category.en.toLowerCase().replace(/\s+/g, '-');
    categoryObj.dishes.forEach(dish => {
      const dishNameEn = dish.name.en.toLowerCase().replace(/\s+/g, '-');
      dish.img = `${categoryNameEn}/${dishNameEn}`; // Заполнение поля img в формате 'category[en]/name[en]'
    });
  });
}

// Обновляем данные
updateDishesWithImage();

export default dishesList;

