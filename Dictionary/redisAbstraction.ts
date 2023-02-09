import Dictionary from "./DictionaryV2";

class Redis extends Dictionary {
  GET(key: string) {
    return this.get(key);
  }
  SET(key: string, value: string, time: number) {
    if (!time) {
      return this.set(key, value);
    }
    throw new Error('Not implemented yet"');
  }

  FLUSHALL() {
    this.clear();
  }
}
