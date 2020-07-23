#include<iostream> 
#include <bits/stdc++.h> 
#include<string> // for string class 
using namespace std;
int main(){
    int n;
    while(scanf("%d",&n) != EOF){
        int k=n;
        string name[n];
        while(k-->0) cin>>name[n-k-1];
        unordered_map<string, int> m;
        k=-1;
        while(++k<n) m[name[k]]=k;
        k=n;
        int res[n];
        while(k-->0){
            string nm;
            int ne;
            cin>>nm>>res[m[nm]]>>ne;
            //res[m[nm]]+=res[m[nm]]%ne;
            
            int h= (ne>0)?static_cast<int>(res[m[nm]]/ne):1;
            while(ne-->0){
                string x;
                cin >> x;
                cout<< h;
                res[m[x]]+=h;
                res[m[nm]]-=h;
            }
        }
        k=n;
        while(k-->0) cout<<name[n-k-1]<<" "<<res[m[name[n-k-1]]]<<endl;
        cout<<endl;


    }
}