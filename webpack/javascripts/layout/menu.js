function hamburgerClicked () {
  let menu = document.querySelector('.main-nav')
  if (menu.matches('.is-open')) {
    menu.classList.remove('is-open')
  } else {
    menu.classList.add('is-open')
  }
}

document.addEventListener('turbolinks:load', function () {
  let button = document.querySelector('.main-nav__hamburger')
  button.addEventListener('click', hamburgerClicked.bind(button))
})
