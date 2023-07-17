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

    // Adds an element in top
    void push(const char *value)
    {
        size = size + 1;
        char *newValue = new char[strlen(value) + 1];
        strcpy(newValue, value);
        stack[size] = newValue;
    }

    // Removes the element in top
    void pop()
    {
        stack[size] = NULL;
        size = size - 1;
    }

    // Show the value in top
    const char *peek()
    {
        return stack[size];
    }
};

extern "C"
{
    Stack *createStack()
    {
        return new Stack();
    }

    void deleteStack(Stack *obj)
    {
        delete obj;
    }

    void push(Stack *obj, const char *value)
    {
        return obj->push(value);
    }

    void pop(Stack *obj)
    {
        obj->pop();
    }

    const char *peek(Stack *obj)
    {
        return obj->peek();
    }
}

// int main()
// {
//     Stack stackzin;

//     stackzin.push("uhu");
//     stackzin.push("valor");

//     cout << stackzin.peek() << endl; // show the last added element

//     stackzin.pop();

//     cout << stackzin.peek() << endl; // show the last added element

//     stackzin.push("bloft");

//     cout << stackzin.peek() << endl; // show the last added element

//     return 0;
// }