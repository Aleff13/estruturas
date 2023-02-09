"use strict";
exports.__esModule = true;
var util_1 = require("../Dictionary/util");
var value_pair_1 = require("../Dictionary/util/value-pair");
/**
 * Essa classe representa uma abstração dos dicionários utilizando hashes
 */
var HashTable = /** @class */ (function () {
    function HashTable(toStrFn) {
        if (toStrFn === void 0) { toStrFn = util_1["default"].defaultToString; }
        this.toStrFn = toStrFn;
        this.table = {};
    }
    /**
     * Esse método insere um valor na tabela trasnformando a chave em um hash
     * @param key Chave do valor
     * @param value Valor a ser armazenada
     * @returns O hash gerado a partir da chave
     */
    HashTable.prototype.put = function (key, value) {
        var position = this.getPosition(key);
        this.table[position] = new value_pair_1["default"](key, value);
        return position;
    };
    /**
     * Remove o valor com base na chave passada
     * @param key Chave do valor que queremos remover
     * @returns um booleano indicando se removeu ou não
     */
    HashTable.prototype.remove = function (key) {
        var position = this.getPosition(key);
        if (this.table[position]) {
            delete this.table[position];
            return true;
        }
        return false;
    };
    /**
     * Busca o valor desejado
     * @param key Chave do valor que queremos buscar
     * @returns caso exista retorna um par de chave valor, caso não exista retorna undefined
     */
    HashTable.prototype.get = function (key) {
        var position = this.getPosition(key);
        if (!this.table[position]) {
            return undefined;
        }
        return this.table[position];
    };
    /**
     * Esse méotodo protegido retorna o hashCode com base em uma chave
     * @param key Chave da qual queremos busca a posição
     * @returns retorna um número
     */
    HashTable.prototype.getPosition = function (key) {
        return this.loseloseHashCode(key);
    };
    /**
     * Método privado responsável por gerar o hashCode
     * Seu funcionamento é simples, iteramos pelos caracteres da string, pegando cada charCode e fazendo uma soma
     * Para evitar numeros absurdamente grande nós pegamos o resto de sua divisão por um número arbitrario
     * @param key
     * @returns
     */
    HashTable.prototype.loseloseHashCode = function (key) {
        var tableKey = this.toStrFn(key);
        var hash = 0;
        for (var i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i);
        }
        return hash % 37;
    };
    HashTable.prototype.getHashs = function () {
        return Object.keys(this.table);
    };
    return HashTable;
}());
exports["default"] = HashTable;
