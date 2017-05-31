class Chapter
  include Mongoid::Document
  has_many :comments

  field :chapter, type: Integer
  field :manga, type: String
  field :views, type: Integer
  field :last_update, type: String 
  field :content, type: Array
end
