# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :authorized?

  def signed_in?
    !!current_user
  end

  def current_user
    token = request.headers['Authorization']
    return if token.blank?

    user_id = JWT.decode(token, ENV.fetch('JWT_SECRET_KEY', 'no_key_found'), true, { algorithm: 'HS256' })[0]['user_id']

    @user = User.find(user_id)
  rescue JWT::ExpiredSignature
    render json: { errors: ['Expired auth token provided'] }, status: :unauthorized
  rescue JWT::DecodeError
    render json: { errors: ['Authentication error occurred'] }, status: :unauthorized
  end

  def authorized?
    render json: { errors: ['Authentication failed'] }, status: :unauthorized unless signed_in?
  end
end
