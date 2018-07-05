class LogMessage < ApplicationRecord
  enum severity: [
    :info,
    :warning,
    :error
  ]

  scope :descending, lambda {
    order(created_at: :desc)
  }
end
