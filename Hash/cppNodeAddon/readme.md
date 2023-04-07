# compiling cpp

to compile your file type this

```bash
gcc -c -Wall -Werror -fpic hashTable.cpp
```

and this

```bash
gcc -shared -o hashTable.so hashTable.o
```
