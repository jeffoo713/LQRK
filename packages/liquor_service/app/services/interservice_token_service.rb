# frozen_string_literal: true

require_relative 'config/jwt_token_config'

module InterserviceTokenService
  extend self

  include JwtTokenConfig

  def verified_request?(token)
    decoded = TokenDecoder.decoded_token(token, interservice_token: true)

    wrong_destination = decoded['destination_service'] != 'liquor'
    return [false, nil] if wrong_destination

    [true, decoded]
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
