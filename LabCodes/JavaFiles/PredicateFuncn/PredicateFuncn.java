package PredicateFuncn;

import java.util.function.Predicate;

public class PredicateFuncn{

public static void main(String args[])
{
    // PredicateFuncn p=new PredicateFuncn();
     Predicate<String>checkLen=s->s.length()<8;
     System.out.println("Len is less than 8 "+checkLen.test("HelloWorld"));

     Predicate<Integer>oddEven=n->(n%2==0);
     System.out.println("Number is Even ? :: "+oddEven.test(45));
}

}
