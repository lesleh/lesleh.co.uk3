function hamburgerClicked () {
  let menu = document.querySelector('.main-nav')
  menu.classList.toggle('is-open')
}

document.addEventListener('turbolinks:load', function () {
  let button = document.querySelector('.main-nav__hamburger')
  button.addEventListener('click', hamburgerClicked.bind(button))
})
