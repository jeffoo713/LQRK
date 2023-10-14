class AddRatingToLiquors < ActiveRecord::Migration[7.0]
  def change
    add_column :liquors, :rating, :float
  end
end
