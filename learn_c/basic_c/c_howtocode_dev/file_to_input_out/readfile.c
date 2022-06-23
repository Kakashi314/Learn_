#include <stdio.h>
int main()
{
    FILE *MyFile;
    char string[10];
    MyFile = fopen("myfile.txt", "r+");
    /*
    file-type:
    r---only read
    w---only write make it new
    a---add in the end in file
    r+ ---read and write add in the 1st
    w+ ---read and write
    a+ ---
    */
    while (!feof(MyFile))
    {
        //feof -- end of file 
        // joto kon file a data takbe toto kon cholbe
        fscanf(MyFile, "%s", string);

        printf("%s ", &string);
    }
    fclose(MyFile);
    return 0;
}