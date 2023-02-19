## Busca Hash

A busca hash é muito utilizada em hashs já indexados, pois sabendo a chave hash, sabemos exatamente onde o elemento estará dentro da tabela

No caso da implementação da classe HashTable, temos um método que retorna a posição do hash com base na key que queremos encontrar

```ts
  protected getPosition(key: string): number {
    return this.loseloseHashCode(key);
  }
```

Dada uma key, esse método cria um hashCode para essa key, ele pode se tornar muito útil, seja para setar o index que o valor irá ser salvo
ou para realizar uma busca utilizando essa key

Normalmente fariamos uma iteração elemento por elemento ou então uma busca binária, nesse caso basta chamar este método e saberemos exatemente o index da chave

![image](https://user-images.githubusercontent.com/83561751/219980854-70e2fa2a-dcf5-42bd-aacf-b3a2ddb66dee.png)
