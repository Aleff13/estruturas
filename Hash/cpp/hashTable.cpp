
#include <iostream>

using namespace std;

static const int length = 10000; // This hash length

class HashTable
{
public:
    string hashtable[length] = {""};
    HashTable() {}

    void add(string key, string value)
    {
        int hashKey = this->keyToHash(key);
        if (!this->hasKey(hashKey))
        {
            hashtable[hashKey] = value;
        }
    }

    void remove(string key)
    {
        int hashKey = this->keyToHash(key);
        if (this->hasKey(hashKey))
        {
            hashtable[hashKey] = "";
        }
    }

    bool hasKey(int hashKey)
    {
        bool has = hashtable[hashKey] == "";
        return !has;
    }

    string getValue(string key)
    {
        int hashKey = this->keyToHash(key);
        return hashtable[hashKey];
    }

private:
    int keyToHash(string value)
    {
        int hash = 0;
        for (int i = 0; i < value.length(); i++)
        {
            hash = hash + int((char)value[i]) + (int)(i * 31) + int((char)value[i] * i);
        }
        hash = (int)(hash % length);
        return hash;
    }
};