export class NodeN<T>{
    static firstElement
    value: T
    link: object
    static count: number = 0;
    static deletedObjectOne: object
    static deletedObjectTwo: object
    static insertObjectOne: object
    static insertObjectTwo: object
    
    constructor(value?: T,numberX?:number){
    if ((numberX == undefined)||(numberX == NodeN.count)){
    if (NodeN.count === 0)
    {
        NodeN.firstElement = this
    this.value = value;
    NodeN.count++
    } else {
    let l = NodeN.firstElement
    this.value = value;
    for (let i = 0; i < NodeN.count; i++)
    {
    let z = this.fiendLink(l)
    l = z
    }
    NodeN.count ++
    
    }
    }else {
    this.value = value
    this.insert(this, numberX)
    NodeN.count ++
    }
    }
    
    fiendLink(obj:any):object{
    if (obj.link == undefined){
    obj.link = this
    return obj.link
    }
    else {
    return obj.link
    }
    
    }
    
    fiend(num:number){
    let l = NodeN.firstElement
    for (let i = 0; i < num-1; i++)
    {
    let z = this.fiendObj(l)
    l = z
    }
    console.log(l.value)
    
    }
    deleteObj(nunber:number){
    let l = NodeN.firstElement
    if (nunber == 1){
        NodeN.firstElement = NodeN.firstElement.link
        NodeN.count--
    } else if (nunber == NodeN.count-1){
    for (let i = 0; i < nunber; i++)
    {
    let z = this.fiendObj(l)
    l = z
    if (i == nunber - 1){
    let a = this.delete(l)
    }
    
    }
    NodeN.count --
    }else{
    for (let i = 0; i < nunber+2; i++)
    {
    if (i == nunber-2){
        NodeN.deletedObjectOne = l
    
    }
    let z = this.fiendObj(l)
    l = z
    if (i == nunber-1){
        NodeN.deletedObjectTwo = l
    }
    }
    let a = this.delete(NodeN.deletedObjectOne,NodeN.deletedObjectTwo)
    NodeN.count --
    }
    NodeN.count -- 
    }
    delete(obj:any,obj1?:object ){
    
    obj.link = obj1
    }
    
    fiendObj(obj:any):object{
    
    return obj.link

    
    }
    insert(obj:any,numberX:number){
    let l = NodeN.firstElement
    if (numberX == 0){
    obj.link = NodeN.firstElement
    NodeN.firstElement = obj
    } else{
    let l = NodeN.firstElement
    for (let i = 0; i < numberX+1; i++)
    {
    if (i == numberX-1){
        NodeN.insertObjectOne = l
    }
    if (i == numberX){
        NodeN.insertObjectTwo = l
    }
    let z = this.fiendObj(l)
    l = z
    }
    let a = this.insertObj(NodeN.insertObjectOne, obj, NodeN.insertObjectTwo)
    
    
    
    }
    }
    insertObj(objB:any,objIns:any,objAft:object){
    objB.link = objIns
    objIns.link = objAft
    }
    
    vievAllList(){
    let l = NodeN.firstElement
    for (let i = 0; i < NodeN.count-1; i++)
    {
    console.log(l.value)
    let z = this.fiendObj(l)
    l = z
    }
    NodeN.count--
    }
    }
