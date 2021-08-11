const prev = document.getElementById('prev');
const next = document.getElementById('next');
const cards = document.getElementsByClassName('weatherCard');
const cardArry = [];
cardArry.push(...cards);

let currentIndex = 1;
const lastIndex = cardArry.length - 1;
// ===============================================================================
// ==================関数定義

// ==================================
// ===================classList==ADD
const addClassListFunc = () => {
  // validation
  if (currentIndex === 0) {
    cardArry[lastIndex].classList.add('card__prev');
    cardArry[0].classList.add('card__current');
    cardArry[1].classList.add('card__next');
    return;
  }

  if (currentIndex === lastIndex) {
    cardArry[lastIndex - 1].classList.add('card__prev');
    cardArry[lastIndex].classList.add('card__current');
    cardArry[0].classList.add('card__next');
    return;
  }
  cardArry[currentIndex - 1].classList.add('card__prev');
  cardArry[currentIndex].classList.add('card__current');
  cardArry[currentIndex + 1].classList.add('card__next');
};

// ==================================
// ===================classList==REMOVE

const removeClassListFunc = () => {
  if (currentIndex === 0) {
    cardArry[lastIndex].classList.remove('card__prev');
    cardArry[0].classList.remove('card__current');
    cardArry[1].classList.remove('card__next');
    return;
  }
  if (currentIndex === lastIndex) {
    cardArry[lastIndex - 1].classList.remove('card__prev');
    cardArry[lastIndex].classList.remove('card__current');
    cardArry[0].classList.remove('card__next');
    return;
  }

  cardArry[currentIndex - 1].classList.remove('card__prev');
  cardArry[currentIndex].classList.remove('card__current');
  cardArry[currentIndex + 1].classList.remove('card__next');
};

// ==================================
// ===================next prev CLICK
next.addEventListener('click', () => {
  if (currentIndex === 4) {
    removeClassListFunc();
    currentIndex = 0;
    addClassListFunc();
    // console.log(currentIndex);
    return;
  }
  removeClassListFunc();
  currentIndex++;
  addClassListFunc();
  //   console.log(currentIndex);
});

prev.addEventListener('click', () => {
  if (currentIndex === 0) {
    removeClassListFunc();
    currentIndex = 4;
    addClassListFunc();
    // console.log(currentIndex);
    return;
  }
  removeClassListFunc();
  currentIndex--;
  addClassListFunc();
  //   console.log(currentIndex);
});

// ==========================================================================
// 実行
addClassListFunc();

const url =
  'http://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=1f86440dd49d48dedb35e1a402023335&lang=ja&units=metric';
