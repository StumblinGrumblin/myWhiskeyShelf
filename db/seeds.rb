# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Whisky.delete_all
Whisky.create!(name: 'Ardbeg 10',
  score: 85,
  region:
    %{<p>
        Islay
      </p>
    },
  color:
    %{<p>
        Straw
      </p>
    },
  body:
    %{<p>
        Oily, some legs, mostly thin
      </p>
    },
  nose:
    %{<p>
        Strong malt, soft peat
      </p>
    },
  palatte:
    %{<p>
        Briney with a touch of liquorice
      </p>
    },
  finish:
    %{<p>
        Slow, sweet, smokey
      </p>
    },
  notes:
    %{<p>
        This expression is a fantastic and easy drinking Islay. It is easy to see why Ardbeg enjoys an almost cult following of enthusiests.
      </p>
    },
    image_url: '2_95385750_2.jpg',
    point_of_sale: 'Total Wines',
    price: 48.99,
    size: 750,
    abv: 46)

Whisky.create!(name: 'Laphroaig 10',
  score: 88,
  region:
    %{<p>
        Islay
      </p>
    },
  color:
    %{<p>
        Medium Amber
      </p>
    },
  body:
    %{<p>
        Medium body, no legs, not at all viscous
      </p>
    },
  nose:
    %{<p>
        Salt spray, drift wood, medicinal
      </p>
    },
  palatte:
    %{<p>
        Iodine, slight salt, smooth malt
      </p>
    },
  finish:
    %{<p>
        Slow, warm, smokey
      </p>
    },
  notes:
    %{<p>
        A little bit of water really opens up the bouquet. One of my favorite whiskies.
      </p>
    },
    image_url: '3_3697750_2.jpg',
    point_of_sale: 'Trader Joes',
    price: 32.99,
    size: 750,
    abv: 43)

Whisky.create!(name: 'Laphroaig Quarter Cask',
  score: 90,
  region:
    %{<p>
        Islay
      </p>
    },
  color:
    %{<p>
        Sunlit amber shade
      </p>
    },
  body:
    %{<p>
        Lightly viscous with slow legs.
      </p>
    },
  nose:
    %{<p>
        Salt spray, oak
      </p>
    },
  palatte:
    %{<p>
        Smokey, almond, iodine, briney
      </p>
    },
  finish:
    %{<p>
        Slow, soft wood, smokey
      </p>
    },
  notes:
    %{<p>
        A little bit of water really opens up the bouquet. Takes everything I like about Laphroaig 10 and kicks it up a notch.
      </p>
    },
    image_url: '2_103349750_2.jpg',
    point_of_sale: 'K&L Wines',
    price: 54.99,
    size: 750,
    abv: 48)

Whisky.create!(name: 'Lagavulin 16',
  score: 92,
  region:
    %{<p>
        Islay
      </p>
    },
  color:
    %{<p>
        Antique Copper
      </p>
    },
  body:
    %{<p>
        Medium, lots of slow legs
      </p>
    },
  nose:
    %{<p>
        Peat smoke, light tar, citrus, tangerine, faint maple
      </p>
    },
  palatte:
    %{<p>
        Sweet citrus, Smokey
      </p>
    },
  finish:
    %{<p>
        Long smooth finish
      </p>
    },
  notes:
    %{<p>
        One of the finest if Islay expressions being bottled today.
      </p>
    },
    image_url: '2_643750_2.jpg',
    point_of_sale: 'Costco',
    price: 68.99,
    size: 750,
    abv: 43)