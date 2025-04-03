class PriorityQueue{
    constructor(pqcb){
        this.heapArr = [];
        this.pqcb = pqcb;  
    }
    push(element){
        this.heapArr.push(element); 
        this.heapUp(this.heapArr.length - 1); 
    }
    pop(){
        if(this.heapArr.length === 0){
            throw new Error("The heap is empty"); 
        }
        let root = this.heapArr[0];
        this.heapArr[0] = this.heapArr[this.heapArr.length - 1];  
        this.heapArr.pop(); 
        if(this.heapArr.length > 0){
            this.heapDown(0); 
        }
        return root; 
    }
    empty(){return this.heapArr.length === 0}
    heapUp(index){
        while(index > 0){
            let parentIndex =Math.floor((index - 1)/2); 
            let leftIndex = 2 * parentIndex + 1; 
            let rightIndex = 2 * parentIndex + 2; 
            let smallestIndex = parentIndex; 
            if(leftIndex < this.heapArr.length && this.pqcb(this.heapArr[leftIndex]) >= this.pqcb(this.heapArr[smallestIndex])){
                smallestIndex = leftIndex; 
            }
            if(rightIndex < this.heapArr.length && this.pqcb(this.heapArr[rightIndex]) >= this.pqcb(this.heapArr[smallestIndex])){
                smallestIndex = rightIndex; 
            }
            if(smallestIndex === parentIndex){
                break; 
            }else{
                [this.heapArr[smallestIndex], this.heapArr[parentIndex]] = [this.heapArr[parentIndex], this.heapArr[smallestIndex]]; 
                index = parentIndex; 
            }
        }
    }
    heapDown(index){
        while(true){
            let leftIndex = 2 * index + 1; 
            let rightIndex = 2 * index + 2;
            let smallestIndex = index; 
            
            if(leftIndex < this.heapArr.length && this.pqcb(this.heapArr[leftIndex]) >= this.pqcb(this.heapArr[smallestIndex])){
                smallestIndex = leftIndex; 
            }
            if(rightIndex < this.heapArr.length && this.pqcb(this.heapArr[rightIndex]) >= this.pqcb(this.heapArr[smallestIndex])){
                smallestIndex = rightIndex; 
            }
            if(smallestIndex === index){
                break; 
            }else{
                [this.heapArr[smallestIndex], this.heapArr[index]] = [this.heapArr[index], this.heapArr[smallestIndex]]; 
                index = smallestIndex; 
            }
        }
    }
};
const priority = new Map([['/', 4], ['*', 4], ['+', 2], ['-', 2]]); 
const priorityCheckCb = (element)=>{
    if(!priority.has(element[0])){
        throw new Error(`invalid operand for element ${element}`); 
    }
    return priority.get(element[0]); 
}
export function infixExpression(str){
    if(str.length === 0 && Number.isNaN(str[0])){
        throw new Error("invalid expression"); 
    }else if(str.length === 1){
        return str; 
    }
    const heap = new PriorityQueue(priorityCheckCb); 
    for(let i = 0; i < str.length; i++){
        if(priority.has(str[i])){
            heap.push([str[i], i]); 
        }
    }
    let top = heap.pop(); 
    const currOps = top[0]; 
    const index = top[1]; 
    if(index - 1 < 0 || index + 1 >= str.length){
        throw new Error("invalid expression"); 
    }else if(priority.has(str[index - 1]) || priority.has(str[index + 1])){        
        throw new Error(`invalid expression two ops consecutively after one another`); 
    }
    let currRes = 0;
    switch(currOps){
        case "+" : {
            currRes = Number(str[index - 1]) + Number(str[index + 1])  
            break;
        }
        case "-" : {
            currRes = Number(str[index - 1]) - Number(str[index + 1]); 
            break;
        }
        case "*" : {
            currRes = Number(str[index - 1]) * Number(str[index + 1]); 
            break;
        }
        case "/" : {
            currRes = Number(str[index - 1] / Number(str[index + 1])); 
            break;
        }
    }
    str.splice(index - 1, 3, String(currRes)); 
    let res = infixExpression(str);
    return res; 
}
export const processExpressions = (str)=>{
    let newStr = str.replace(/\s/gim, ""); 
    let arr = []; 
    let currString = ""; 
    for(let i = 0; i < newStr.length; i++){
        if(!priority.has(newStr[i])){
            currString += newStr[i]; 
        }else if(currString.length > 0){
            arr.push(currString); 
            arr.push(newStr[i]); 
            currString = ""
        }else{
            arr.push(newStr[i]); 
        }
    }
    if(currString.length > 0){
        arr.push(currString); 
    }
    return arr;
}