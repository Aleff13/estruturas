var loseloseHashCode = function (key) {
    var tableKey = key;
    var hash = 0;
    for (var i = 0; i < tableKey.length; i++) {
        console.log(tableKey[i], tableKey.charCodeAt(i));
        hash += tableKey.charCodeAt(i);
    }
    console.log(hash);
    return hash % 37;
};
loseloseHashCode("key1");
loseloseHashCode("key2");
loseloseHashCode("key3");
loseloseHashCode("key4");
// k 107
// e 101
// y 121
// 1 49
// k 107
// e 101
// y 121
// 2 50
// k 107
// e 101
// y 121
// 3 51
// k 107
// e 101
// y 121
// 4 52
