# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :authorized?

  def authorized?
    token = request.headers['Authorization']
    TokenService.extract_current_user(token) => { user:, error: }

    render json: { errors: [error] }, status: :unauthorized if error.present?
  end
end
