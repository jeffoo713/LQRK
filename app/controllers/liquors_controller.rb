class LiquorsController < ApplicationController

  def index
    liquors = Liquor.all
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

  private

  def liquor_params
    params.require(:liquor).permit(:name, :type, :company, :alcohol_percentage, :country, :description, :year, :volume, :price)
  end
end