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
        
        @existingUser = User.where(email: @email)

        if @existingUser.length != 0
            json_response({success: false, message: "Email is existing"})
        else 
            @user = User.new(params.permit(:email, :password))
            if @user.save 
                json_response({success: true, user: @user})
            else 
                json_response({success: false, message: "Error when saving new user"})
            end
       end 
    end
end
