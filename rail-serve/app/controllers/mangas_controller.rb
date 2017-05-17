class MangasController < ApplicationController
    # uri: /mangas
    def index
        @mangas = Manga.all 
        json_response(@mangas)
    end

    # uri: /mangas/:id
    def show
        @manga = Manga.find(params[:id])
        json_response(@manga)
    end

    # uri: /manga/getByGenre
    def getByGenre
        @manga = Manga.where(genres: params[:genre])
        json_response(@manga)
    end

    # uri: /genres/list
    def getCategories
        @categories = Manga.collection.aggregate([
            { "$unwind" => "$genres" },
            {
                "$group" => {
                    "_id" => "$genres",
                    "num" => { "$sum" => 1 }
                }
            },
            { "$sort" => { "_id": 1 } }
        ])

        puts "user is #{@categories}"

        json_response(@categories)
    end
end
