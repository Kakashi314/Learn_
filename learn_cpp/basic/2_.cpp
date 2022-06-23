#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
   int num;
    cin>>num;
     int *arr=new int[num];
    for (int i=0; i<num; i++) {
    cin>>arr[num-i-1];
    }
    for (int j=0; j<num; j++) {
    cout<<arr[j]<<endl;
    }
    return 0;
}
