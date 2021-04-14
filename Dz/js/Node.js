"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeN = void 0;
var NodeN = (function () {
    function NodeN(value, numberX) {
        if ((numberX == undefined) || (numberX == NodeN.count)) {
            if (NodeN.count === 0) {
                NodeN.firstElement = this;
                this.value = value;
                NodeN.count++;
            }
            else {
                var l = NodeN.firstElement;
                this.value = value;
                for (var i = 0; i < NodeN.count; i++) {
                    var z = this.fiendLink(l);
                    l = z;
                }
                NodeN.count++;
            }
        }
        else {
            this.value = value;
            this.insert(this, numberX);
            NodeN.count++;
        }
    }
    NodeN.prototype.fiendLink = function (obj) {
        if (obj.link == undefined) {
            obj.link = this;
            return obj.link;
        }
        else {
            return obj.link;
        }
    };
    NodeN.prototype.fiend = function (num) {
        var l = NodeN.firstElement;
        for (var i = 0; i < num - 1; i++) {
            var z = this.fiendObj(l);
            l = z;
        }
        console.log(l.value);
    };
    NodeN.prototype.deleteObj = function (nunber) {
        var l = NodeN.firstElement;
        if (nunber == 1) {
            NodeN.firstElement = NodeN.firstElement.link;
            NodeN.count--;
        }
        else if (nunber == NodeN.count - 1) {
            for (var i = 0; i < nunber; i++) {
                var z = this.fiendObj(l);
                l = z;
                if (i == nunber - 1) {
                    var a = this.delete(l);
                }
            }
            NodeN.count--;
        }
        else {
            for (var i = 0; i < nunber + 2; i++) {
                if (i == nunber - 2) {
                    NodeN.deletedObjectOne = l;
                }
                var z = this.fiendObj(l);
                l = z;
                if (i == nunber - 1) {
                    NodeN.deletedObjectTwo = l;
                }
            }
            var a = this.delete(NodeN.deletedObjectOne, NodeN.deletedObjectTwo);
            NodeN.count--;
        }
        NodeN.count--;
    };
    NodeN.prototype.delete = function (obj, obj1) {
        obj.link = obj1;
    };
    NodeN.prototype.fiendObj = function (obj) {
        return obj.link;
    };
    NodeN.prototype.insert = function (obj, numberX) {
        var l = NodeN.firstElement;
        if (numberX == 0) {
            obj.link = NodeN.firstElement;
            NodeN.firstElement = obj;
        }
        else {
            var l_1 = NodeN.firstElement;
            for (var i = 0; i < numberX + 1; i++) {
                if (i == numberX - 1) {
                    NodeN.insertObjectOne = l_1;
                }
                if (i == numberX) {
                    NodeN.insertObjectTwo = l_1;
                }
                var z = this.fiendObj(l_1);
                l_1 = z;
            }
            var a = this.insertObj(NodeN.insertObjectOne, obj, NodeN.insertObjectTwo);
        }
    };
    NodeN.prototype.insertObj = function (objB, objIns, objAft) {
        objB.link = objIns;
        objIns.link = objAft;
    };
    NodeN.prototype.vievAllList = function () {
        var l = NodeN.firstElement;
        for (var i = 0; i < NodeN.count - 1; i++) {
            console.log(l.value);
            var z = this.fiendObj(l);
            l = z;
        }
        NodeN.count--;
    };
    NodeN.count = 0;
    return NodeN;
}());
exports.NodeN = NodeN;
//# sourceMappingURL=Node.js.map