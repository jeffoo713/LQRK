# frozen_string_literal: true

class LiquorServiceClient
  BASE_URL = 'http://liquor:8882'

  def initialize(user_id)
    @user_id = user_id
    @connection = Faraday.new(url: BASE_URL)
  end

  def fetch_liquors_for_user
    # TODO: Specify the url better. It's fetching all the liquors right now.
    response = @connection.get('/liquors')

    if response.success?
      JSON.parse(response.body)
    else
      # TODO: handle error better. It's returning an empty array right now.
      []
    end
  end

end
