class ChangeLiquorType < ActiveRecord::Migration[7.0]
  def change
    rename_column :liquors, :liquor_type, :liquor_type_temp
    remove_column :liquors, :liquor_type_temp

    add_column :liquors, :liquor_type, :integer
  end
end
