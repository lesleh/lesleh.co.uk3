# frozen_string_literal: true

class ContactController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
    @page_title = 'Contact'
    @contact_message = ContactMessage.new
  end

  def create
    @contact_message = ContactMessage.new(contact_message_params)
    if @contact_message.valid?
      ContactMessageMailer.contact(@contact_message).deliver_now
      redirect_to root_path, notice: 'Your message was sent'
    else
      render :new
    end
  end

  private

  def contact_message_params
    params.require(:contact_message).permit(:name, :email, :message)
  end
end
