# require 'bcrypt'

class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  #include BCrypt

  field :email, type: String
  field :password_digest, type: String
  field :favorite, type: Array
  field :admin, type: Boolean, default: false
  field :created_at, type: Time, default: Time.now()
 
  has_secure_password
  # def password
  #   @password ||= Password.new(password_hash)
  # end

  # def password=(new_password)
  #   @password = Password.create(new_password)
  #   self.password_hash = @password
  # end
  
end
