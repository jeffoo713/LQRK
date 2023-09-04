# frozen_string_literal: true

module Types
  module UserTypes
    module UserQueries
      def self.included(base)
        base.include Types::LiquorTypes::LiquorQueries

        base.field :users, [Types::UserTypes::UserType], null: false
        base.define_method(:users, -> { User.all })

        base.field :user, Types::UserTypes::UserType, null: true do
          argument :id, GraphQL::Types::ID, required: true
        end
        base.define_method(:user, ->(id:) { User.find_by(id:) })
      end
    end
  end
end
