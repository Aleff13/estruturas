import Dictionary from "./Dictionary";

const dic = new Dictionary();
dic.set("alo", "ashaus");
dic.set("cache1", "ashaus");
dic.set("cache2", "ashaus");
console.log(dic.isEmpty());
console.log(dic.keys());
console.log(dic.values());
console.log(dic.keyValues());
console.log(dic.get("alo"));
