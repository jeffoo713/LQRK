class User < ApplicationRecord

  before_validation do
    self.username = username.downcase
  end

  validate :username_is_not_reserved
  validates :username, presence: true, uniqueness: true
  validates :username, length: { minimum: 5, message: 'should be at least 5 characters' }
  validates :username, format: { with: /\A[a-zA-Z0-9]+\z/, message: 'should be one word' }

  private

  def username_is_not_reserved
    reserved_usernames = %w[jaamongsoda superuser]

    errors.add(:username, 'is reserved') if reserved_usernames.include?(username)
  end
end
