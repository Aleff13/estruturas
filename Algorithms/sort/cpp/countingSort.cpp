#include <stdio.h>
#include <iostream>
#include <typeinfo>
#include <vector>

std::vector<int> counting(int list[], int);

int main()
{
    int list[] = {3, 2, 1, 5, 10, 6, 5, 2, 1, 9, 7, 8};
    const int listLength = sizeof(list) / sizeof(int);

    auto sortedList = counting(list, listLength);
    for (int i = 0; i < listLength; i++)
    {
        printf("%d\n", sortedList[i]);
    }
    return 0;
}

std::vector<int> counting(int *list, int listLength)
{
    int aux[listLength] = {0};
    std::vector<int> result;
    for (int i = 0; i < listLength; i++)
    {
        aux[list[i]] += 1;
    }

    for (int i = 0; i < listLength; i++)
    {
        for (int j = 0; j < aux[i]; j++)
        {
            result.push_back(i);
        }
    }
    return result;
}