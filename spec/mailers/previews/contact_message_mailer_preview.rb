# Preview all emails at http://localhost:3000/rails/mailers/contact_message_mailer
class ContactMessageMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/contact_message_mailer/message
  def message
    ContactMessageMailerMailer.message
  end

end
