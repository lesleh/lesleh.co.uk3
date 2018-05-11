class PhotosController < ApplicationController
  def index
    @photos = get_photos
  end

  private

  def get_photos
    photos = Photo.descending
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
