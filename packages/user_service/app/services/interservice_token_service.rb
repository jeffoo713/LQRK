# frozen_string_literal: true

require_relative 'config/jwt_token_config'

module InterserviceTokenService
  extend self

  include JwtTokenConfig

  def encoded_token(user_id, destination_service, resource)
    payload = {
      user_id:,
      origin_service: 'user',
      destination_service:,
      resource:,
      exp: interservice_token_exp
    }

    JWT.encode(payload, ENV.fetch('JWT_INTERSERVICE_SECRET_KEY'), HMAC_ALGORITHM)
  end
end
