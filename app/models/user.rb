class User < ApplicationRecord

  before_validation do
    self.username = username.downcase
  end

  validates :username, uniqueness: true
  validates :username, length: { minimum: 5, message: 'should be at least 5 characters' }
  validates :username, format: { with: /\A[a-zA-Z0-9]+\z/, message: "should be one word" }
end
