/* global Image */

export default function preloadImage (url) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.onload = resolve(image)
    image.onerror = reject(image)
    image.src = url
  })
}
