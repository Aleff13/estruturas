import { describe, expect, test } from "@jest/globals";
import HashTable from "../Hash/HashTable";

test("Should put record in the hashTable", () => {
  const hash = new HashTable();

  const key = "teste";
  const value = "123";
  hash.put(key, value);

  expect(hash.get(key)?.value).toBe(value);
});

test("Should remove a record from the hashTable", () => {
  const hash = new HashTable();

  const key = "teste";
  const value = "123";
  hash.put(key, value);

  hash.remove(key);
  expect(hash.get(key)).toBe(undefined);
});
