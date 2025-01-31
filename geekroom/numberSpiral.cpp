#include<iostream>
using namespace std;
long long myfn(int x ,int y)
{
    // mx=layer
    long long mx=max(x,y);
    ////all 4 logics 
     if(mx%2==0)
     {
          if(y==1)return mx*mx;
          else if(x<mx)return myfn(mx,mx)-mx+x;
          else if(x==mx)return (mx*mx)-y+1;
     }
     else{
           if(x==1)return mx*mx;
           else if (y<mx)return myfn(mx,mx)-mx+y ;// same row but diff colmn
           else if(y==mx)return (mx*mx)-x+1;//same col+
     }
}
int main()
{
    int t=0;
    cin>>t;
    while(t--)
    {
        long long x,y;
        cin>>x>>y;
        cout<<myfn(x,y)<<endl;
    }
}
