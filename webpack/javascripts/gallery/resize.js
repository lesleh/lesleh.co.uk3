/* global FormData, URLSearchParams, fetch */

function addCsrfParam (formdata) {
  let name = document.querySelector('meta[name="csrf-param"]').content
  let value = document.querySelector('meta[name="csrf-token"]').content
  formdata.append(name, value)
}

async function updatePhotoSize (id, size) {
  let data = new FormData()
  addCsrfParam(data)
  data.append('photo[thumbnail_size]', size)
  await fetch(`/photos/${id}.json`, {
    method: 'PATCH',
    body: data
  })
}

function photoClicked (e) {
  e.preventDefault()
  e.stopPropagation()

  let element = e.currentTarget
  let newSize

  if (element.classList.contains('gallery__link--medium')) {
    element.classList.remove('gallery__link--medium')
    newSize = 'large'
  } else if (element.classList.contains('gallery__link--large')) {
    element.classList.remove('gallery__link--large')
    newSize = 'small'
  } else {
    element.classList.remove('gallery__link--small')
    newSize = 'medium'
  }

  updatePhotoSize(element.dataset.id, newSize)
  element.classList.add(`gallery__link--${newSize}`)
}

document.addEventListener('DOMContentLoaded', function () {
  var searchParams = new URLSearchParams(window.location.search)
  if (!searchParams.has('resizing')) return

  document.querySelectorAll('.gallery__link').forEach((e) => {
    e.addEventListener('click', photoClicked)
  })
})
