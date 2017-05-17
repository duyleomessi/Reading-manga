class Manga
  include Mongoid::Document
  has_many :chapters
  has_many :comments

  field :title, type: String
  field :otherName, type: String
  field :cover, type: String
  field :author, type: Array
  field :artist, type: String
  field :genres, type: Array
  field :last_chapter, type: Integer
  field :status, type: String
  field :views, type: Integer
  field :rating, type: Integer
  field :description, type: String
end
