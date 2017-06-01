class CommentsController < ApplicationController
    before_action :authenticate_request!, only: :create

    def create
        @chapter = Chapter.find(params[:chapter_id])
        #puts "chapter", @chapter.inspect
        @content = params[:content]
        #puts "@comment ", @comment.inspect
        #puts "@current_user", @current_user.inspect
        @comment = @chapter.comments.create(content: @content, author: @current_user.email)
        json_response({comment: @comment, current_user: @current_user})
    end

    # /chapters/:chapter_id/comments
    def index
        @comments = Comment.where(chapter_id: params[:chapter_id]).order_by(:created_at => "desc")
        json_response(@comments, 200)
    end

end
