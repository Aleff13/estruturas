import Errorfactory from "../Utils/ErrorMessagefactory";
import Utils from "./util";

interface DictionaryInterface {
  set(key: string, value: any): void;
  remove(key: string): void;
  hasKey(key: string): boolean;
  get(key: string): string | null;
  clear(): void;
  size(): number;
  isEmpty(): boolean;
  keys(): string[] | [];
  values(): string[] | [];
  keyValues(): any[] | null;
  forEach(callBackFn: void): void;
}

class Dictionary implements DictionaryInterface {
  private toStrFn: (item: any) => string;
  private table: { key: string; value: string } | {};

  constructor(toStrFn = Utils.defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  set(key: string, value: any): void {
    //early return
    if (this.hasKey(key)) {
      let msg = Errorfactory.alreadyExists(key);
      console.error(msg);
      return;
    }
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = this.toStrFn(value);
      return;
    }
    return;
  }
  remove(key: string): void {
    //early return
    if (!this.hasKey(key)) {
      let msg = Errorfactory.NotExists(key);
      console.error(msg);
      return;
    }
  }
  hasKey(key: string): boolean {
    return this.table[this.toStrFn(key)] != null;
  }
  get(key: string): string | null {
    //early return
    if (!this.hasKey(key)) {
      let msg = Errorfactory.NotExists(key);
      console.log(msg);
      return null;
    }
    return this.table[this.toStrFn(key)];
  }
  clear(): void {
    this.table = {};
  }
  size(): number {
    return Object.keys(this.table).length;
  }
  isEmpty(): boolean {
    return Object.keys(this.table).length ? false : true;
  }
  keys(): string[] | [] {
    //early return
    if (this.isEmpty()) {
      return [];
    }
    return this.keyValues().map((valuePair) => valuePair.key);
  }
  values(): string[] | [] {
    //early return
    if (this.isEmpty()) {
      return [];
    }
    const keys = Object.keys(this.table);
    let values = new Array();

    keys.forEach((key) => {
      values.push(this.table[this.toStrFn(key)]);
    });

    return values;
  }
  keyValues(): any[] {
    //early return
    if (this.isEmpty()) {
      return [];
    }
    const keys = Object.keys(this.table);
    let values = new Array();
    console.log({ keys });
    keys.forEach((key) => {
      let valuePair = `${key}, ${this.table[this.toStrFn(key)]}`;
      values.push(valuePair);
    });
    return values;
  }
  forEach(callBackFn: void): void {
    //iremos pegar todos os valores
    const valuePairs = this.keyValues();
    valuePairs.forEach((value) => {});
  }
}

export default Dictionary;
