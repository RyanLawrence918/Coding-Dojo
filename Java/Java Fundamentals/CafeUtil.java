import java.util.ArrayList;
import java.util.Arrays;

public class CafeUtil {

    public int getStreakGoal(int numWeeks){
        int sum = 0;
        for ( int i = 0; i < numWeeks; i++){
            sum += sum;
        }
        return sum;
    }

    public double getOrderTotal(double[] lineItems){
        double total = 0;
        for (double items : lineItems ){
            total = items + total;
        }
        return total;
    }

    public void displayMenu(ArrayList<String> menuItems){
        for(int i = 0; i < menuItems.size(); i++){
            System.out.println(i + " "+ menuItems.get(i));
        }
    }

    public void addCustomer( ArrayList<String> customers){
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.printf("Hello, %s!%n", userName);
        System.out.printf("There are %s people in front of you", customers.size());
        customers.add(userName);
        for (int i = 0; i < customers.size(); i++){
            System.out.println(customers.get(i));
        }
    }
}