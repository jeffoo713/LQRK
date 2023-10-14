class Liquor < ApplicationRecord
  enum liquor_type: { beer: 0, wine: 1, spirit: 2, liqueur: 3, asian_spirit: 4, others: 5 }

  validates :user_id, :name, :liquor_type, presence: true
  validate :validate_rating_over_limit
  validate :no_duplicated_liquor_name_for_user

  scope :by_user, ->(user_id) { where(user_id: user_id.to_i) }
  scope :by_type, ->(user_id, type) { by_user(user_id).send(type.to_sym) }

  private

  def validate_rating_over_limit
    rating_limit = 5

    errors.add(:rating, 'should not be over 5') if rating > rating_limit
  end

  def no_duplicated_liquor_name_for_user
    errors.add(:name, 'is duplicated liquor name') if Liquor.where(user_id:, name:).present?
  end
end
