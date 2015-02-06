json.array!(@whiskies) do |whisky|
  json.extract! whisky, :id, :name, :region, :color, :body, :nose, :palatte, :finish, :notes, :image_url, :point_of_sale, :price, :size, :abv
  json.url whisky_url(whisky, format: :json)
end
