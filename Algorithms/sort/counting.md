# Counting sort

O algoritmo de counting sort é um dos mais simples

Consiste em duas listas, uma lista desordenada e uma lista com o mesmo tamanho da lista desordenada porem unicamente com valores zeros

É executado um loop na lista desordenada e feito uma contagem para cada elemento repetido na lista auxiliar, no fim do loop, a lista auxiliar irá conter em ordem a quantidade de elementos da lista desordenada, com base nisso executamos um segundo loop que itera pelos elementos da lista auxiliar ordenando a lista

[Neste loop executamos a criação da lista com zeros](https://github.com/Aleff13/estruturas/blob/master/Algorithms/sort/sort.ts#L91-L94)

[Neste loop contamos a quantidade de elementos repetidos e salvamos em ordem na lista auxiliar](https://github.com/Aleff13/estruturas/blob/master/Algorithms/sort/sort.ts#L96-L100)

[Neste loop montamos a lista de forma ordenada usando a lista auxiliar](https://github.com/Aleff13/estruturas/blob/master/Algorithms/sort/sort.ts#L102-L107)
