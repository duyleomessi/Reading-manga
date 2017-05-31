class Chapter
  include Mongoid::Document
  belongs_to :manga

  field :chapter, type: Integer
  field :manga, type: String
  field :views, type: Integer
  field :laste_update, type: Time, default: Time.now()
  field :content, type: Array
end
