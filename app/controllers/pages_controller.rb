class PagesController < ApplicationController
  def view
    render params[:id].gsub(/[^a-z-]/, '')
  end
end
