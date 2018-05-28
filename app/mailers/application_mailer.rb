# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'iam@lesleh.co.uk'
  layout 'mailer'
end
