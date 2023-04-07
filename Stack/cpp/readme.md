# compiling cpp

to compile your file type this

```bash
gcc -c -Wall -Werror -fpic stack.cpp
```

and this

```bash
gcc -shared -o stack.so stack.o
```
