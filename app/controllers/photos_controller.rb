class PhotosController < ApplicationController
  def index
    @photos = Photo.descending
  end
end
