class Photo < ApplicationRecord
  has_one_attached :image

  enum thumbnail_size: {
    small: 0,
    medium: 1,
    large: 2
  }

  THUMBNAIL_SIZES = {
    small: '250x250',
    medium: '500x500',
    large: '750x750'
  }

  def thumbnail(size: :small)
    size = THUMBNAIL_SIZES[thumbnail_size.to_sym]
    if size.nil?
      raise StandardError, 'Unknown size'
    end
    Photo.first.image.variant(resize: size).processed
  end
end
