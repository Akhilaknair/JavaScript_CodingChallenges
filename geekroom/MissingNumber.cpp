#include <iostream>
#include<vector>
using namespace std;

int main()
{
	int n=0;
	cin>>n;
	vector<int>arr(n-1);
	for(int i=0;i<n-1;i++)
	{
		cin>>arr[i];
	}
	
	long long res=(static_cast<long long>(n)*(n+1))/2;//sirf n ko cast krna hotha h
	long long sum=0;
	for(int i=0;i<n-1;i++)
	{
		sum+=arr[i];
	}
	cout<<res-sum;
	return 0;
}
