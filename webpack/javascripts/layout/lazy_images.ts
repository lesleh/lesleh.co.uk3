var observer: IntersectionObserver | undefined

function loadImage (image: HTMLImageElement) {
  window.setTimeout(() => image.setAttribute('src', image.dataset.lazyLoadSrc || ''), 0)
}

function handleIntersect (entries: IntersectionObserverEntry[]) {
  entries.filter((e) => e.isIntersecting).forEach(v => {
    observer && observer.unobserve(v.target)
    loadImage(v.target as HTMLImageElement)
  })
}

document.addEventListener('turbolinks:before-visit', function () {
  if (observer && observer.disconnect) {
    observer.disconnect()
    observer = undefined
  }
})

document.addEventListener('turbolinks:load', function () {
  let lazyImages = document.querySelectorAll('img[data-lazy-load]')
  if (lazyImages.length < 1) {
    return
  }

  observer = new IntersectionObserver(handleIntersect, { root: null })
  Array.from(lazyImages).forEach((e) => {
    observer && observer.observe(e)
  })
})
