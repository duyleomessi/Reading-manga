class CommentsController < ApplicationController
    def create
        @chapterId = params[:chapter_id]
        puts "chaperId ", @chaperId
        @comment = Comment.new(params.permit(:text))
        puts "@comment ", @comment
        json_response({chapterId: @chapterId, comment: @comment})
    end

end
