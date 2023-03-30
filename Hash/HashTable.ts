import Utils from "../Dictionary/util";
import ValuePair from "../Dictionary/util/value-pair";

interface HashTableInterface {
  put(key: string, value: string): number;
  remove(key: string): boolean;
  get(key: string): ValuePair<string, string> | undefined;
}

/**
 * Essa classe representa uma abstração dos dicionários utilizando hashes
 */
class HashTable implements HashTableInterface {
  private table: { [key: string]: ValuePair<string, string> };
  private toStrFn: (item: any) => string;

  constructor(toStrFn = Utils.defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  /**
   * Esse método insere um valor na tabela transformando a chave em um hash
   * @param key Chave do valor
   * @param value Valor a ser armazenada
   * @returns O hash gerado a partir da chave
   */
  public put(key: string, value: string): number {
    const position = this.getPosition(key);
    this.table[position] = new ValuePair(key, value);
    return position;
  }

  /**
   * Remove o valor com base na chave passada
   * @param key Chave do valor que queremos remover
   * @returns um booleano indicando se removeu ou não
   */
  public remove(key: string): boolean {
    const position = this.getPosition(key);
    if (this.table[position]) {
      delete this.table[position];
      return true;
    }
    return false;
  }

  /**
   * Busca o valor desejado
   * @param key Chave do valor que queremos buscar
   * @returns caso exista retorna um par de chave valor, caso não exista retorna undefined
   */
  public get(key: string): ValuePair<string, string> | undefined {
    const position = this.getPosition(key);
    if (!this.table[position]) {
      return undefined;
    }
    return this.table[position];
  }

  /**
   * Esse método protegido retorna o hashCode com base em uma chave
   * @param key Chave da qual queremos busca a posição
   * @returns retorna um número
   */
  protected getPosition(key: string): number {
    return this.loseloseHashCode(key);
  }

  /**
   * Método privado responsável por gerar o hashCode
   * Seu funcionamento é simples, iteramos pelos caracteres da string, pegando cada charCode e fazendo uma soma
   * Para evitar numeros absurdamente grande nós pegamos o resto de sua divisão por um número arbitrario
   * @param key
   * @returns
   */
  private loseloseHashCode(key: string): number {
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  public getHashs() {
    return Object.keys(this.table);
  }
}

export default HashTable;
