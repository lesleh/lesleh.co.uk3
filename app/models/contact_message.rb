# frozen_string_literal: true

class ContactMessage
  include ActiveModel::Model
  attr_accessor :name, :email, :message

  validates :name, presence: true
  validates :email, presence: true
  validates :message, presence: true
end
