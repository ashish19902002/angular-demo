Rails.application.routes.draw do
  get 'entry/home'
  root to: 'entry#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
