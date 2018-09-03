import preloadImage from './preload_image'

export default function preloadImages (urls: string[]) {
  return Promise.all(urls.map(url => preloadImage(url)))
}
