class AddScoreToWhiskies < ActiveRecord::Migration
  def change
    add_column :whiskies, :score, :integer
  end
end
