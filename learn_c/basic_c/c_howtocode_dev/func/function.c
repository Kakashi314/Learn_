#include<stdio.h>
int sq(int i);
int main()
{
    int i; 
    scanf("%d",&i);
    printf("%d",sq(i));
    return 0;
}
int sq(int i){
    return 2*i;
}