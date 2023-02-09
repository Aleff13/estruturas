# Hashs

Os incriveis hashs tables podem ser vistos como um super set de dicionarios, já que do ponto de vista são muito parecidos, divergindo apenas em pequenas partes

Um difencial dos hashtables é sua performance de busca, baseados em chaves únicas, podemos buscar um elemento por sua posição sem iterar por cada valor do dicionario :O

```
┌────────────┬──────────────────────────┐─────────────────┐
│ Nome/Chave │         em hash          │   Soma/valor    │
├────────────┼──────────────────────────┤─────────────────┤
│    key1    │   107 + 101 + 121 + 49   │      378        │
│    key2    │   107 + 101 + 121 + 50   │      379        │    --> posições
│    key3    │   107 + 101 + 121 + 51   │      380        │
│    key4    │   107 + 101 + 121 + 52   │      381        │
└────────────┴──────────────────────────┘─────────────────┘
```

Os valores do resultado serão usados como chave nas tabelas

Assim sua busca se torna muito mais rápida

Existem milhares de técnicas para criar hashs, se cairmos em hashs simples provavelmente teremos chaves dupicadas e teremos que partir para técnicas de listas ligadas

Visto isso podemos criar melhores funções de hashs:
http://web.archive.org/web/20071223173210/http://www.concentric.net/~Ttwang/tech/inthash.htm
