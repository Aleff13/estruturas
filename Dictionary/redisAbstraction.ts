import Dictionary from "./Dictionary";

const redisAbstraction = new Dictionary();

console.log(redisAbstraction.size());
console.log(redisAbstraction.isEmpty());
redisAbstraction.set("cache", "myStupidValue");
redisAbstraction.set("dois", "myStupidValue");
redisAbstraction.set("tres", "myStupidValue");

console.log(redisAbstraction.size());
console.log(redisAbstraction.isEmpty());

console.log(redisAbstraction.get("cache"));
console.log(redisAbstraction.keys());
console.log(redisAbstraction.values());
console.table(redisAbstraction.keyValues());
