interface Children {
    children?: Children
    id: string
    type: string
}

interface Tree {
    children?: Children
    id: string
    type: string
}

const tree = {
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
}

const getIdOfFirstType = (tree: Tree | Children, type: string): void | string | null => {
    if (tree.type == type) {
        return tree.id
    }
    
    if (!tree?.children) {
        return null
    }

    return getIdOfFirstType(tree?.children, type)
}

const getAllIdsByType = (tree: Tree | Children, type: string, ids: string[] = []): void | string[] | null => {
    if (tree.type == type) {
        ids.push(tree.id)
    }
    
    if (!tree?.children) {
        return ids
    }

    return getAllIdsByType(tree?.children, type, ids)
}

const getNodeById = (tree: Tree | Children, id: string): void | Children | null => {
    if (tree.id == id) {
        return tree.children
    }
    
    if (!tree?.children) {
        return null
    }

    return getNodeById(tree?.children, id)
}

const firstIdOfType = getIdOfFirstType(tree, "here")
console.log(firstIdOfType)

const allIdsOfTypeTp = getAllIdsByType(tree, "tp")
console.log(allIdsOfTypeTp)

const firstNodeOfId = getNodeById(tree, "12345")
console.log(firstNodeOfId)

