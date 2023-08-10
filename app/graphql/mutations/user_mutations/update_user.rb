module Mutations
  module UserMutations
    class UpdateUser < Mutations::BaseMutation
      argument :id, Int, required: true
      argument :username, String, required: true

      field :user, Types::UserType, null: true
      field :errors, [String], null: false

      def resolve(id:, username:)
        user = User.find_by(id:)
        return { user: nil, errors: ["User with #{id} does not exist"] } if user.blank?

        user.update(username:)

        if user.save
          { user:, errors: [] }
        else
          { user: nil, errors: user.errors.full_messages }
        end
      end
    end
  end
end