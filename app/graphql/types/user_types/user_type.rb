# frozen_string_literal: true

module Types
  module UserTypes
    class UserType < Types::BaseObject
      include Types::LiquorTypes::LiquorQueries

      field :id, ID, null: false
      field :username, String, null: false
      field :created_at, GraphQL::Types::ISO8601DateTime, null: false
      field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
  end
end
