# frozen_string_literal: true

module Types
  module AuthenticationTypes
    module AuthenticationMutations
      def self.included(base)
        base.field :sign_in, mutation: Mutations::AuthenticationMutations::SignIn
      end
    end
  end
end
