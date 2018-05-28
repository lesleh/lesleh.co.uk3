# # config/initializers/recaptcha.rb
Recaptcha.configure do |config|
  config.public_key  = Rails.application.credentials.recaptcha[:public_key]
  config.private_key = Rails.application.credentials.recaptcha[:private_key]
  # Uncomment the following line if you are using a proxy server:
  # config.proxy = 'http://myproxy.com.au:8080'
end
