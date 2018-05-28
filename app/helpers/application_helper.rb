# frozen_string_literal: true

module ApplicationHelper
  def random_color
    format('#%06x', (rand * 0xffffff))
  end

  def page_title_tag
    title = 'Lesleh.co.uk'
    title = "#{@page_title} - #{title}" if @page_title.present?
    content_tag :title, title
  end

  def flash_class(level)
    case level.to_sym
      when :notice then 'alert alert-info'
      when :success then 'alert alert-success'
      when :error, :alert then 'alert alert-error'
      else "alert-#{level}"
    end
  end
end
