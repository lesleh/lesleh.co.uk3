# Assuming an encrypted credentials file with decrypted contents like:
#
#     aws:
#       access_key_id: YOUR_KEY_ID
#       secret_access_key: YOUR_ACCESS_KEY
#
keys = Rails.application.credentials[:aws]

creds = Aws::Credentials.new(keys[:access_key_id], keys[:secret_access_key])
Aws::Rails.add_action_mailer_delivery_method(:aws_sdk, credentials: creds, region: 'eu-west-1')
