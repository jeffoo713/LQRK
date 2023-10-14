class AddNameIndexToLiquor < ActiveRecord::Migration[7.0]
  def change
    add_index :liquors, :name
  end
end
