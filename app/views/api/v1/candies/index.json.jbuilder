json.array! @candies.each do |candy|
  json.id candy.id
  json.name candy.name
  json.expiry candy.expiry
  json.price candy.price
end