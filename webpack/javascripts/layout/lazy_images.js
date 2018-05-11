/* global IntersectionObserver */

var observer

/**
 * @param {HTMLImageElement} image
 */
function loadImage (image) {
  window.setTimeout(() => image.setAttribute('src', image.dataset.lazyLoadSrc), 0)
}

function handleIntersect (entries) {
  const visible = entries.filter((e) => e.isIntersecting)

  visible.forEach(v => {
    observer.unobserve(v.target)
    loadImage(v.target)
  })
}

function createObserver () {
  var options = {
    root: null
  }

  observer = new IntersectionObserver(handleIntersect, options)
  Array.from(document.querySelectorAll('img[data-lazy-load]')).forEach((e) => {
    observer.observe(e)
  })
}

window.addEventListener('load', createObserver)
