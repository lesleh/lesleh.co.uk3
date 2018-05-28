# frozen_string_literal: true

class Photo < ApplicationRecord
  has_one_attached :image

  scope :descending, lambda {
    order(created_at: :desc)
  }

  scope :published, lambda {
    where.not(published_at: nil)
  }

  enum thumbnail_size: {
    small: 0,
    medium: 1,
    large: 2
  }

  THUMBNAIL_SIZES = {
    small: '250x250',
    medium: '500x500',
    large: '750x750'
  }.freeze

  def thumbnail(thumbnail_size: :small)
    size = THUMBNAIL_SIZES[thumbnail_size.to_sym]
    raise StandardError, 'Unknown size' if size.nil?
    image.variant(resize: size).processed
  end
end
