Rails.application.routes.draw do
  # devise_for :users
  # resources :pins

  # root "pins#index"

  get "test_bootstrap/index"
  root to: "testbootstrap#index"
end
