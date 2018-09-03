function hamburgerClicked () {
  let menu = document.querySelector('.site-nav')
  if(menu) {
    menu.classList.toggle('is-open')
  }
}

document.addEventListener('turbolinks:load', function () {
  let button = document.querySelector('.site-nav__hamburger')
  if (button) {
    button.addEventListener('click', hamburgerClicked.bind(button))
  }
})
