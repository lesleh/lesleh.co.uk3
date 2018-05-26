import preloadImage from './preload_image'

export default function preloadImages (urls) {
  return Promise.all(urls.map(url => preloadImage(url)))
}
