# frozen_string_literal: true

module Types
  module LiquorTypes
    class LiquorType < Types::BaseObject
      field :id, ID, null: false
      field :user_id, Integer, null: false
      field :name, String, null: false
      field :brand, String, null: true
      field :year, Integer, null: true
      field :alcohol_percentage, Float, null: true
      field :country, String, null: true
      field :note, String, null: true
      field :rating, Float, null: true
      field :liquor_type, String, null: false
      field :created_at, GraphQL::Types::ISO8601DateTime, null: false
      field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
  end
end
