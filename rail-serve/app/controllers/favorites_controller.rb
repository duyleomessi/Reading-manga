class FavoritesController < ApplicationController
    before_action :authenticate_request!

    # /favorites
    def create
        #@manga = Manga.find(params[:manga_id])
        #puts "chapter", @chapter.inspect
        @user = User.find(@current_user._id)
        #@user = User.find("592cd80c4ffb2b19c2aaf7c2")
        @user.push(favorite: params[:manga_id])
        json_response(@user)
    end


    def index
        @user = User.find(@current_user._id)
        #@user = User.find("592d9f022fdfbc00047f8465")
        @favorites = @user.favorite
        json_response(@favorites)
    end
    
end
