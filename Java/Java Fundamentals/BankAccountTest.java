public class BankAccountTest {
    public static void main(String[] args){

        BankAccount account1 = new BankAccount(0, 0);
        System.out.println("Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Savings Balance: " + account1.getSavingsBalance());
        System.out.println("Deposit $69 into checking");
        account1.depositChecking(69);
        System.out.println("Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Withdraw $420 from checking");
        account1.withdrawChecking(420);
        System.out.println("Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Withdraw $33 from checking");
        account1.withdrawChecking(33);
        System.out.println("Checking Balance: " + account1.getCheckingBalance());
        System.out.println("Total Balance: " + account1.getTotalBalance());
    }
}