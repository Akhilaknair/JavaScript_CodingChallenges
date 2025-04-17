public class HandleDiamondPr implements Intf1 , Intf2
{

// which to override or use  ? 
     public void call1()
     {
           Intf2.super.call1();
           Intf1.super.call1();
     }



     public static void main(String args[])
     {
          HandleDiamondPr h=new HandleDiamondPr();
          h.call1();
     }
}