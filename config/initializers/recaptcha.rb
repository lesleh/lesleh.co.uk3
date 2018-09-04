# # config/initializers/recaptcha.rb
Recaptcha.configure do |config|
  if Rails.application.credentials.recaptcha
    config.site_key  = Rails.application.credentials.recaptcha[:public_key]
    config.secret_key = Rails.application.credentials.recaptcha[:private_key]
  else
    config.site_key  = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
    config.secret_key = '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe'
  end
end
