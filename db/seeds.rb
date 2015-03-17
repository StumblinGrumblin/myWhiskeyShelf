# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Whisky.delete_all
Whisky.create!(
  name: 'Ardbeg 10',
  score: 85,
  region: 'Islay',
  color: 'Straw',
  body: 'Oily, some legs, mostly thin',
  nose: 'Strong malt, soft peat',
  palatte: 'Briney with a touch of liquorice',
  finish: 'Slow, sweet, smokey',
  notes: 'This expression is a fantastic and easy drinking Islay. It is easy to see why Ardbeg enjoys an almost cult following of enthusiests.',
  image_url: '2_95385750_2.jpg',
  point_of_sale: 'Total Wines',
  price: 48.99,
  size: 750,
  abv: 46)

Whisky.create!(
  name: 'Laphroaig 10',
  score: 88,
  region: 'Islay',
  color: 'Medium Amber',
  body: 'Medium body, no legs, not at all viscous',
  nose: 'Salt spray, drift wood, medicinal',
  palatte: 'Iodine, slight salt, smooth malt',
  finish: 'Slow, warm, smokey',
  notes: 'A little bit of water really opens up the bouquet. One of my favorite whiskies.',
  image_url: '3_3697750_2.jpg',
  point_of_sale: 'Trader Joes',
  price: 32.99,
  size: 750,
  abv: 43)

Whisky.create!(
  name: 'Laphroaig Quarter Cask',
  score: 90,
  region:'Islay',
  color: 'Sunlit amber shade',
  body: 'Lightly viscous with slow legs.',
  nose: 'Salt spray, oak',
  palatte: 'Smokey, almond, iodine, briney',
  finish: 'Slow, soft wood, smokey',
  notes: 'A little bit of water really opens up the bouquet. Takes everything I like about Laphroaig 10 and kicks it up a notch.',
    image_url: '2_103349750_2.jpg',
    point_of_sale: 'K&L Wines',
    price: 54.99,
    size: 750,
    abv: 48)

Whisky.create!(name: 'Lagavulin 16',
  score: 92,
  region: 'Islay',
  color: 'Antique Copper',
  body: 'Medium, lots of slow legs',
  nose: 'Peat smoke, light tar, citrus, tangerine, faint maple',
  palatte: 'Sweet citrus, Smokey',
  finish: 'Long smooth finish',
  notes: 'One of the finest if Islay expressions being bottled today.',
    image_url: '2_643750_2.jpg',
    point_of_sale: 'Costco',
    price: 68.99,
    size: 750,
    abv: 43)

Whisky.create!(name: 'Balvenie Portwood 21',
  score: 92,
  region: 'Speyside',
  color: 'Dark Copper',
  body: 'Medium thick, lots of slow legs',
  nose: 'Faint maple, dark chocolate',
  palatte: 'Sweet, blackberry, honey',
  finish: 'Long smooth finish',
  notes: 'Delicious, a bit expensive for what you get.',
    image_url: 'default.jpg',
    point_of_sale: 'Total Wines',
    price: 150.99,
    size: 750,
    abv: 47)
