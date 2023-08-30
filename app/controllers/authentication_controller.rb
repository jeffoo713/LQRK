# frozen_string_literal: true

class AuthenticationController < ApplicationController
  skip_before_action :authorized?, only: [:sign_in]

  def sign_in
    user = User.find_by(username: params[:username])

    if user
      token = encode_token({ user_id: user.id })

      render json: { token:, user: }
    else
      render json: { errors: ["Cannot find the username: #{params[:username]}"] }, status: :unauthorized
    end
  end

  private

  def encode_token(payload)
    JWT.encode(payload, ENV.fetch('JWT_SECRET_KEY'), 'HS256')
  end
end
