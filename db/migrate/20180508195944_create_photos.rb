class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.integer :thumbnail_size, default: 0
      t.string :description
      t.datetime :published_at

      t.timestamps
    end
  end
end
