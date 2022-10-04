package olympics_demo;

public class Olympian {
//olympian class that represents an olympian
	//member variables (english: attributes/characteristics)
	public String firstName;
	public int energyLevel;
	
	// in python it looks like this.. def __init__( self, firstName ):
		//self.firstName = firstName
	
	//constructor(){
	//this.firstName = firstName
//}
	
	
	// constructor for the olympian class
	public Olympian(String firstName) {
		this.firstName = firstName;
		this.energyLevel = 100;
	}
	public void displayInfo() {
		System.out.printf("Player name: %s \nEnergy Level: %s \n", this.firstName, this.energyLevel);
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public int getEnergyLevel() {
		return energyLevel;
	}
	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}
	
	
	
}