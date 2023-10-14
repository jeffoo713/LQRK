# frozen_string_literal: true

require_relative 'config/jwt_token_config'

module AuthTokenService
  extend self

  include JwtTokenConfig

  def verified_request?(token)
    decoded = TokenDecoder.decoded_token(token)

    [true, decoded]
  rescue JWT::DecodeError => e
    Rails.logger.error({
                         error: e,
                         error_message: e.message,
                         time: Time.now,
                         additional_data: { module: 'AuthTokenService' }
                       })
    false
  end
end