#include <stdio.h>
#include <ctype.h>
int main()
{
    char x;
    x = getchar();
    putchar(toupper(x));
    printf("\n");
    putchar(tolower(x));

    return 0;
}