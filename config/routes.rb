Rails.application.routes.draw do
  get 'photos' => 'photos#index'
  root 'playground#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
