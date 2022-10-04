import javax.swing.JSpinner.NumberEditor;

public class Application {
    
    public static void main(String args[] ){
        int numerator = 3;
        int denominator = 4;
        Fraction fraction1 = new Fraction(numerator, denominator);
        System.out.println(fraction1);
        System.out.println();
    }


}
