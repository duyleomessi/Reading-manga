require 'bcrypt'

class User
  include Mongoid::Document
  include BCrypt

  field :email, type: String
  field :password_hash, type: String
  field :favorite, type: Array
  field :recentSeen, type: Array

  # validation user
  validates_presence_of :email, :message => "Email Address is Required."
  validates_uniqueness_of :email, :message => "Email Address Already In Use. Have You Forgot Your Password?"
  validates_format_of :email, :with => /^[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}$/i, :message => "Please Enter a Valid Email Address."
  validates_length_of :password, :minimum => 8, :message => "Password Must Be Longer Than 8 Characters."
  validates_confirmation_of :password, :message => "Password Confirmation Must Match Given Password."



  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end
  
end
