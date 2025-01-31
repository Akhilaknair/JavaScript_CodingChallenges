#include<iostream>
using namespace std;
#define mod ((int)1e9+7)
int main()
{
     int n;
     cin>>n;
     int res=1;
     for(int i=1;i<=n;i++)
     {
        res=res*2;
        if(res>mod)
        {
            res%=mod;
        }
     }
  cout<<res<<endl;
}
