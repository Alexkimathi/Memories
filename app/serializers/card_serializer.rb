class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :image_url
  has_many :posts
  
end
