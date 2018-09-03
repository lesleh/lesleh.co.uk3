/* global Image */

export default function preloadImage (url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    let image = new Image() as HTMLImageElement
    image.onload = resolve.bind(null, image)
    image.onerror = reject.bind(null, image)
    image.src = url
  })
}
