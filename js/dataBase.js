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

  // Начало категории "Закуски"
  {
    category: {
      ru: 'закуски',
      tr: 'mezeler',
      en: 'snacks',
    },
    dishes: [
      // Начало закуски 1
      {
        img: '',
        name: {
          ru: 'Сырная тарелка',
          tr: 'Peynir tabağı',
          en: 'Cheese Platter',
        },
        description: {
          ru: 'Импортные и местные сорта сыра, сушеные абрикосы, грецкие орехи, оливки и гризи',
          tr: 'İthal ve yerli peynirler, kuru kayısı, ceviz, zeytin ve grisie',
          en: 'Imported and local cheese varieties, dried apricots, walnuts, olives and grisi',
        },
        portionList: [
          { name: '1', cost: '2700' },
        ],
      },
      // Конец закуски 1
      // Начало закуски 2
      {
        img: '',
        name: {
          ru: 'Тартанка с креветками из авокадо',
          tr: 'Avokado karidesli tartanka',
          en: 'Avocado Prawn Tartine',
        },
        description: {
          ru: 'На ломтике хлеба из закваски, паштет из свежего авокадо и соте из креветок в кресс-масле, с маринованными арбузными каперсами',
          tr: 'Bir dilim ekşi mayalı ekmek, taze avokado ezmesi ve su teresinde sotelenmiş karides, kapari turşusu karpuz ile',
          en: 'On a slice of sourdough bread, fresh avocado pate, and sautéed shrimp in cress oil, with pickled watermelon capers',
        },
        portionList: [
          { name: '1', cost: '3200' },
        ],
      },
      // Конец закуски 2
    ],
  },
  // Конец категории "Закуски"

  // Начало категории "Напитки"
  {
    category: {
      ru: 'напитки',
      tr: 'içecekler',
      en: 'drinks',
    },
    dishes: [
      // Начало напитка 1
      {
        img: '',
        name: {
          ru: 'Аффогато',
          tr: 'Affogato',
          en: 'Affogato',
        },
        description: {
          ru: 'С ванильным мороженым и эспрессо',
          tr: 'Vanilyalı dondurma ve espresso ile',
          en: 'With vanilla ice cream and espresso',
        },
        portionList: [
          { name: '1', cost: '2000' },
        ],
      },
      // Конец напитка 1
      // Начало напитка 2
      {
        img: '',
        name: {
          ru: 'Кафе Мокко',
          tr: 'Kafe Mocha',
          en: 'Cafe Mocha',
        },
        description: {
          ru: 'Эспрессо, молоко, шоколад',
          tr: 'Espresso, süt, çikolata',
          en: 'Espresso, Milk, Chocolate',
        },
        portionList: [
          { name: '1', cost: '1800' },
        ],
      },
      // Конец напитка 2
    ],
  },
  // Конец категории "Напитки"

  // Начало категории "Алкогольные напитки"
  {
    category: {
      ru: 'алкогольные напитки',
      tr: 'alkollü içecekler',
      en: 'alcoholic drinks',
    },
    dishes: [
      // Начало алкогольного напитка 1
      {
        img: '',
        name: {
          ru: 'Carlsberg 33 cl',
          tr: 'Carlsberg 33 cl',
          en: 'Carlsberg 33 cl',
        },
        description: {
          ru: '',
          tr: '',
          en: '',
        },
        portionList: [
          { name: '33ml', cost: '1200' },
        ],
      },
      // Конец алкогольного напитка 1
      // Начало алкогольного напитка 2
      {
        img: '',
        name: {
          ru: 'Tuborg Unfiltered 50 cl',
          tr: 'Tuborg Unfiltered 50 cl',
          en: 'Tuborg Unfiltered 50 cl',
        },
        description: {
          ru: '',
          tr: '',
          en: '',
        },
        portionList: [
          { name: '50ml', cost: '1600' },
        ],
      },
      // Конец алкогольного напитка 2
    ],
  },
  // Конец категории "Алкогольные напитки"
];



//       tr: '',
//       en: 'snacks',
//     },
//     dishes: [
//       // Начало закуски 1
//       {
//         img: '',
//         name: {
//           ru: 'Сырная тарелка',
//           tr: '',
//           en: 'Chetre Platter',
//         },
//         dtrcription: {
//           ru: 'Импортные и местные сорта сыра, сушеные абрикосы, грецкие орехи, оливки и гризи',
//           tr: '',
//           en: 'Imported and local chetre varietitr, dried apricots, walnuts, olivtr and grisi',
//         },
//         portionList: [
//           { name: '1', cost: '2700' },
//         ],
//       },
//       // Конец закуски 1
//       // Начало закуски 2
//       {
//         img: '',
//         name: {
//           ru: 'Тартанка с креветками из авокадо',
//           tr: 'Avokado karidesli tartanka',
//           en: 'Avocado Prawn Tartine',
//         },
//         dtrcription: {
//           ru: 'На ломтике хлеба из закваски, паштет из свежего авокадо и соте из креветок в кресс-масле, с маринованными арбузными каперсами',
//           tr: 'Bir dilim ekşi mayalı ekmek, taze avokado ezmesi ve su teresinde sotelenmiş karides, kapari turşusu karpuz ile',
//           en: 'On a slice of sourdough bread, frtrh avocado pate, and sautéed shrimp in crtrs oil, with pickled watermelon capers',
//         },
//         portionList: [
//           { name: '1', cost: '3200' },
//         ],
//       },
//       // Конец закуски 2
//     ],
//   },
//   // Конец категории "Закуски"

//   // Начало категории "Напитки"
//   {
//     category: {
//       ru: 'напитки',
//       tr: 'içecekler',
//       en: 'drinks',
//     },
//     dishes: [
//       // Начало напитка 1
//       {
//         img: '',
//         name: {
//           ru: 'Аффогато',
//           tr: 'Affogato',
//           en: 'Affogato',
//         },
//         dtrcription: {
//           ru: 'С ванильным мороженым и эспрессо',
//           tr: 'Vanilyalı dondurma ve espresso kahve ile',
//           en: 'With vanilla ice cream and trprtrso',
//         },
//         portionList: [
//           { name: '1', cost: '2000' },
//         ],
//       },
//       // Конец напитка 1
//       // Начало напитка 2
//       {
//         img: '',
//         name: {
//           ru: 'Кафе Мокко',
//           tr: 'Kafe Mocha',
//           en: 'Cafe Mocha',
//         },
//         dtrcription: {
//           ru: 'Эспрессо, молоко, шоколад',
//           tr: 'Espresso, süt, çikolata',
//           en: 'trprtrso, Milk, Chocolate',
//         },
//         portionList: [
//           { name: '1', cost: '1800' },
//         ],
//       },
//       // Конец напитка 2
//     ],
//   },
//   // Конец категории "Напитки"

//   // Начало категории "Алкогольные напитки"
//   {
//     category: {
//       ru: 'алкогольные напитки',
//       tr: 'alkollü içecekler',
//       en: 'alcoholic drinks',
//     },
//     dishes: [
//       // Начало алкогольного напитка 1
//       {
//         img: '',
//         name: {
//           ru: 'Carlsberg 33 cl',
//           tr: 'Carlsberg 33 cl',
//           en: 'Carlsberg 33 cl',
//         },
//         dtrcription: {
//           ru: '',
//           tr: '',
//           en: '',
//         },
//         portionList: [
//           { name: '33ml', cost: '1200' },
//         ],
//       },
//       // Конец алкогольного напитка 1
//       // Начало алкогольного напитка 2
//       {
//         img: '',
//         name: {
//           ru: 'Tuborg Unfiltered 50 cl',
//           tr: 'Tuborg Unfiltered 50 cl',
//           en: 'Tuborg Unfiltered 50 cl',
//         },
//         dtrcription: {
//           ru: '',
//           tr: '',
//           en: '',
//         },
//         portionList: [
//           { name: '50ml', cost: '1600' },
//         ],
//       },
//       // Конец алкогольного напитка 2
//     ],
//   },
//   // Конец категории "Алкогольные напитки"
// ];

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

