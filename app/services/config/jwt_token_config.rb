# frozen_string_literal: true

module JwtTokenConfig
  HMAC_ALGORITHM = 'HS256'

  def interservice_token_exp
    (Time.zone.now + 5.minutes).to_i
  end

  def auth_token_exp
    (Time.zone.now + 1.years).to_i
  end
end
