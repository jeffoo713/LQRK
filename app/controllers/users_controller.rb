class UsersController < ApplicationController
  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    username = JSON.parse(request.body.read)['username']

    if User.exists?(username:)
      render json: { message: "Username already exists: #{username}"}
    else
      user = User.create!(username:)
      render json: user
    end

  rescue ActiveRecord::RecordInvalid => e
    render json: { message: "#{e}: #{username}" }
  end

  def update
    req_body = JSON.parse(request.body.read)

    user = User.find(params[:id])
    user.update!(req_body)

    render json: user

  rescue ActiveRecord::RecordInvalid => e
    username = req_body['username']
    render json: { message: "#{e}: #{username}" }
  end

  def destroy
    user = User.find(params[:id])
    user.destroy

    render json: user
  end
end
