# Similaridade por cosseno

Consiste em comparar o angulo entre dois vetores/arrays, quanto menor for angulo entre eles, mais similaridade eles possuem.

Para realizar essa função, calculamos o cosseno entre os dois vetores quanto mais tender a -1, menor é a similaridade, quanto mais próximo de 1, maior é a similaridade

* Similar -> 1
* Não similar -> -1

```
cos =  u . v
      |u| |v|
```

Se considermos apenas os números positivos inluindo o zero a similaridade é dada por

Onde -> = tendencia

* Similar -> 1
* Não similar -> 0
