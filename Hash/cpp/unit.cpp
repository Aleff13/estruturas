#include <iostream>

using namespace std;
void toEqual(string value1, string value2, string text)
{
    if (value1 == value2)
    {
        cout << text << " - PASSED" << endl;
        return;
    }
    cout << text << " - Failed" << endl;
}