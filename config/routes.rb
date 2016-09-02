Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      get '/candies', to: 'candies#index'
      get '/candies/:id', to: 'candies#show'
      post '/candies', to: 'candies#create'
      patch '/candies/:id', to: 'candies#update'
      delete '/candies/:id', to: 'candies#destroy'
      get '/welcome', to: 'candies#welcome'
    end
    # namespace :v2 do
    #   get '/candies', to: 'candies#index'
    #   get '/candies/:id', to: 'candies#show'
    #   post '/candies/create', to: 'candies#create'
    #   patch '/candies/:id', to: 'candies#update'
    #   delete '/candies/:id', to: 'candies#destroy'
    # end
  end
end