# frozen_string_literal: true

require_relative 'config/jwt_token_config'

module TokenDecoder
  extend self

  include JwtTokenConfig

  def decoded_token(token, interservice_token: false)
    secret = ENV.fetch(interservice_token ? 'JWT_INTERSERVICE_SECRET_KEY' : 'JWT_SECRET_KEY', 'no_key_found')

    JWT.decode(token, secret, true, { algorithm: HMAC_ALGORITHM }).first
  end
end
