class AddInstagramIdToPhoto < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :instagram_id, :string
  end
end
