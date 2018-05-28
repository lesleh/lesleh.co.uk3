# # config/initializers/recaptcha.rb
Recaptcha.configure do |config|
  if Rails.application.credentials.recaptcha
    config.public_key  = Rails.application.credentials.recaptcha[:public_key]
    config.private_key = Rails.application.credentials.recaptcha[:private_key]
  else
    config.public_key  = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    config.private_key = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
  end
end
