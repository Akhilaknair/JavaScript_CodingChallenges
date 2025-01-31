#include<iostream>
using namespace std;
#include<vector>
int main()
{
    long long n;
    cin>>n;
    vector<long long>v1,v2;
    long long s=((n)*(n+1))/2;
    if(s%2==0)
    {
            long long mid=s/2;

            for(int i=n;i>=1;i--)
            {
                if(i<=mid)
                {
                    v1.push_back(i);
                    mid=mid-i;
                }
                else{
                    v2.push_back(i);
                    
                }
            }
             int n1=v1.size();
             int n2=v2.size();
             cout<<"YES"<<endl;
            cout<<n1<<endl;
            for(long long i=0;i<n1;i++)
            {
                cout<<v1[i]<<" ";
            }
             cout<<endl;
            cout<<n2<<endl;
            for(long long i=0;i<n2;i++)
            {
                cout<<v2[i]<<" ";
                
            }
    }
    else{
        cout<<"NO"<<endl;
    }

}