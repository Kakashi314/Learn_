#include <stdio.h>
int main()
{
    int n, i, j, k, l;
    scanf("%d", &n);
    char star[n];

    for (i = n; i > 0; i--)
    {
        for (j = 0; j < i - 1; j++)
        {
            star[j] = ' ';
        }
        for (k = i - 1; k < n; k++)
        {
            star[k] = '*';
        }
        for (l = 0; l < n; l++)
        {
            printf("%c", star[l]);
        }

        printf("\n");
    }
    return 0;
}
