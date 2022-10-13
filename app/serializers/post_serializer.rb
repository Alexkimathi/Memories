class PostSerializer < ActiveModel::Serializer
  attributes :id,:name, :image_url,:video_url,:description, :card_id
  belongs_to :card
end
