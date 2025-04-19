package PredicateFuncn;

import java.util.function.Predicate;

public class PredicateFuncn{

public static void main(String args[])
{
     Predicate<String>checkLen=s->s.length()<8;
     System.out.println("Len is less than 8 "+checkLen.test("HelloWorld"));

     Predicate<String>oddEvenStr=n->(n.length()%2==0);
     System.out.println("Len of str is Even ? :: "+oddEvenStr.test("java"));

     
     Predicate<Integer>oddEven=n->(n%2==0);
     System.out.println("Number is Even ? :: "+oddEven.test(45));

     //chaining
     System.out.println("After Chaing result is " +checkLen.and(oddEvenStr).test("javaTutorial"));

     System.out.println("Using OR funcn "+checkLen.or(oddEvenStr).test("JavaTutorial"));
     System.out.println("Using negate funcn "+checkLen.negate().test("JavaTutorial"));

}

}
