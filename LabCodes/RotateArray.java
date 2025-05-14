public class RotateArray
{


     public void rotate(int []nums,int k)
     {
          int n=nums.length;
          if(k>n)k=k%n;
          int res[]=new int[n];
          for(int i=0;i<k;i++)
          {
               res[i]=nums[n-k+i];

          }
          int j=0;
          for(int i=k;i<n;i++)
          {
               res[i]=nums[j];
               j++;
          }
          System.arraycopy(res, 0, nums, 0, n);
     }

public void rotate1(int []nums,int k)
{
     int n=nums.length;
     if(k>n)k=k%n;
     for(int i=0;i<k;i++)
     {
          for(int j=n-1;j>0;j--)
          {
                int temp=nums[j];
                nums[j]=nums[j-1];
                nums[j-1]=temp;
          }
     }
}



public void reverseFn(int []arr,int l,int r)
{
     while(l<r)
     {
         int t=arr[r];
         arr[r]=arr[l];
         arr[l]=t;
         l++;
         r--;
     }
}


public void rotate2(int[]nums,int k)
{
     int n=nums.length;
     int p=n-k;
     reverseFn(nums, 0, p-1);
     reverseFn(nums, p, n-1);
     reverseFn(nums, 0, n-1);
}


     public static void main(String args[])
     {
          int nums[]={1,2,3,4,5,6,7};
          int k=3;
          
          for(int n :nums)
          {
               System.out.println(n+" ");
          }
          System.out.println("After Rotan");
          RotateArray r=new RotateArray();
          r.rotate2(nums,k);
          for(int n :nums)
          {
               System.out.println(n+" ");
          }


     }
}