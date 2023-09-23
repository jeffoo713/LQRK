# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Clear all liquors before seeding...'
Liquor.destroy_all

brands = []
12.times.each { |_i| brands << Faker::Company.unique.name }

puts 'Start liquor data seeding...'
(1..3).each do |n|

  puts "Creating liquors for user_id #{n}"
  200.times.each do |_n|
    Liquor.create!(
      user_id: n,
      name: Faker::Beer.name,
      country: %w[Canada USA Germany France Italy Spain Korea Japan China Mexico Czech].sample,
      brand: brands.sample,
      year: rand(2017..2023),
      liquor_type: [0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 3, 4, 2].sample,
      alcohol_percentage: rand(4.8..9.4),
      rating: rand(0.5..4.2) + rand(0.0..0.5) + rand(0.0..0.5)
    )
  rescue StandardError
    next
  end
end

puts 'Liquor data seeding complete!'
