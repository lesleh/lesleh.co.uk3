module ApplicationHelper

  def random_color
    "#%06x" % (rand * 0xffffff)
  end

  def page_title_tag
    title = 'Lesleh.co.uk'
    title = "#{@page_title} - #{title}" if @page_title.present?
    content_tag :title, title
  end

end
