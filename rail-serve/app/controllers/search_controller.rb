class SearchController < ApplicationController
    # search/manga
    def searchManga() 
        @searchKey = params[:searchKey]
        @manga = Manga.where(:title => /#{@searchKey}/i)

        if @manga.length > 0 
            json_response( @manga, 200)
        else 
            json_response( @manga, 404)
        end
    end
end