document.addEventListener('turbolinks:load', async function () {
  const GLightbox = await import('glightbox')
  GLightbox.default({
    'selector': 'glightbox',
  });
})
