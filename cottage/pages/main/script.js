let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let modalContentOne = document.querySelector('.modal_content_one');
let btnClose = document.querySelector('.close');
let btnAhead = document.querySelector('.ahead');

btn.onclick = function () {
  //открытие модального окна
  modal.style.display = 'flex';
  modalContentOne.style.display = 'flex';
  modalContentTwo.style.display = 'none';
  modalContentThree.style.display = 'none';
  modalContentFour.style.display = 'none';
  modalContentFive.style.display = 'none';
};

btnClose.onclick = function () {
  //закрыть по кнопке
  closePopap();
};

window.onclick = function (event) {
  // закрыть по любому месту вне поля
  if (event.target == modal) {
    closePopap();
  }
};

function closePopap() {
  modal.style.display = 'none';
  modalContentOne.style.display = 'flex';
  modalContentTwo.style.display = 'none';
  modalContentThree.style.display = 'none';
  modalContentFour.style.display = 'none';
  modalContentFive.style.display = 'none';
  cardOne.classList.remove('modal_content_card_img_focus');
  cardTwo.classList.remove('modal_content_card_img_focus');
  cardThree.classList.remove('modal_content_card_img_focus');
  cardFour.classList.remove('modal_content_card_img_focus');
  cardTextOne.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextTwo.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextThree.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextFour.classList.remove('modal_content_card_wrapper_two_focus');
  cardThreeTextOne.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextTwo.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextThree.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextFour.classList.remove('card_three_text_wrapper_focus');
  cardFourTextOne.classList.remove('card_four_text_wrapper_focus');
  cardFourTextTwo.classList.remove('card_four_text_wrapper_focus');
  cardFourTextThree.classList.remove('card_four_text_wrapper_focus');
  cardFourTextFour.classList.remove('card_four_text_wrapper_focus');
  btnAhead.classList.remove('ahead_focus');
  btnAheadTwo.classList.remove('ahead_focus');
  btnAheadThree.classList.remove('ahead_focus');
  btnAheadFour.classList.remove('ahead_focus');
  btnAhead.classList.add('ahead');
  btnAheadTwo.classList.add('ahead_two');
  btnAheadThree.classList.add('ahead_three');
  btnAheadFour.classList.add('ahead_four');
}

/*.........................................................первое окно.................................................*/

let cardOne = document.querySelector('.card_img_one');
let cardTwo = document.querySelector('.card_img_two');
let cardThree = document.querySelector('.card_img_three');
let cardFour = document.querySelector('.card_img_four');

btnAhead.onclick = function () {
  modalContentOne.style.display = 'none';
  modalContentTwo.style.display = 'flex';
  modalContentThree.style.display = 'none';
  modalContentFour.style.display = 'none';
};

cardOne.onclick = function () {
  cardTwo.classList.remove('modal_content_card_img_focus');
  cardThree.classList.remove('modal_content_card_img_focus');
  cardFour.classList.remove('modal_content_card_img_focus');
  btnAhead.classList.remove('ahead');
  cardOne.classList.add('modal_content_card_img_focus');
  btnAhead.classList.add('ahead_focus');
};

cardTwo.onclick = function () {
  cardOne.classList.remove('modal_content_card_img_focus');
  cardThree.classList.remove('modal_content_card_img_focus');
  cardFour.classList.remove('modal_content_card_img_focus');
  btnAhead.classList.remove('ahead');
  cardTwo.classList.add('modal_content_card_img_focus');
  btnAhead.classList.add('ahead_focus');
};

cardThree.onclick = function () {
  cardOne.classList.remove('modal_content_card_img_focus');
  cardTwo.classList.remove('modal_content_card_img_focus');
  cardFour.classList.remove('modal_content_card_img_focus');
  btnAhead.classList.remove('ahead');
  cardThree.classList.add('modal_content_card_img_focus');
  btnAhead.classList.add('ahead_focus');
};

cardFour.onclick = function () {
  cardOne.classList.remove('modal_content_card_img_focus');
  cardTwo.classList.remove('modal_content_card_img_focus');
  cardThree.classList.remove('modal_content_card_img_focus');
  btnAhead.classList.remove('ahead');
  cardFour.classList.add('modal_content_card_img_focus');
  btnAhead.classList.add('ahead_focus');
};

/*.........................................................второе окно.................................................*/

let modalContentTwo = document.querySelector('.modal_content_two');
let btnBackTwo = document.querySelector('.back_two');
let btnAheadTwo = document.querySelector('.ahead_two');
let cardTextOne = document.querySelector('.card_text_one');
let cardTextTwo = document.querySelector('.card_text_two');
let cardTextThree = document.querySelector('.card_text_three');
let cardTextFour = document.querySelector('.card_text_four');

btnBackTwo.onclick = function () {
  modalContentTwo.style.display = 'none';
  modalContentOne.style.display = 'flex';
};

btnAheadTwo.onclick = function () {
  modalContentTwo.style.display = 'none';
  modalContentThree.style.display = 'flex';
  modalContentFour.style.display = 'none';
  modalContentOne.style.display = 'none';
};

cardTextOne.onclick = function () {
  cardTextTwo.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextThree.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextFour.classList.remove('modal_content_card_wrapper_two_focus');
  btnAheadTwo.classList.remove('ahead_two');
  cardTextOne.classList.add('modal_content_card_wrapper_two_focus');
  btnAheadTwo.classList.add('ahead_focus');
};

cardTextTwo.onclick = function () {
  cardTextOne.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextThree.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextFour.classList.remove('modal_content_card_wrapper_two_focus');
  btnAheadTwo.classList.remove('ahead_two');
  cardTextTwo.classList.add('modal_content_card_wrapper_two_focus');
  btnAheadTwo.classList.add('ahead_focus');
};

cardTextThree.onclick = function () {
  cardTextOne.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextTwo.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextFour.classList.remove('modal_content_card_wrapper_two_focus');
  btnAheadTwo.classList.remove('ahead_two');
  cardTextThree.classList.add('modal_content_card_wrapper_two_focus');
  btnAheadTwo.classList.add('ahead_focus');
};

cardTextFour.onclick = function () {
  cardTextOne.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextTwo.classList.remove('modal_content_card_wrapper_two_focus');
  cardTextThree.classList.remove('modal_content_card_wrapper_two_focus');
  btnAheadTwo.classList.remove('ahead_two');
  cardTextFour.classList.add('modal_content_card_wrapper_two_focus');
  btnAheadTwo.classList.add('ahead_focus');
};

/*.........................................................третье окно.................................................*/

let modalContentThree = document.querySelector('.modal_content_three');
let btnBackThree = document.querySelector('.back_three');
let btnAheadThree = document.querySelector('.ahead_three');
let cardThreeTextOne = document.querySelector('.card_three_text_one');
let cardThreeTextTwo = document.querySelector('.card_three_text_two');
let cardThreeTextThree = document.querySelector('.card_three_text_three');
let cardThreeTextFour = document.querySelector('.card_three_text_four');

btnBackThree.onclick = function () {
  modalContentOne.style.display = 'none';
  modalContentThree.style.display = 'none';
  modalContentFour.style.display = 'none';
  modalContentTwo.style.display = 'flex';
};

btnAheadThree.onclick = function () {
  modalContentTwo.style.display = 'none';
  modalContentThree.style.display = 'none';
  modalContentFour.style.display = 'flex';
  modalContentOne.style.display = 'none';
};

cardThreeTextOne.onclick = function () {
  cardThreeTextTwo.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextThree.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextFour.classList.remove('card_three_text_wrapper_focus');
  btnAheadThree.classList.remove('ahead_three');
  cardThreeTextOne.classList.add('card_three_text_wrapper_focus');
  btnAheadThree.classList.add('ahead_focus');
};

cardThreeTextTwo.onclick = function () {
  cardThreeTextOne.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextThree.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextFour.classList.remove('card_three_text_wrapper_focus');
  btnAheadThree.classList.remove('ahead_three');
  cardThreeTextTwo.classList.add('card_three_text_wrapper_focus');
  btnAheadThree.classList.add('ahead_focus');
};

cardThreeTextThree.onclick = function () {
  cardThreeTextOne.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextTwo.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextFour.classList.remove('card_three_text_wrapper_focus');
  btnAheadThree.classList.remove('ahead_three');
  cardThreeTextThree.classList.add('card_three_text_wrapper_focus');
  btnAheadThree.classList.add('ahead_focus');
};

cardThreeTextFour.onclick = function () {
  cardThreeTextOne.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextTwo.classList.remove('card_three_text_wrapper_focus');
  cardThreeTextThree.classList.remove('card_three_text_wrapper_focus');
  btnAheadThree.classList.remove('ahead_three');
  cardThreeTextFour.classList.add('card_three_text_wrapper_focus');
  btnAheadThree.classList.add('ahead_focus');
};

/*.........................................................четвертое окно.................................................*/

let modalContentFour = document.querySelector('.modal_content_four');
let btnBackFour = document.querySelector('.back_four');
let btnAheadFour = document.querySelector('.ahead_four');
let cardFourTextOne = document.querySelector('.card_four_text_one');
let cardFourTextTwo = document.querySelector('.card_four_text_two');
let cardFourTextThree = document.querySelector('.card_four_text_three');
let cardFourTextFour = document.querySelector('.card_four_text_four');

btnBackFour.onclick = function () {
  modalContentOne.style.display = 'none';
  modalContentThree.style.display = 'flex';
  modalContentTwo.style.display = 'none';
  modalContentFour.style.display = 'none';
  modalContentFive.style.display = 'none';
};

btnAheadFour.onclick = function () {
  modalContentOne.style.display = 'none';
  modalContentTwo.style.display = 'none';
  modalContentThree.style.display = 'none';
  modalContentFour.style.display = 'none';
  modalContentFive.style.display = 'flex';
};

cardFourTextOne.onclick = function () {
  cardFourTextTwo.classList.remove('card_four_text_wrapper_focus');
  cardFourTextThree.classList.remove('card_four_text_wrapper_focus');
  cardFourTextFour.classList.remove('card_four_text_wrapper_focus');
  btnAheadFour.classList.remove('ahead_four');
  cardFourTextOne.classList.add('card_four_text_wrapper_focus');
  btnAheadFour.classList.add('ahead_focus');
};

cardFourTextTwo.onclick = function () {
  cardFourTextOne.classList.remove('card_four_text_wrapper_focus');
  cardFourTextThree.classList.remove('card_four_text_wrapper_focus');
  cardFourTextFour.classList.remove('card_four_text_wrapper_focus');
  btnAheadFour.classList.remove('ahead_four');
  cardFourTextTwo.classList.add('card_four_text_wrapper_focus');
  btnAheadFour.classList.add('ahead_focus');
};

cardFourTextThree.onclick = function () {
  cardFourTextOne.classList.remove('card_four_text_wrapper_focus');
  cardFourTextTwo.classList.remove('card_four_text_wrapper_focus');
  cardFourTextFour.classList.remove('card_four_text_wrapper_focus');
  btnAheadFour.classList.remove('ahead_four');
  cardFourTextThree.classList.add('card_four_text_wrapper_focus');
  btnAheadFour.classList.add('ahead_focus');
};

cardFourTextFour.onclick = function () {
  cardFourTextOne.classList.remove('card_four_text_wrapper_focus');
  cardFourTextTwo.classList.remove('card_four_text_wrapper_focus');
  cardFourTextThree.classList.remove('card_four_text_wrapper_focus');
  btnAheadFour.classList.remove('ahead_four');
  cardFourTextFour.classList.add('card_four_text_wrapper_focus');
  btnAheadFour.classList.add('ahead_focus');
};

/*.........................................................пятое окно.................................................*/

let modalContentFive = document.querySelector('.modal_content_five');
let btnSendFive = document.querySelector('.modal_content_five_but');
let btnName = document.querySelector('.input_text');
let btnTel = document.querySelector('.input_tel');

btnSendFive.onclick = function () {
  if (btnName.value != '' && btnTel.value != '') {
    closePopap();
    setTimeout(() => {
      alert(
        'Спасибо! Ваша заявка отправлена. В ближайшее время мы с вами свяжемся!'
      );
    }, 100);
  }
};

/*.........................................................бургер-меню.................................................*/

let burger = document.querySelector('.burger_wrapper');
let burgerBut = document.querySelector('.burger_button');

burgerBut.addEventListener('click', function () {
  if (burgerBut.classList.contains('change')) {
    burgerBut.classList.remove('change');
    burger.style.display = 'none';
  } else {
    burgerBut.classList.add('change');
    burger.style.display = 'flex';
  }
});
