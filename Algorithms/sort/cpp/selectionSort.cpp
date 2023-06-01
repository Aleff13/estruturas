#include <stdio.h>
#include <iostream>
#include <typeinfo>

int *selection(int list[], int listLength);

int main() {
    int list[] = {3, 2, 1, 5, 10, 6, 5, 2, 1};
    const int listLength = sizeof(list) / sizeof(int);

    int *sortedList = selection(list, listLength);
    for (int i = 0; i < listLength; i++)
    {
        printf("%d\n", sortedList[i]);
    }
    return 0;
}

int *selection(int list[], int listLength) {
    int swapPosition;

    for (int i = 0; i < listLength; i++) {
        swapPosition = i;

        for (int j = i + 1; j < listLength; j++) {
            bool needsSwap = list[j] < list[i];
            
            if (needsSwap) {
                swapPosition = j;
            }
        }

        bool isSwapPostionChanged = swapPosition != i;
        if (isSwapPostionChanged) {
            auto temp = list[i];
                list[i] = list[swapPosition];
                list[swapPosition] = temp;
        }
    }
    return list;
}
