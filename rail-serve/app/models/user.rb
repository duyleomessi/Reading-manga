
class User
  include Mongoid::Document
  include ActiveModel::SecurePassword
  #include BCrypt

  field :email, type: String
  field :password_digest, type: String
  field :favorite, type: Array
  field :admin, type: Boolean, default: false
 
  has_secure_password

  # validation user
  validates_uniqueness_of :email, :message => "Email Address Already In Use. Have You Forgot Your Password?"

  
end
