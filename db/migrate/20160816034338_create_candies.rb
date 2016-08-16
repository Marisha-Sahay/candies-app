class CreateCandies < ActiveRecord::Migration[5.0]
  def change
    create_table :candies do |t|
      t.string :name
      t.string :price
      t.date :expiry

      t.timestamps
    end
  end
end
