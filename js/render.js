import dishesList from './dataBase.js';

const lang = document.documentElement.lang;
const currencySymbol = '₺';

const words = {
  portion: { ru: 'порция', en: 'portion', tr: 'porsiyon' },
  cost: { ru: 'стоимость', en: 'cost', tr: 'fiyat' },
  empty: { ru: 'Пусто', en: 'Empty', tr: 'Boş' },
  emptyHint: {
    ru: 'Добавьте блюда из меню',
    en: 'Start adding dishes from the menu',
    tr: 'Menüden yemek eklemeye başlayın'
  },
  added: { ru: 'Добавлено!', en: 'Added!', tr: 'Eklendi!' },
}

const categoryIcons = {
  'Wraps and Gobits':        '🥙',
  'Meat and Chicken Doners': '🍖',
  'Kebabs':                  '🔥',
  'Pitas':                   '🫓',
  'Stews':                   '🍲',
  'Burgers':                 '🍔',
  'Pizzas':                  '🍕',
  'Salad':                   '🥗',
  'Cold Drinks':             '🧃',
  'Hot Drinks':              '☕',
  'Additional':              '✨',
  'Dürümler ve Gobitler':    '🥙',
  'Et ve Tavuk Dönerler':    '🍖',
  'Kebaplar':                '🔥',
  'Pitalar':                 '🫓',
  'Güveçler':                '🍲',
  'Burgerler':               '🍔',
  'Pizzalar':                '🍕',
  'Salata':                  '🥗',
  'Soğuk İçecekler':         '🧃',
  'Sıcak İçecekler':         '☕',
  'Ek Ürünler':              '✨',
  'Шаурма и Гобит':          '🥙',
  'Мясные и Куриные Донеры': '🍖',
  'Кебабы':                  '🔥',
  'Питы':                    '🫓',
  'Рагу':                    '🍲',
  'Бургеры':                 '🍔',
  'Пиццы':                   '🍕',
  'Салат':                   '🥗',
  'Холодные Напитки':        '🧃',
  'Горячие Напитки':         '☕',
  'Дополнительно':           '✨',
}

const categoriesDiv = document.getElementById('categoriesList');
const dishesListDiv = document.querySelector('.dishes-list');
const basketListDiv = document.querySelector('.basket-list');

let changedCart = [];
const categoryState = {};

// ── Toast notification ─────────────────────────────────
function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove('toast--hide');
  toast.classList.add('toast--show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('toast--show');
    toast.classList.add('toast--hide');
  }, 1800);
}

// ── Shimmer skeletons ──────────────────────────────────
function showSkeletons(count = 3) {
  dishesListDiv.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const sk = document.createElement('div');
    sk.classList.add('dishes-card', 'skeleton-card');
    sk.innerHTML = `
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line wide"></div>
        <div class="skeleton-line medium"></div>
        <div class="skeleton-line short"></div>
      </div>
    `;
    dishesListDiv.appendChild(sk);
  }
}

// ── Category buttons ───────────────────────────────────
function createCategoryButtons() {
  dishesList.forEach((categoryObj, index) => {
    const button = document.createElement('button');
    const catName = categoryObj.category[lang];
    const catNameEn = categoryObj.category['en'];
    const icon = categoryIcons[catName] || categoryIcons[catNameEn] || '🍽️';
    button.innerHTML = `<span class="cat-icon">${icon}</span><span>${catName}</span>`;

    if (index === 0) {
      button.classList.add('_active');
      renderDishes(categoryObj.dishes, catName);
    }

    button.addEventListener('click', (event) => {
      handleCategoryButtonClick(event, categoryObj.dishes, catName);
    });

    categoriesDiv.appendChild(button);
  });
}

let activeDishes = dishesList[0].dishes;
let activecategoryName = dishesList[0].category[lang];

function handleCategoryButtonClick(event, dishes, categoryName) {
  document.querySelectorAll('#categoriesList button').forEach(btn => btn.classList.remove('_active'));
  event.currentTarget.classList.add('_active');
  // Auto-scroll active button into view
  event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  activeDishes = dishes;
  activecategoryName = categoryName;
  renderDishes(dishes, categoryName);
}

// ── Render dishes with shimmer then cards ──────────────
function renderDishes(dishes, categoryName) {
  dishesListDiv.classList.add('_hide');
  showSkeletons(Math.min(dishes.length, 4));
  dishesListDiv.classList.remove('_hide');

  setTimeout(() => {
    dishesListDiv.innerHTML = '';

    dishes.forEach((dish, index) => {
      const dishCard = document.createElement('div');
      dishCard.classList.add('dishes-card');
      dishCard.style.animationDelay = `${index * 60}ms`;

      dishCard.innerHTML = `
        <div class="card-img-wrap">
          <img src="./img/categories/${dish.img}.jpg" alt="${dish.name[lang]}"
            onerror="this.parentElement.classList.add('img-error'); this.style.display='none';">
          <div class="img-fallback"><span>${dish.name[lang]}</span></div>
          <div class="img-gradient"></div>
        </div>
        <div class="dishes-card__info">
          <div class="dishes-card__description">
            <h2>${dish.name[lang]}</h2>
            <p>${dish.description[lang]}</p>
          </div>
          <div class="dishes-card__management">
            ${dish.portionList.map(portion => `
              <div class="portion-name">
                <p>
                  <span>${words.portion[lang]} <span class="portion-name">${portion.name}</span> - </span>
                  <span><span class="portion-cost">${portion.cost}${currencySymbol}</span></span>
                </p>
                <div class="counter-wrap">
                  <button class="portion-minus"><i class="fa-solid fa-minus"></i></button>
                  <span class="portion-number">0</span>
                  <button class="portion-plus"><i class="fa-solid fa-plus"></i></button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

      if (categoryState[categoryName] && categoryState[categoryName][dish.name[lang]]) {
        const savedPortions = categoryState[categoryName][dish.name[lang]];
        dishCard.classList.add('change');
        dishCard.querySelectorAll('.portion-name').forEach(portionElement => {
          const portionNameEl = portionElement.querySelector('.portion-name');
          const portionNumberEl = portionElement.querySelector('.portion-number');
          if (portionNameEl && portionNumberEl) {
            const pName = portionNameEl.textContent;
            if (savedPortions[pName]) portionNumberEl.textContent = savedPortions[pName].quantity;
          }
        });
      }

      dishCard.querySelectorAll('.portion-plus').forEach(button => {
        button.addEventListener('click', () => updatePortion(button, 'plus', dish, categoryName));
      });
      dishCard.querySelectorAll('.portion-minus').forEach(button => {
        button.addEventListener('click', () => updatePortion(button, 'minus', dish, categoryName));
      });

      dishesListDiv.appendChild(dishCard);
    });

    dishesListDiv.scrollLeft = 0;
  }, 350);
}

// ── Update portion count ───────────────────────────────
function updatePortion(button, action, dish, categoryName) {
  const portionElement = button.closest('.portion-name');
  if (!portionElement) return;

  const portionNameEl = portionElement.querySelector('.portion-name');
  const portionCostEl = portionElement.querySelector('.portion-cost');
  const portionNumberEl = portionElement.querySelector('.portion-number');

  if (portionNameEl && portionCostEl && portionNumberEl) {
    const portionName = portionNameEl.textContent;
    const portionCost = parseInt(portionCostEl.textContent);
    let portionNumber = parseInt(portionNumberEl.textContent);

    if (action === 'plus') {
      portionNumber += 1;
      showToast(`${words.added[lang]} ${dish.name[lang]}`);
    } else if (action === 'minus' && portionNumber > 0) {
      portionNumber -= 1;
    }

    portionNumberEl.textContent = portionNumber;

    const dishCard = button.closest('.dishes-card');
    if (portionNumber > 0) {
      dishCard.classList.add('change');
      if (!categoryState[categoryName]) categoryState[categoryName] = {};
      if (!categoryState[categoryName][dish.name[lang]]) categoryState[categoryName][dish.name[lang]] = {};
      categoryState[categoryName][dish.name[lang]][portionName] = {
        quantity: portionNumber, cost: portionCost, totalCost: portionNumber * portionCost
      };
      const portionData = {
        categoryName, name: dish.name[lang], portion: portionName,
        cost: portionCost, quantity: portionNumber, totalCost: portionNumber * portionCost
      };
      const existing = changedCart.find(i => i.name === portionData.name && i.portion === portionData.portion);
      if (existing) {
        existing.quantity = portionNumber;
        existing.totalCost = portionData.totalCost;
      } else {
        changedCart.push(portionData);
      }
    } else {
      if (categoryState[categoryName]?.[dish.name[lang]]) {
        delete categoryState[categoryName][dish.name[lang]][portionName];
        if (Object.keys(categoryState[categoryName][dish.name[lang]]).length === 0) {
          delete categoryState[categoryName][dish.name[lang]];
        }
      }
      changedCart = changedCart.filter(i => !(i.name === dish.name[lang] && i.portion === portionName));
      if (Array.from(dishCard.querySelectorAll('.portion-number')).every(el => parseInt(el.textContent) === 0)) {
        dishCard.classList.remove('change');
      }
    }
    updateBasket();
  }
}

// ── Update basket ──────────────────────────────────────
function updateBasket() {
  basketListDiv.innerHTML = '';

  if (changedCart.length === 0) {
    basketListDiv.innerHTML = `
      <div class="basket-empty">
        <i class="fa-solid fa-basket-shopping basket-empty__icon"></i>
        <p class="basket-empty__title">${words.empty[lang]}</p>
        <p class="basket-empty__hint">${words.emptyHint[lang]}</p>
      </div>
    `;
    document.querySelector('button.basket').classList.remove('basket_have');
  } else {
    document.querySelector('button.basket').classList.add('basket_have');
    changedCart.forEach(item => {
      const dishObj = findDishByName(item.name, item.categoryName);
      const basketCard = document.createElement('div');
      basketCard.classList.add('basket-list__item', 'basket-card');
      basketCard.innerHTML = `
        <div class="basket-card__info">
          <img src="./img/categories/${dishObj.img}.jpg" alt="">
          <div class="dishes-card__description">
            <h2>${item.name}</h2>
            <h2><i>'${dishObj.name.tr}'</i></h2>
            <p><span>${item.portion}</span> ${words.portion[lang]} ${item.cost} ${currencySymbol}</p>
          </div>
        </div>
        <div class="basket-card__management">
          <button class="portion-minus"><i class="fa-solid fa-minus"></i></button>
          <span class="portion-number">${item.quantity}</span>
          <button class="portion-plus"><i class="fa-solid fa-plus"></i></button>
        </div>
        <p class="basket-card__cost">
          ${words.cost[lang]} <span>${item.totalCost}${currencySymbol}</span>
        </p>
      `;
      basketCard.querySelector('.portion-plus').addEventListener('click', () => basketPortionPlus(item.name, item.portion, item.categoryName));
      basketCard.querySelector('.portion-minus').addEventListener('click', () => basketPortionMinus(item.name, item.portion, item.categoryName));
      basketListDiv.appendChild(basketCard);
    });
  }
  calculTotalPrice();
}

function basketPortionPlus(name, portion, categoryName) {
  for (const cart of changedCart) {
    if (cart.name === name && cart.portion === portion) {
      cart.quantity++;
      cart.totalCost = cart.quantity * cart.cost;
    }
  }
  categoryState[categoryName][name][portion].quantity++;
  categoryState[categoryName][name][portion].totalCost =
    categoryState[categoryName][name][portion].quantity * categoryState[categoryName][name][portion].cost;
  updateBasket();
  renderDishes(activeDishes, activecategoryName);
}

function basketPortionMinus(name, portion, categoryName) {
  for (const cart of changedCart) {
    if (cart.name === name && cart.portion === portion) {
      cart.quantity--;
      if (cart.quantity === 0) {
        changedCart = changedCart.filter(i => !(i.name === name && i.portion === portion));
        delete categoryState[categoryName][name][portion];
        if (Object.keys(categoryState[categoryName][name]).length === 0) {
          delete categoryState[categoryName][name];
        }
      } else {
        cart.totalCost = cart.quantity * cart.cost;
        categoryState[categoryName][name][portion].quantity--;
        categoryState[categoryName][name][portion].totalCost =
          categoryState[categoryName][name][portion].quantity * categoryState[categoryName][name][portion].cost;
      }
      updateBasket();
      renderDishes(activeDishes, activecategoryName);
    }
  }
}

function findDishByName(name, categoryName) {
  for (const category of dishesList) {
    if (category.category[lang] === categoryName) {
      for (const dish of category.dishes) {
        if (dish.name[lang] === name) return dish;
      }
    }
  }
  return null;
}

createCategoryButtons();

const totalPriceSpan = document.querySelector('#total-price');
function calculTotalPrice() {
  let total = 0;
  for (const cart of changedCart) total += cart.totalCost;
  totalPriceSpan.innerText = total;
}

function basketBoxOpenClouse() {
  basketButtonOpen.classList.toggle('button_moveLeft');
  basketButtonClouse.classList.toggle('basket-clouse_active');
  basketBox.classList.toggle('basket-box_open');
  document.body.classList.toggle('basket-open');
}

const basketButtonOpen = document.querySelector('.basket');
const basketButtonClouse = document.querySelector('.basket-clouse');
const basketBox = document.querySelector('.basket-box');

basketButtonOpen.onclick = () => basketBoxOpenClouse();
basketButtonClouse.onclick = () => basketBoxOpenClouse();

document.querySelector('#annonce-block-clouse').onclick = function () {
  document.querySelector('.annonce-block').classList.add('displayNone');
  document.querySelector('.annonce-backdrop').classList.add('displayNone');
  document.querySelector('body').classList.remove('active_no');
}

// Hide nav on scroll, show only at very top
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY < 10) {
    nav.classList.remove('nav--hidden');
  } else {
    nav.classList.add('nav--hidden');
  }
}, { passive: true });
