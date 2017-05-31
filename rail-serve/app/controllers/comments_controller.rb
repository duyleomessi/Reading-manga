class CommentsController < ApplicationController
    before_action :authenticate_request!

    def create
        @chapter = Chapter.find(params[:chapter_id])
        #puts "chapter", @chapter.inspect
        @content = params[:content]
        #puts "@comment ", @comment.inspect
        #puts "@current_user", @current_user.inspect
        @comment = @chapter.comments.create(content: @content, author: @current_user._id)
        json_response({comment: @comment, current_user: @current_user})
    end

end
