@FunctionalInterface
public interface MyOwnFI{

   //  void fn1();

     default void fndef()
     {
        System.out.println("Hello by default !");
     }

}