class CreateLogMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :log_messages do |t|
      t.integer :severity, default: 0
      t.string :label
      t.text :message

      t.timestamps
    end
  end
end
