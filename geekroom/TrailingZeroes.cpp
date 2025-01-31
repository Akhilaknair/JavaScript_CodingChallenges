#include<iostream>
using namespace std;
int main()
{
      int n;
      cin>>n;
      int denom=5;
      int sum=0;
      while((n/denom) >0)
      {
          sum+=(n/denom);
          denom=denom*5; 
      }
      cout<<sum<<endl;
}