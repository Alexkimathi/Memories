class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :image_url
      t.string :video_url
      t.string :description
      t.belongs_to :card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
