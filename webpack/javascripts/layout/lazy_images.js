var observer

/**
 * @param {HTMLImageElement} image
 */
function loadImage (image) {
  window.setTimeout(() => image.setAttribute('src', image.dataset.lazyLoadSrc), 0)
}

function handleIntersect (entries) {
  entries.filter((e) => e.isIntersecting).forEach(v => {
    observer.unobserve(v.target)
    loadImage(v.target)
  })
}

document.addEventListener('turbolinks:before-visit', function () {
  if (observer && observer.disconnect) {
    observer.disconnect()
    observer = null
  }
})

document.addEventListener('turbolinks:load', function () {
  let lazyImages = document.querySelectorAll('img[data-lazy-load]')
  if (lazyImages.length < 1) {
    return
  }

  observer = new window.IntersectionObserver(handleIntersect, { root: null })
  Array.from(lazyImages).forEach((e) => {
    observer.observe(e)
  })
})
