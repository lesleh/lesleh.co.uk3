class ContactMessageMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_message_mailer.message.subject
  #
  def contact(contact_message)
    @contact_message = contact_message

    mail to: 'iam@lesleh.co.uk', subject: 'Lesleh.co.uk contact message'
  end
end
