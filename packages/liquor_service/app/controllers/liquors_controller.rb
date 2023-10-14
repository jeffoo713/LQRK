class LiquorsController < ApplicationController

  def available_categories
    user_id = @context['user_id']

    avail_categories = []
    Liquor.liquor_types.each do |type, index|
      avail_categories << type if Liquor.by_user(user_id).find_by(liquor_type: index)
    end

    render json: avail_categories
  end

  def index
    user_id = @context['user_id']
    liquors = Liquor.by_user(user_id)

    render json: liquors

  rescue ActionController::ParameterMissing => e
    render json: { message: e }, status: 400
  end

  def filtered
    user_id = @context['user_id']
    liquor_type = params['type']

    liquors = Liquor.by_type(user_id, liquor_type)

    render json: liquors
  end

  def show
    liquor = Liquor.find(params[:id])
    render json: liquor
  end

  def create
    req_body = JSON.parse(request.body.read)
    liquor = Liquor.create!(req_body)

    render json: liquor
  rescue ActiveRecord::ActiveRecordError => e
    render json: { message: e }, status: 400
  end

  def update
    id = params[:id]
    req_body = JSON.parse(request.body.read)

    liquor = Liquor.find_by(id:)

    render json: { message: "Couldn't find liquor with id:#{id}" }, status: 404 and return if liquor.blank?

    liquor.update!(req_body)

    render json: liquor
  rescue ActiveRecord::ActiveRecordError => e
    render json: { message: e }, status: 400
  end

  def destroy
    liquor = Liquor.find(params[:id])
    liquor.destroy

    render json: liquor
  end
end
