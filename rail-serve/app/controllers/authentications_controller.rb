class AuthenticationsController < ApplicationController
    # /login
    def create
        @email = params.permit(:email)
        @user = User.where(@email).first

        if @user && @user.authenticate(params[:password])
            auth_token = JsonWebToken.encode({user_id: @user._id})
            json_response({success: true, auth_token: auth_token}, 200)
        else 
            json_response({success: false}, 401)
        end
    end
end
