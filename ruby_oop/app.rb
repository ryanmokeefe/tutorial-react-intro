require "pry"

# class User
#     def initialize(fname, lname)
#         @fname = fname
#         @lname = lname
#     end

#     def full_name
#         @fname + " " + @lname
#     end

#     def first_name=(new_name)
#         @fname = new_name
#     end

#     # duplicate
#     def set_name(new_name)
#         @fname = new_name
#     end

#     def get_name
#         @fname
#     end

#     def greet
#         puts "hi, my name is #{@name}"
#     end

# end

class User
    # GET instance attribute:
    attr_reader :fname
    # EDIT:
    attr_writer :fname
    # BOTH:
    attr_accessor :fname, :lname


    def initialize(fname, lname)
        @fname = fname
        @lname = lname
    end

    def full_name
        @fname + " " + @lname
    end

    def first_name=(new_name)
        @fname = new_name
    end

    def greet
        puts "hi, my name is #{@name}"
    end

end

me = User.new("Ryan, OKeefe")
me.first_name
me.greet

thing = User.new("The, Thing")
thing.first_name
me.greet

binding.pry

puts "end of file"

############

# ALI'S CODE:

require "pry"

class User
  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def full_name
    @firstname + " " + @lastname
  end
  def set_name(some_string)
    @name = some_string
  end

  def get_name
    @name
  end
  
  def greet
    puts "Hi my name is #{@name}"
  end
end

me = User.new "Ali", "Spittel"
puts me.full_name

you = User.new "Max", "Power"
puts you.full_name

binding.pry

puts "end of file"
