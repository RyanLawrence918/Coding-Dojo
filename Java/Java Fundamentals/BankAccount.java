public class BankAccount {


    private double checkingBalance;
    private double savingsBalance;
    public static int numberofAccounts;
    public static double totalAmountOfMoney;


    public BankAccount(double checkingBalance, double savingsBalance) {
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        numberofAccounts++;
    }

    
    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public void depositChecking(double money) {
        checkingBalance += money;
    }

    public void withdrawChecking(double money) {
        if (money <= checkingBalance){
            checkingBalance -= money;
        }
        else {
            System.out.println("Insufficent funds");
        }
    }

    public double getTotalBalance() {
        return checkingBalance + savingsBalance;
    }
}
