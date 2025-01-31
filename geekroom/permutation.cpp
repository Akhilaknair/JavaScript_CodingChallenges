#include<iostream>
using namespace std;
void myfn(long long n)
{
    //base case************
    if(n==1){cout<<1<<endl;return;}
    if(n==2 || n==3){cout<< "NO SOLUTION";return;}
   
        long long i=1;
        string str="";
        for( i=1;i<=n;i++)
        {
         if(i%2==0)
          {
            cout<<i<<" ";
          }
          else{
            //**************** */
            str+=to_string(i)+" ";///if u dont use += it will give error
          }
            
        }
        //***** */
        cout<<str<<endl;
    
}
int main()
{
    long long n;
    cin>>n;
    myfn(n);
}