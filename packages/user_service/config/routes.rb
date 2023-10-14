Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/auth/sign_in', to: 'authentication#sign_in'

  resources :users, only: %i[index show create update destroy]
end
