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
