# frozen_string_literal: true

module Types
  module LiquorTypes
    module LiquorQueries
      def self.included(base)
        base.field :liquors, [Types::LiquorTypes::LiquorType], null: false

        base.define_method(:liquors, lambda do
          liquor_client = LiquorServiceClient.new(object.id)
          liquor_client.fetch_liquors_for_user
        end)
      end
    end
  end
end
