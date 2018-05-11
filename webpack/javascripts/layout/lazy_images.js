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

window.addEventListener('load', function () {
  var options = {
    root: null
  }

  observer = new window.IntersectionObserver(handleIntersect, options)
  Array.from(document.querySelectorAll('img[data-lazy-load]')).forEach((e) => {
    observer.observe(e)
  })
})
