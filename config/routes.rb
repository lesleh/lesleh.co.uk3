# frozen_string_literal: true

Rails.application.routes.draw do
  resources :log_messages, only: [:index, :create]
  resources :photos, only: [:index, :update]
  get 'about' => 'pages#view', defaults: { id: 'about' }, as: :about
  get 'contact' => 'contact#new', as: :contact
  post 'contact' => 'contact#create'
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
