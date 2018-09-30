# # people = [
# #     { name: "Jack", age: 16 },
# #     { name: "Sam", age: 21 },
# #     { name: "Jill", age: 23 },
# #     { name: "Paul", age: 20 },
# #     { name: "Mike", age: 16 },
# #     { name: "Stan", age: 70 },
# #     { name: "Chris", age: 17 },
# #     { name: "Julie", age: 45 },
# #     { name: "Suzy", age: 65 },
# #     { name: "Eli", age: 28 },
# #     { name: "Katie", age: 50 },
# #     { name: "Ben", age: 33 }
# #   ]
# #   people_inside = []
# #   underage = []

# # #  while people_inside.length < 8
# # #     people_in_line.length.times do |i|
# # #         if i[:age] >= 18
# # #             people_in_club.push(i)
# # #         next
# # #         end
# # #     end
# # # end

# # people.each do |person|
# #     if person[:age] < 18
# #         underage.push(person)
# #     elsif person[:age] >= 18
# #         people_inside.push(person)
# #         if person[:age] >= 21
# #             person[:served] = true
# #         end
# #     break if people_inside.length == 8
# #     next
# #     end
# # end
# # puts people_inside
# # # puts 'UNDERAGE: ' + ${underage}
# # puts 'UNDERAGE: '
# # puts underage

# names = [ "Donald", "Daisy", "Huey", "Duey", "Luey" ]

# names.each do |person|
#     puts "Hello #{person}!"
# end

# # 

# numbers = [ 1, 3, 9, 11, 100 ]

# numbers.each do |num|
#     puts num * num
# end

# # Hint: C = (F - 32) * (5 / 9)
# puts "TEMPS: "
# fahr_temps = [ -128.6, 0, 32, 140, 212 ]

# fahr_temps.each do |temp|
#     temperature = (temp - 32.0) * (5.0/9.0)
#     puts temperature
# end

# # 

# artists = [ "Leonardo", "Donatello", "Raphael", "Michelangelo" ]
# ninja_turtles = []

# artists.each do |artist|
#     ninja_turtles.push(artist)
# end
# puts ninja_turtles

# # 

# flavors = [ "vanilla", "chocolate", "strawberry", "butter pecan", "cookies and cream", "rainbow" ]
# toppings = [ "gummi bears", "hot fudge", "butterscotch", "rainbow sprinkles", "chocolate sprinkles" ]

# flavor.each do |choice|
#     puts "COMBO: "
#     puts choice.product(toppings)
#     next
# end

## MAP:

# first_names = [ "Donald", "Daisy", "Daffy" ]

# first_names.map do |name|
#     puts "#{name} Duck"
# end

# # 

# numbers = [ 1, 3, 9, 11, 100 ]

# numbers.map do |num|
#     puts num * num
# end

# # 

# fahrenheit_temps = [ -128.6, 0, 32, 140, 212 ]

# fahrenheit_temps.map do |temp|
#     temperature = (temp - 32.0) * (5.0/9.0)
#     puts temperature 
# end

 arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
puts arr.reject { |i|  i % 3 == 0 } 
