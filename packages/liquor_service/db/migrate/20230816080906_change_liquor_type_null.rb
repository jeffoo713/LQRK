class ChangeLiquorTypeNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null :liquors, :liquor_type, false
  end
end
