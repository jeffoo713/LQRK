# frozen_string_literal: true

class AuthenticationController < ApplicationController
  skip_before_action :authorized, only: [:sign_in]

  def sign_in
    user = User.find_by(username: params[:username])

    if user
      user_id = user.id
      token = encode_token({ user_id: })

      render json: { token:, user_id: }
    else
      render json: { errors: ["Cannot find the username: #{params[:username]}"] }, status: :unauthorized
    end
  end

  private

  def encode_token(payload)
    JWT.encode(payload, ENV.fetch('JWT_SECRET_KEY'), 'HS256')
  end
end
