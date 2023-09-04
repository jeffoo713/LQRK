# frozen_string_literal: true

module InterserviceTokenService
  extend self

  include JwtTokenConfig

  def encoded_token(destination_service, resource)
    payload = {
      origin_service: 'user',
      destination_service:,
      resource:,
      exp: interservice_token_exp
    }

    JWT.encode(payload, ENV.fetch('JWT_INTERSERVICE_SECRET_KEY'), HMAC_ALGORITHM)
  end
end
