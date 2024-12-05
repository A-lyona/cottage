let modal = document.getElementById('myModal');
let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let modalContentWrapper = document.querySelector('.modal_content_wrapper');
let modalContent = document.querySelector('.modal_content');
let btnClose = document.querySelector('.close');

btnOne.onclick = function () {
  //открытие модального окна
  openModal();
  modalContent.style.backgroundImage = "url('../../assets/42.png')";
};

btnTwo.onclick = function () {
  //открытие модального окна
  openModal();
  modalContent.style.backgroundImage = "url('../../assets/43.png')";
};

btnClose.onclick = function () {
  //закрыть по крестику
  modal.style.display = 'none';
};

function openModal() {
  modal.style.display = 'flex';
  modalContentWrapper.style.display = 'flex';
}

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
