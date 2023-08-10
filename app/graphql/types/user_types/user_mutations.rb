module Types
  module UserTypes
    module UserMutations
      def self.included(base)
        base.field :create_user, mutation: Mutations::UserMutations::CreateUser
        base.field :update_user, mutation: Mutations::UserMutations::UpdateUser
        base.field :delete_user, mutation: Mutations::UserMutations::DeleteUser
      end
    end
  end
end