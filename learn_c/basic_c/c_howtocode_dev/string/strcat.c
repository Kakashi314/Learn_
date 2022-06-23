#include <stdio.h>
#include <string.h>
int main(void)

{
    char str1[100] = "123", str2[] = "456";

    strcat(str1, str2);
//join 2 string
    puts(str1);
    puts(str2);

    return 0;
}