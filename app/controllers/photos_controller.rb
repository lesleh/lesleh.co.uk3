# frozen_string_literal: true

class PhotosController < ApplicationController
  before_action :set_photo, only: [:update]

  def index
    @page_title = 'Photos'
    @photos = photos
  end

  def update
    respond_to do |format|
      if @photo.update(photo_params)
        format.json { render json: { status: 'ok', photo: @photo}, status: :ok }
      else
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def set_photo
    @photo = Photo.find(params[:id])
  end

  def photos
    photos = Photo.descending.with_attached_image
    Rails.cache.fetch(photos) do
      photos.map do |photo|
        {
          photo: photo,
          thumbnail: photo.thumbnail(thumbnail_size: photo.thumbnail_size.to_s)
        }
      end
    end
  end

  def photo_params
    params.require(:photo).permit(:thumbnail_size, :description)
  end
end
