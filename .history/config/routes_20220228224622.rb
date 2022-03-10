Rails.application.routes.draw do
  # devise_for :users
  # resources :pins

  # root "pins#index"

  get "welcome/index"
  root to: "welcome#index"
end
