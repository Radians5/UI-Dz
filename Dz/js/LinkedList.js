"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListN = void 0;
var Node_1 = require("./Node");
var LinkedListN = (function () {
    function LinkedListN() {
    }
    LinkedListN.prototype.add = function (value) {
        new Node_1.NodeN(value);
    };
    LinkedListN.prototype.insert = function (value, numberX) {
        new Node_1.NodeN(value, numberX);
    };
    LinkedListN.prototype.delete = function (numberDel) {
        var obj = new Node_1.NodeN();
        obj.deleteObj(numberDel);
    };
    LinkedListN.prototype.vievAll = function () {
        var obj = new Node_1.NodeN();
        obj.vievAllList();
        console.log("-------------------------------------------------------");
    };
    LinkedListN.prototype.vievOne = function (numberViev) {
        var obj = new Node_1.NodeN();
        obj.fiend(numberViev);
        console.log("-------------------------------------------------------");
    };
    return LinkedListN;
}());
exports.LinkedListN = LinkedListN;
var t = new LinkedListN();
t.add("ffff");
t.add("2231");
t.insert("12", 2);
t.vievAll();
t.delete(1);
t.delete(1);
t.vievAll();
t.vievOne(1);
//# sourceMappingURL=LinkedList.js.map