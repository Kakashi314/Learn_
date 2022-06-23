#include <stdio.h>

int main()
{
    int a, b, c, d;
    scanf("%d\n%d\n%d\n%d", &a, &b, &c, &d);
    // if (a>=80)
    // {
    //     printf("A+");
    // }else if(a<=40){
    //     printf("F");
    // }else{
    //     printf("pass");
    // }
    int ff;
    char gg;
    ff = a;
    for (int i = 1; i < 4; i++)
    {
        switch (i)
        {
        case 1:
            gg = b;
            break;
        case 2:
            gg = c;
            break;
        case 3:
            gg = d;
            break;
        }
        if(ff<gg){
            ff=gg;
        }
    }
    printf("%d",ff);

    return 0;
}