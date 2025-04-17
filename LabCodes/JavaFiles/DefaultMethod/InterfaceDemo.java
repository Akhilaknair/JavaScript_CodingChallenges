public class InterfaceDemo implements MyInterface1
{

      public void defaultFuncn()
      {
        System.out.println("Its Overridden !");
      }


    public static void main (String args[])
    {
        InterfaceDemo i = new InterfaceDemo();
        i.defaultFuncn();
    }
}
