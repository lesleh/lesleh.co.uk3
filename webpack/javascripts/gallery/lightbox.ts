document.addEventListener('turbolinks:load', async function () {
  if(!document.querySelector('.glightbox')) {
    return
  }
  const GLightbox = await import('glightbox')
  GLightbox.default({
    'selector': 'glightbox',
  });
})
