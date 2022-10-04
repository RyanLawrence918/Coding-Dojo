package olympics_demo;

public class OlympicsTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		BasketballPlayer p1 = new BasketballPlayer("Lebron", 45.8);
		
		Swimmer s1 = new Swimmer("Michael", 47.7);
		
		p1.displayInfo();
		p1.shootBball();
		p1.displayInfo();
		
		s1.displayInfo();
		s1.butterflyEvent();
		s1.displayInfo();
	}

}