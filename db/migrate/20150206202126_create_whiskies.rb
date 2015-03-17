class CreateWhiskies < ActiveRecord::Migration
  def change
    create_table :whiskies do |t|
      t.string :name
      t.string :region
      t.string :color
      t.string :body
      t.string :nose
      t.string :palatte
      t.string :finish
      t.string :notes
      t.string :image_url
      t.string :point_of_sale
      t.decimal :price,
      t.integer :size,
      t.decimal :abv,

      t.timestamps
    end
  end
end
