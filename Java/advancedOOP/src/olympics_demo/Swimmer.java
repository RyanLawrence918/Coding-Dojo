package olympics_demo;

public class Swimmer extends Olympian{
	//100m swim speed
	public double swimSpeed;
	
	
	public Swimmer(String firstName, double swimSpeed) {
		//if parent class has a parameter in its constructor, then we must super that parameter
		super(firstName);
		this.energyLevel = 300;
		this.swimSpeed = swimSpeed;
	}
	
	public void swim100meters() {
		this.energyLevel -= 25;
	}
	public void butterflyEvent() {
		this.energyLevel -= 50;
	}
	@Override
	public void displayInfo() {
		System.out.printf("Player name: %s \nEnergy Level: %s \nSwim Speed: %s ", this.firstName, this.energyLevel, this.swimSpeed);
	
	
		
	}

	public double getSwimSpeed() {
		return swimSpeed;
	}

	public void setSwimSpeed(double swimSpeed) {
		this.swimSpeed = swimSpeed;
	}
}