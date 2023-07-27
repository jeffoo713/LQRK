class User < ApplicationRecord

  before_validation do
    self.username = username.downcase
  end

  validate :username_is_not_reserved
  validates :username, uniqueness: true
  validates :username, length: { minimum: 5, message: 'should be at least 5 characters' }
  validates :username, format: { with: /\A[a-zA-Z0-9]+\z/, message: "should be one word" }

  private

  def username_is_not_reserved
    reserved_usernames = ["jaamongsoda", "superuser"]

    return unless reserved_usernames.include?(username)

    errors.add(:username, "is reserved")
  end
end
