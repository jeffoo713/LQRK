module Types
  module UserTypes
    module UserQueries
      def self.included(base)
        base.field :users, [Types::UserType], null: false
        def users
          User.all
        end

        base.field :user, Types::UserType, null: true do
          argument :id, GraphQL::Types::ID, required: true
        end
        def user(id:)
          User.find_by(id:)
        end
      end
    end
  end
end
