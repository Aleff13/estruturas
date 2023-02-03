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
  keys(): string[] | null;
  values(): string[] | null;
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
    this.table[this.toStrFn(key)] = value;
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
    return Object.keys(this.table).length ? true : false;
  }
  keys(): string[] | null {
    return Object.keys(this.table);
  }
  values(): string[] {
    const keys = Object.keys(this.table);
    let values: string[];

    keys.forEach((key) => {
      values.push(key);
    });

    return values;
  }
  keyValues(): any[] {
    throw new Error("Method not implemented.");
  }
  forEach(callBackFn: void): void {
    throw new Error("Method not implemented.");
  }
}

export default Dictionary;

const redisAbstraction = new Dictionary();

console.log(redisAbstraction.size());
console.log(redisAbstraction.isEmpty());
redisAbstraction.set("cache", "myStupidValue");
redisAbstraction.set("dois", "myStupidValue");
console.log(redisAbstraction.size());
console.log(redisAbstraction.isEmpty());

console.log(redisAbstraction.get("cache"));
console.log(redisAbstraction.keys());
