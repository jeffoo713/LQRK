module Types
  class MutationType < Types::BaseObject
    include Types::UserTypes::UserMutations
    include Types::AuthenticationTypes::AuthenticationMutations
  end
end
