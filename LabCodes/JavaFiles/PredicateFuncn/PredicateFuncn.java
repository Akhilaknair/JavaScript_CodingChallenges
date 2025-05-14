package PredicateFuncn;

import java.util.function.Predicate;
import java.util.function.Function;
import java.util.function.Consumer;

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


     //using functions 
     Function<Integer,Integer>squareIt=i->(i*i);
     System.out.println("Square is "+squareIt.apply(6));


// functional chaining 
  Function<Integer,Integer>doubleit=v->(2*v);
  System.out.println("doubled value is "+doubleit.apply(3));


// functional chaining 
  Function<Integer,Integer>Cubeit=c->(c*c*c);
  System.out.println("cubedvalue is "+Cubeit.apply(3));

  System.out.println("and then : " + doubleit.andThen(Cubeit).apply(3));
  System.out.println("compose : " + doubleit.compose(Cubeit).apply(3));


       Consumer<Integer>SquareMe=i->System.out.println("Squared of Integer : "+i*i);
       SquareMe.accept(9);

       
       Consumer<Integer>DoubleMe=i->System.out.println("Double of Integer : "+2*i);
       DoubleMe.accept(9);


       // consumer funcn chaining 
       SquareMe.andThen(DoubleMe).accept(3);
       DoubleMe.andThen(SquareMe).accept(3);
       
}

}
