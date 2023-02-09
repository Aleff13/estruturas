import Utils from "./util";
import ValuePair from "./util/value-pair";

class Dictionary {
  private table: { [key: string]: ValuePair<string, string> };

  constructor(
    private toStrFn: (key: string) => string = Utils.defaultToString
  ) {
    this.table = {};
  }

  set(key: string, value: string) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key: string): any {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  hasKey(key: string) {
    return this.table[this.toStrFn(key)] != null;
  }

  remove(key: string) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  values(): ValuePair<string, string>[] {
    return this.keyValues().map(
      (valuePair: ValuePair<K, V>) => valuePair.value
    );
  }

  keys(): string[] {
    return this.keyValues().map((valuePair: ValuePair<K, V>) => valuePair.key);
  }

  keyValues(): ValuePair<K, V>[] {
    return Object.values(this.table);
  }

  forEach(callbackFn: (key: string, value: string) => any) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return Object.keys(this.table).length;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

export default Dictionary;
