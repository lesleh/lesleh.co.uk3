# frozen_string_literal: true

module PhotosHelper
  def photo_link_data(photo)
    {
      lightbox: 'photos',
      id: photo[:photo].id,
      glightbox: glightbox_photo_description(photo)
    }
  end

  def photo_image_data(photo)
    {
      'lazy-load': '',
      'lazy-load-src': url_for(photo[:thumbnail])
    }
  end

  def glightbox_photo_description(photo)
    "description: #{photo[:photo].description}"
  end
end
