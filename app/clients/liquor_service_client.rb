# frozen_string_literal: true

class LiquorServiceClient
  DESTINATION_SERVICE = 'liquor'
  BASE_URL = 'http://liquor:8882'

  def initialize(user_id)
    @user_id = user_id
    @connection = Faraday.new(
      url: BASE_URL,
      headers: { 'X-Interservice-Request' => 'true' }
    )
  end

  def fetch_liquors_for_user
    interservice_token = InterserviceTokenService.encoded_token(DESTINATION_SERVICE, 'liquor')

    response = @connection.get("/liquors?user_id=#{@user_id}") do |req|
      req.headers['Authorization'] = interservice_token
    end

    if response.success?
      JSON.parse(response.body)
    else
      # TODO: handle error better. It's returning an empty array right now.
      []
    end
  end
end
