class ChangeFloatToDecimal < ActiveRecord::Migration[7.0]
  def change
    change_column :liquors, :rating, :decimal, precision: 2, scale: 1
    change_column :liquors, :alcohol_percentage, :decimal, precision: 3, scale: 1
  end
end
