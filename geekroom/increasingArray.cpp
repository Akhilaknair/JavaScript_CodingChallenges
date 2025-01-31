#include<iostream>
#include<vector>
using namespace std;
int main()
{
    int n;
    cin >>n;
    vector<int>arr(n);
    for(int i=0;i<n;i++)
{
    cin>>arr[i];
}
int j=1;
long long cnt=0;
while(j<n)
{
    if(arr[j]<arr[j-1])
    {
        cnt+=(arr[j-1]-arr[j]);
        arr[j]=arr[j-1];
    }
   
    j++;
}
cout<<cnt<<endl;
}