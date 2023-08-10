module Mutations
  module UserMutations
    class CreateUser < Mutations::BaseMutation
      argument :username, String, required: true

      field :user, Types::UserType, null: true
      field :errors, [String], null: false

      def resolve(username:)
        user = User.new(username:)
        if user.save
          { user:, errors: [] }
        else
          { user: nil, errors: user.errors.full_messages }
        end
      end
    end
  end
end
