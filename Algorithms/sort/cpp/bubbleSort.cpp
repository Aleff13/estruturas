#include <stdio.h>
#include <iostream>
#include <typeinfo>

int *bubble(int list[], int);

int main()
{
    int list[] = {3, 2, 1, 5, 10, 6, 5, 2, 1};
    const int listLength = sizeof(list) / sizeof(int);

    int *sortedList = bubble(list, listLength);
    for (int i = 0; i < listLength; i++)
    {
        printf("%d\n", sortedList[i]);
    }
    return 0;
}

int *bubble(int *list, int listLength)
{
    for (int i = 0; i < listLength; i++)
    {
        for (int j = 0; j < listLength; j++)
        {
            if (list[j] > list[j + 1])
            {
                auto temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
    return list;
}