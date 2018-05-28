# frozen_string_literal: true

Rails.application.routes.draw do
  get 'about' => 'pages#view', defaults: { id: 'about' }, as: :about
  get 'contact' => 'contact#new', as: :contact
  post 'contact' => 'contact#create'
  get 'photos' => 'photos#index'
  root 'playground#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
