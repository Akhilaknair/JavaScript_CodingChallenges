
import java.util.Date;
import java.util.function.BiFunction;
import java.util.function.BiPredicate;
import java.util.function.Supplier;
public class Supplier_Demo {

    public static void main(String args[])
    {
        //supplier
           Supplier<Date>curr=()->new Date();
           System.out.println(curr.get());
    
    //bipredicate & bifuncn
    BiPredicate<Integer,Integer>checksum=(a,b)->a+b>=6;
    System.out.println(checksum.test(3,2));

    BiFunction<Integer,Integer,Integer>SumIt=(c,d)->c+d;
    System.out.println(SumIt.apply(3,2));


    
    
        }
    
}
