module Mutations
  module UserMutations
    class DeleteUser < Mutations::BaseMutation
      argument :id, Int, required: true

      field :user, Types::UserType, null: true
      field :errors, [String], null: false

      def resolve(id:)
        user = User.find_by(id:)
        return { user: nil, errors: ["User with id:#{id} does not exist"] } if user.blank?

        if user.destroy
          { user:, errors: [] }
        else
          { user: nil, errors: user.errors.full_messages }
        end
      end
    end
  end
end