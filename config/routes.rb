Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/candies', to: 'candies#index'
  get '/candies/:id', to: 'candies#show'
end
