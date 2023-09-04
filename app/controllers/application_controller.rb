# frozen_string_literal: true

class ApplicationController < ActionController::API
  before_action :authorized?

  def authorized?
    interservice_request = request.headers['X-Interservice-Request'] == 'true'

    if interservice_request
      token = request.headers['Authorization']
      verified = InterserviceTokenService.verified_request?(token)

      render json: { message: 'Unauthorized interservice request' }, status: :unauthorized unless verified
    else
      render json: { message: 'External request is not allowed' }, status: :not_implemented
    end
  end
end
