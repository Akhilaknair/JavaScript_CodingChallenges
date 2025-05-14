import java.util.*;
import java.util.function.BiConsumer;

public class LambdaDemo{

     //   public void accept(Integer a , Integer b)
    //   {
    //       System.out.println(a+b);
    //   }

    //   public static void main(String args[])
    //   {
    //     LambdaDemo l=new LambdaDemo();
    //     l.accept(10,4);
    //   }

public static void main(String args[])
{
       BiConsumer<Integer,Integer>bc=(a,b)->System.out.println(a+b);
       bc.accept(5,9);


       //MyOwnFI m=()->System.out.println("How are You ?");
       MyOwnFI m=Test :: fn3;
       m.fn1();
    //   m.fn2();

}
  
}


class Test 
{
    public static void fn3()
    {
        System.out.println("My Function hello  !");
    }
}