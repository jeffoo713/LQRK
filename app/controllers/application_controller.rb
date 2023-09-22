# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :authorized?

  def authorized?
    interservice_request = request.headers['X-Interservice-Request'] == 'true'
    token = request.headers['Authorization']

    if interservice_request
      verified, payload = InterserviceTokenService.verified_request?(token)
      render json: { message: 'Unauthorized interservice request' }, status: :unauthorized unless verified
    else
      verified, payload = AuthTokenService.verified_request?(token)
      render json: { message: 'Unauthorized request' }, status: :unauthorized unless verified
    end
    @context = payload
  end
end
