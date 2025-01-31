#include<iostream>
#include <string>
using namespace std;
int main()
{
    string s;
    cin>>s;
    int i=1;
    int cnt=1;
    int maxi=0;
    while(i<s.length())
    {
        while(i<s.length() && s[i]==s[i-1])
        {
            cnt++;
            i++;
        }
        maxi=max(maxi,cnt);
        cnt=1;
        i++;
    }
    maxi=max(maxi,cnt);//for single length o/p
    cout<<maxi<<endl;
}