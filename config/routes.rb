Lessifier::Application.routes.draw do
  get "converter/index"

  root :to => "converter#index"

  match ':controller(/:action(/:id(.:format)))'
end
