require_relative "../models/dog"

describe Dog do
    before(:each) do 
    # subject(:dog) do
        @dog = Dog.new("Rover", 10)
        # puts "*" * 50
    end        

    describe "Constructor" do
    # describe "attributes of a dog" do
            
        it "has the class Dog" do
            expect(@dog).to be_a(Dog)
        end

        it "has a tring for a name" do 
            expect(@dog.name).to be_a(String)
        end

        it "has an Integer for hunger level" do
            expect(@dog.hunger_level).to be_a(Integer)      
        end
    end


    describe '#set_hunger_level' do
        context "if hunger level is below 0" do 
                it "should have new hunger level 0" do
                    @dog.set_hunger_level(-1)
                    expect(@dog.hunger_level).to be <= 0
                    
                end
            end
            context "if hunger level greater than or equal to 0" do
                it "should have new hunger level as passed" do
                    @dog.set_hunger_level(2)
                    expect(@dog.hunger_level).to be > 0
            end
        end
    end
    

end

