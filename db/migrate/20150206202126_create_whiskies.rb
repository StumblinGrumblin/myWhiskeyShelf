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
      t.decimal :price, precision: 6, scale: 2
      t.integer :size, precision: 3
      t.decimal :abv, precision: 2, scale: 2

      t.timestamps
    end
  end
end