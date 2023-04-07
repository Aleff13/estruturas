#include <iostream>
#include <cstring>

using namespace std;

class Stack
{
public:
    static const long length = 100;
    char *stack[length];
    long size = 0;

    Stack()
    {
        for (int i = 0; i < length; i++)
        {
            stack[i] = NULL;
        }
    }

    void push(const char *value)
    {
        size = size + 1;
        char *newValue = new char[strlen(value) + 1];
        strcpy(newValue, value);
        stack[size] = newValue;
    }

    void pop()
    {
        stack[size] = NULL;
        size = size - 1;
    }

    const char *peek()
    {
        return stack[size];
    }
};

int main()
{
    Stack stackzin;

    stackzin.push("uhu");
    stackzin.push("valor");

    cout << stackzin.peek() << endl; // show the last added element

    stackzin.pop();

    cout << stackzin.peek() << endl; // show the last added element

    stackzin.push("bloft");

    cout << stackzin.peek() << endl; // show the last added element

    return 0;
}