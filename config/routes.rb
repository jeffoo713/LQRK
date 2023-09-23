Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :liquors do
    collection do
      get '/filtered_by_type', to: 'liquors#filtered'
    end
  end

  scope '/categories' do
    get '/', to: 'liquors#available_categories'
  end
end
