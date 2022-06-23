#include <stdio.h>
int main()
{
    int num;
    scanf("%d", &num);
    for (int i = 1; i <= num; i++)
    {
        for (int j = num - i; j >= 0; j--)
        {
            printf(" ");
        }
        for (int k = 1; k <= 2 * i - 1; k++)
        {
            printf("*");
        }
        printf("\n");
        if (i == num)
        {
            int x = 2 * num + 1;
            for (int i = 1; i <= num+1; i++)
            {
                for (int j = 1; j <= i - 1; j++)
                {
                    printf(" ");
                }
                for (int k = 0; k < x - (2 * (i-1)); k++)
                {

                    printf("*");
                }
                printf("\n");
            }
        }
    }
    return 0;
}