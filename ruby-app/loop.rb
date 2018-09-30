# EACH:

# users = ["Alice", "Bob", "Carol"]
# users.each do |user|
#   puts user
# end


#  WHILE:

# input = ""
# puts "You must guess the Magic Words to exit the while loop!"
# while input != "Magic Words" do
#   puts "What are the Magic Words?"
#   input = gets.chomp
# end
# puts "You made it out! Congrats!"


# UNTIL:

# input = ""
# puts "You must guess the Magic Words to exit the until loop!"
# until input == "Magic Words" do
#   puts "What are the Magic Words?"
#   input = gets.chomp
# end
# puts "You made it out! Congrats!"

# LOOP:

# puts "You must guess the Magic Words to exit the loop!"
# loop do
#   puts "What are the Magic Words?"
#   input = gets.chomp
#   break if input == "Magic Words"
# end
# puts "You made it out! Congrats!"

# .TIMES:

# users = ["Alice", "Bob", "Carol"]
# users.length.times do |index|
#   puts users[index]  
# end

# skip even numbers:

10.times do |i|
    if i % 2 == 0
      next
    end
    puts i
  end
