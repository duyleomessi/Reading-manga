class Comment
  include Mongoid::Document
  belongs_to :chapter

  field :created_at, type: Time, default: Time.now()
  field :author, type: String
  field :content, type: String
end
