# frozen_string_literal: true

require_relative 'config/jwt_token_config'

module AuthTokenService
  extend self

  include JwtTokenConfig

  def encoded_token(user_id)
    payload = { user_id:, exp: auth_token_exp }

    JWT.encode(payload, ENV.fetch('JWT_SECRET_KEY'), HMAC_ALGORITHM)
  end

  def extract_current_user(token)
    return nil if token.blank?

    user_id = decoded_token(token)[0]['user_id']
    user = User.find_by(id: user_id)

    return { user:, error: "User not found with user_id: #{user_id}" } if user.blank?

    { user:, error: nil }
  rescue JWT::ExpiredSignature
    { user: nil, error: 'Expired auth token provided' }
  rescue JWT::DecodeError
    { user: nil, error: 'Authentication error occurred' }
  end

  private

  def decoded_token(token)
    JWT.decode(token, ENV.fetch('JWT_SECRET_KEY', 'no_key_found'), true, { algorithm: HMAC_ALGORITHM })
  end
end
