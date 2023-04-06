#include <iostream>
#include <fstream>
#include "hashTable.cpp"

using namespace std;

int main()
{
    HashTable hashTable;
    while (true)
    {
        string option;
        string value;
        string key;
        cout << "Choose option, add, remove, get, exit" << endl;
        cin >> option;

        ofstream myfile;
        ifstream finput;

        finput.open("hashTableLog.txt");
        myfile.open("hashTableLog.txt", ios::app);

        if (option == "add")
        {
            cout << "Type the key " << endl;
            cin >> key;
            cout << "Type the value " << endl;
            cin >> value;

            hashTable.add(key, value);
            myfile << "Added: " << hashTable.keyToHash(key) << " " << value << endl;
        }
        if (option == "remove")
        {
            cout << "Type the key" << endl;
            cin >> key;

            hashTable.remove(key);

            myfile << "Removed: " << hashTable.keyToHash(key) << " " << endl;
        }
        if (option == "get")
        {
            cout << "Type the key" << endl;
            cin >> key;

            string value = hashTable.getValue(key);
            cout << value << endl;

            myfile << "Get key with value: " << hashTable.keyToHash(key) << " " << value << endl;
        }
        if (option == "exit")
        {
            finput.close();
            myfile.close();
            return false;
        }
    }
    return 0;
}
