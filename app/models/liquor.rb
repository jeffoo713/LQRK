class Liquor < ApplicationRecord
  enum liquor_type: { beer: 0, wine: 1, spirit: 2, liqueur: 3, asian_spirit: 4, others: 5 }

  validates :user_id, presence: true
  validates :name, presence: true
  validates :liquor_type, presence: true

  scope :by_user, ->(user_id) { where(user_id:) }
end
