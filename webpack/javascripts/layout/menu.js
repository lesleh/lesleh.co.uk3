function hamburgerClicked () {
  let menu = document.querySelector('.site-nav')
  menu.classList.toggle('is-open')
}

document.addEventListener('turbolinks:load', function () {
  let button = document.querySelector('.site-nav__hamburger')
  button.addEventListener('click', hamburgerClicked.bind(button))
})
