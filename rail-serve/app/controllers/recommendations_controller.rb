class RecommendationsController < ApplicationController
    def getRecommend() 
       @genres = params[:genres] 
       @manga = Manga.where(genres: @genres).limit(3)
       json_response(@manga)

    end 
end
