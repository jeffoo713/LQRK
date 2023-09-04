# frozen_string_literal: true

require_relative 'config/jwt_token_config'

module InterserviceTokenService
  extend self

  include JwtTokenConfig
  include TokenDecoder

  def verified_request?(token)
    decoded = decoded_token(token)

    decoded['destination_service'] == 'liquor'
  rescue JWT::DecodeError => e
    Rails.logger.error({
                         error: e,
                         error_message: e.message,
                         time: Time.now,
                         additional_data: { module: 'Interservice`TokenService' }
                       })
    false
  end
end