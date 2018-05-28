# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ContactMessageMailer, type: :mailer do
  describe 'contact' do
    let(:contact_message) { ContactMessage.new }
    let(:mail) { ContactMessageMailer.contact(contact_message) }

    it 'renders the headers' do
      expect(mail.subject).to eq('Lesleh.co.uk contact message')
      expect(mail.to).to eq(['iam@lesleh.co.uk'])
      expect(mail.from).to eq(['iam@lesleh.co.uk'])
    end

    it 'renders the body' do
      expect(mail.body.encoded).to match('Message')
    end
  end
end
