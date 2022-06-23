#include<stdio.h>
int main()
{
    int a[3][3]={1,2,3,4,5,6,7,8,9};
    int *p;
    p=&a[0][0];
    // p=a[0];
    // p=*a;
    // p=&a;
    printf("%d",p);
    return 0;
}