import java.util.*;

public class IsomorphicStrings {

       
    
        public boolean isoStr(String s,String t)
        {
               if(s.length() !=t.length())
               {
                return false;
               }

               if(s.length()==0 && t.length()==0)
               {
                return true;
               }

               HashMap<Character,Character>mp=new HashMap<Character,Character>();
               for(int i=0;i<s.length();i++)
               {
                        Character c1=s.charAt(i);
                        Character c2=t.charAt(i);



                       // already mapped, but to a different character
                        if(mp.containsKey(c1))
                        {
                            if(!mp.get(c1).equals(c2))
                            {
                                return false;
                            }
                        }
                        //not mapped yet but c2 used by other key
                        else if(mp.containsValue(c2))
                        {
                                return false;
                        }
                        // first appear
                        else

                        
                         {
                              mp.put(c1,c2);
                         }

               }   

               return true;

        }

       public static void main(String args[])
       {
            String s="add";
            String t="egg";
            System.out.println("Check isompsm");
            IsomorphicStrings is=new IsomorphicStrings();
            System.out.println(is.isoStr(s,t)); 


       }
}
