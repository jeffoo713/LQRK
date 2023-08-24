module Mutations
  module AuthenticationMutations
    class SignIn < Mutations::BaseMutation
      argument :username, String, required: true

      field :token, String, null: true
      field :user, Types::UserTypes::UserType, null: true
      field :errors, [String], null: true

      def resolve(username:)
        user = User.find_by(username:)

        if user
          user_id = user.id
          token = encode_token({ user_id: })

          { token:, user:, errors: [] }
        else
          { token: nil, user: nil, errors: ["Cannot find the username: #{username}"] }
        end
      end

      private

      def encode_token(payload)
        JWT.encode(payload, ENV.fetch('JWT_SECRET_KEY'), 'HS256')
      end
    end
  end
end
