class ChaptersController < ApplicationController
    # uri: /chapters
    def index
        @chapters = Chapter.all 
        json_response(@chapters)
    end
    
    #uri: /chapters/:id
    def show
        @chapter = Chapter.find(params[:id])
        puts "@chapters ", @chapter.views
        json_response(@chapter)
        # update the number of views in this chapter
        @chapter.inc(views: 1)
        # update the number of total views of manga
        @mangaId = @chapter.manga
        @manga = Manga.where(_id: @mangaId)
        @manga.inc(views: 1)
    end

    #uri: /chapters/manga/:mangaId
    def getAllChapter
        @chapters = Chapter.where(manga: params[:mangaId])
        json_response(@chapters)
    end
end
