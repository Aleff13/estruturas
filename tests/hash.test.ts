import { describe, expect, test } from "@jest/globals";
import HashTable from "../Hash/HashTable";

test("Should put key, value in the hashTable", () => {
  const hash = new HashTable();
  const key = "teste";
  const value = "123";
  hash.put(key, value);

  expect(hash.get(key)?.value).toBe(value);
});
