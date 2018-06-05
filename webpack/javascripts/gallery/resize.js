/* global URLSearchParams */

function photoClicked (e) {
  e.preventDefault()
  e.stopPropagation()

  let element = e.currentTarget

  if (element.classList.contains('gallery__link--medium')) {
    element.classList.remove('gallery__link--medium')
    element.classList.add('gallery__link--large')
  } else if (element.classList.contains('gallery__link--large')) {
    element.classList.remove('gallery__link--large')
    element.classList.add('gallery__link--small')
  } else {
    element.classList.remove('gallery__link--small')
    element.classList.add('gallery__link--medium')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var searchParams = new URLSearchParams(window.location.search)
  if (!searchParams.has('resizing')) return

  document.querySelectorAll('.gallery__link').forEach((e) => {
    e.addEventListener('click', photoClicked)
  })
})
