class Comment
  include Mongoid::Document
  belongs_to :user

  field :discussion_id, type: String
  field :parent_id, type: String
  field :created_at, type: Time, default: Time.now()
  field :author, type: String
  field :text, type: String
end
