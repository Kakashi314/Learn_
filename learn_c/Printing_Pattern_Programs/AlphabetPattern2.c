#include<stdio.h>
int main()
{
    int num;
    scanf("%d",&num);
    for (int i = num; i >=1; i--)
    {
        for (int j = 0; j<i; j++)
        {
            printf("%c",65+j);
        }
        printf("\n");
        
    }
    
    return 0;
}