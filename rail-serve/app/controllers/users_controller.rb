class UsersController < ApplicationController
    # uri: /users
    def index 
        @users = User.all
        json_response(@users)
    end

    # uri: /users/:id
    def show
        @user = User.find(params[:id])
        json_response(@user)
    end

    # uri: /users(post)
    def create 
        @user = User.new(params.permit(:email, :password))

        puts "user is #{@user}"

        if @user.save 
            json_response({success: true})
        else 
            json_response({success: false})
        end
    end
end
