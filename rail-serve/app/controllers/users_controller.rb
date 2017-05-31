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

    # uri: /users(post) signup
    def create 
        @email = params.permit(:email)
        @existingUser = User.where(@email).first

        if @existingUser
            json_response({success: false, message: "Email is already used"}, 409)
        else 
            @user = User.new(params.permit(:email, :password))
            if @user.save 
                json_response({success: true, user: @user}, 201)
            else 
                json_response({success: false, message: "Error when saving new user"}, 501)
            end
       end 
    end
end
