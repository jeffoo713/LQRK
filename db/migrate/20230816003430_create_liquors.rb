class CreateLiquors < ActiveRecord::Migration[7.0]
  def change
    create_table :liquors do |t|
      t.integer :user_id, null: false, index: true
      t.string :name, null: false
      t.string :brand
      t.integer :year
      t.float :alcohol_percentage
      t.string :country
      t.string :liquor_type
      t.text :note

      t.timestamps
    end
  end
end
