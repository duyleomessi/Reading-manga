Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  resources :mangas, defaults: { format: :json }
  resources :users,  defaults: { format: :json }
  match '/auth/login', to: 'authentications#create', via: [:post]
  resources :chapters do 
    resources :comments, defaults: { format: :json }
  end 

  match 'search/manga', to: 'search#searchManga', via: [:get]
  match 'manga/getByGenre', to: 'mangas#getByGenre', via: [:get]
  match 'chapters/manga/:mangaId', to: 'chapters#getAllChapter', via: [:get]
  match 'genres/list', to: 'mangas#getCategories', via: [:get]
end
