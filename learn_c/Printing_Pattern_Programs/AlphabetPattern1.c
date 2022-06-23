#include<stdio.h>
int main()
{
    
// ABCDE
// ABCD
// ABC
// AB
// A
    int num;
    scanf("%d",&num);
    for (int i = 1; i <=num; i++)
    {
        for (int j = 1; j <=i; j++)
        {
             printf("%c",64+j);
        }
        
        printf("\n");
    }
   
    return 0;
}
