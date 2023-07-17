var tree = {
    children: {
        children: {
            children: {
                children: {
                    children: {
                        "id": "12345678",
                        "type": "here"
                    },
                    "id": "1234567",
                    "type": "tp"
                },
                "id": "123456",
                "type": "tp"
            },
            "id": "12345",
            "type": "tp"
        },
        "id": "1234",
        "type": "tp"
    },
    "id": "123",
    "type": "tp"
};
var getIdOfFirstType = function (tree, type) {
    if (tree.type == type) {
        return tree.id;
    }
    if (!(tree === null || tree === void 0 ? void 0 : tree.children)) {
        return null;
    }
    return getIdOfFirstType(tree === null || tree === void 0 ? void 0 : tree.children, type);
};
var getAllIdsByType = function (tree, type, ids) {
    if (ids === void 0) { ids = []; }
    if (tree.type == type) {
        ids.push(tree.id);
    }
    if (!(tree === null || tree === void 0 ? void 0 : tree.children)) {
        return ids;
    }
    return getAllIdsByType(tree === null || tree === void 0 ? void 0 : tree.children, type, ids);
};
var getNodeById = function (tree, id) {
    if (tree.id == id) {
        return tree.children;
    }
    if (!(tree === null || tree === void 0 ? void 0 : tree.children)) {
        return null;
    }
    return getNodeById(tree === null || tree === void 0 ? void 0 : tree.children, id);
};
var firstIdOfType = getIdOfFirstType(tree, "here");
console.log(firstIdOfType);
var allIdsOfTypeTp = getAllIdsByType(tree, "tp");
console.log(allIdsOfTypeTp);
var firstNodeOfId = getNodeById(tree, "12345");
console.log(firstNodeOfId);
