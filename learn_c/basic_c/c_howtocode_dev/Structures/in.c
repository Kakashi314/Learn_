#include <stdio.h>
int main()
{
    // struct book
    // {
    //     int no;
    //     char name;
    // };
    typedef struct
    {
        int no;
        char name;
    } book;
    book mybook;
    mybook.no = 2;
    mybook.name = 's';
    printf("Book No : %d\n", mybook.no);
    printf("Book Name : %c", mybook.name);

    return 0;
}
