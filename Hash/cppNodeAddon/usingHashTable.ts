import HashTable from "./hashTableTyped";

const hashTableObj = new HashTable();
const valueToPut = "value";

hashTableObj.put("key", valueToPut);
const savedValue = hashTableObj.get("key");
const keyHash = hashTableObj.keyToHash("key");

console.log({ keyHash });
console.log({ savedValue });
console.log({ valueToPut });

hashTableObj.destructor();
