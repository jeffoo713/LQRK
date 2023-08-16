class Liquor < ApplicationRecord
  enum liquor_type: { beer: 0, wine: 1, spirit: 2, liqueur: 3, asian_spirit: 4, others: 5 }

  scope :with_user, ->(user_id) { where(user_id:) }
end
