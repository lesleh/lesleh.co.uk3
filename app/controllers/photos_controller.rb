# frozen_string_literal: true

class PhotosController < ApplicationController
  def index
    @page_title = 'Photos'
    @photos = photos
  end

  private

  def photos
    photos = Photo.descending.with_attached_image
    Rails.cache.fetch(photos) do
      photos.map do |photo|
        {
          photo: photo,
          thumbnail: photo.thumbnail(size: photo.thumbnail_size.to_s)
        }
      end
    end
  end
end
