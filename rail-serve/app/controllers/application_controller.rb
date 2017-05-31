class ApplicationController < ActionController::API
    include Response
    
    require 'jsonwebtoken'

    protected
    # Validates the token and user and sets the @current_user scope
    def authenticate_request!
        if !payload || !JsonWebToken.valid_payload(payload.first)
            return invalid_authentication
        end

        load_current_user!
        invalid_authentication unless @current_user
    end

    # Returns 401 response. To handle malformed / invalid requests.
    def invalid_authentication
        render json: {error: 'Invalid Request'}, status: :unauthorized
    end

    private
    # Deconstructs the Authorization header and decodes the JWT token.
    def payload
        puts "trigger payload"
        auth_header = request.headers['Authorization']
        puts "auth_header", auth_header.inspect
        token = auth_header.split(' ').last
        puts "token", token.inspect
        JsonWebToken.decode(token)
    rescue
        nil
    end

    # Sets the @current_user with the user_id from payload
    def load_current_user!
        @current_user = User.find(payload[0]['user_id'])
        puts "current_user", @current_user.inspect
    end
end
