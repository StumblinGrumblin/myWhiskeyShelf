class ChangeAbvInMyTable < ActiveRecord::Migration
  def change
    change_column :whiskies, :abv, :integer
  end
end
