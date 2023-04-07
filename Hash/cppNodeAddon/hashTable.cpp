#include <iostream>
#include <cstring>

using namespace std;

class HashTable
{
public:
    static const long length = 1000;
    char *hashtable[length];

    // HashTable constructor
    HashTable()
    {
        for (int i = 0; i < length; i++)
        {
            hashtable[i] = NULL;
        }
    }

    // Add new element inside the hash table
    void put(const char *key, const char *value)
    {
        int hashKey = this->keyToHash(key);
        if (!this->hasKey(key))
        {
            char *newValue = new char[strlen(value) + 1];
            strcpy(newValue, value);
            hashtable[hashKey] = newValue;
        }
    }

    // Change the value of hashTable[key] to null
    void remove(const char *key)
    {
        int hashKey = this->keyToHash(key);
        if (this->hasKey(key))
        {
            // delete[] hashtable[hashKey];
            hashtable[hashKey] = NULL;
        }
    }

    // return bool for hashTable[key] has value
    bool hasKey(const char *key)
    {
        int hashKey = this->keyToHash(key);
        return (hashtable[hashKey] != NULL);
    }

    // return the value of hashTable[key]
    const char *get(const char *key)
    {
        int hashKey = this->keyToHash(key);
        if (hashtable[hashKey] == NULL)
        {
            return "";
        }
        return hashtable[hashKey];
    }

    // Convert the key to hash
    int keyToHash(const char *value)
    {
        int hash = 0;
        for (int i = 0; i < (int)strlen(value); i++)
        {
            hash = hash + int((char)value[i]) + (int)(i * 31) + int((char)value[i] * i);
        }
        hash = (int)(hash % length);
        return hash;
    }

    // Descructor
    ~HashTable()
    {
        for (int i = 0; i < length; i++)
        {
            if (hashtable[i] != NULL)
            {
                delete[] hashtable[i];
            }
        }
    }
};

extern "C"
{
    HashTable *createHashTable()
    {
        return new HashTable();
    }

    void deleteHashTable(HashTable *obj)
    {
        delete obj;
    }

    int keyToHash(HashTable *obj, const char *value)
    {
        return obj->keyToHash(value);
    }

    void put(HashTable *obj, const char *key, const char *value)
    {
        obj->put(key, value);
    }

    const char *get(HashTable *obj, const char *key)
    {
        return obj->get(key);
    }

    void removeKey(HashTable *obj, const char *key)
    {
        return obj->remove(key);
    }

    bool hasKey(HashTable *obj, const char *key)
    {
        return obj->hasKey(key);
    }
}
