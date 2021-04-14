import {NodeN} from "./Node";
export class LinkedListN<T> {
    add(value:T){
         new NodeN<T>(value)
    }
    insert(value:T,numberX:number){
        new NodeN<T>(value, numberX)
    }
    delete(numberDel:number){
        let obj = new NodeN<T>()
        obj.deleteObj(numberDel)
    }
    vievAll(){
        let obj = new NodeN<T>()
        obj.vievAllList()
        console.log("-------------------------------------------------------")
    }
    vievOne(numberViev:number){
        let obj = new NodeN<T>()
        obj.fiend(numberViev)
        console.log("-------------------------------------------------------")
    }
}
    let t = new LinkedListN<String>()
    t.add("ffff")
    t.add("2231")
    t.insert("12",2)
    t.vievAll()
    t.delete(1)
    t.delete(1)
    t.vievAll()
    t.vievOne(1)
    

    