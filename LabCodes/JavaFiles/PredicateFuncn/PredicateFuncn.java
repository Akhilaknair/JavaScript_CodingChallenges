package PredicateFuncn;

import java.util.function.Predicate;

public class PredicateFuncn{

public static void main(String args[])
{
    // PredicateFuncn p=new PredicateFuncn();
     Predicate<String>checkLen=s->s.length()<8;
     System.out.println("Len is less than 8 "+checkLen.test("HelloWorld"));
}

}
