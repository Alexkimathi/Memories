class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :image_url
      t.string :video_url
      t.string :description
      t.string :belongs_to
      t.string :card

      t.timestamps
    end
  end
end
