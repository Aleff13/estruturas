#include <iostream>
#include "unit.cpp"
#include "hashTable.cpp"

using namespace std;

int main()
{
    cout << "-------------- Testing the hash table class --------------" << endl;

    string key = "key";
    string yek = "yek";

    string kik = "kik";
    string kki = "kki";
    string ikk = "ikk";

    HashTable hash; // creating a new instance of HashTable

    hash.add(key, key);
    toEqual(hash.getValue(key), key, "Add new value"); // test add one value

    hash.add(key, "another value");
    toEqual(hash.getValue(key), key, "Dont overloading key"); // teste overloading value

    hash.remove(key);
    toEqual(hash.getValue(key), "", "Remove value"); // test remove value

    hash.add(key, "another value");
    toEqual(hash.getValue(key), "another value", "Add value in the removed value"); // test add value in previous removed value

    hash.add(kik, kik);
    hash.add(kki, kki);
    hash.add(ikk, ikk);
    toEqual(hash.getValue(kik), kik, "Anagram"); // test anagram
    toEqual(hash.getValue(kki), kki, "Anagram"); // test anagram
    toEqual(hash.getValue(ikk), ikk, "Anagram"); // test anagram

    cout << "-------------- Finished --------------" << endl;
    return 0;
}