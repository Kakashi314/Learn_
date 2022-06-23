#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);
    for (int i = 1; i <= n; i++)
    {
        int num_arr;
        scanf("%d", &num_arr);
        int arr[num_arr];
        for (int j = 0; j < num_arr; j++)
        {
            scanf("%d", &arr[j]);
        }
        for (int k = 0; k < num_arr; k++)
        {
            printf("%d ", arr[k]);
        }
    }

    return 0;
}