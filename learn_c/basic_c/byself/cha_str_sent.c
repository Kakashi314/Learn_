#include <stdio.h>

int main(){
    // char ch[100];
    // scanf("%s",&ch);
    // printf("%s",ch);
    
    // one full line input
    char s[100];
    scanf("%[^n]%*c",s);
    printf("this is the text :%s",s);


    return 0;
}