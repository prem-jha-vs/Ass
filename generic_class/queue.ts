class Queue<T>{
    public cart:T[] = [];

    constructor(private size: number) {
    }
    enqueue(item: T): void{
        if (this.cart.length === this.size) {
            throw new Error('Queue overflow!');
        }
        this.cart.push(item);
    }
    dequeue(): T | undefined {
        if (this.cart.length == 0) {
            throw new Error('Queue is empty!');
        } else {
       return this.cart.shift();
        } 
    } 
    peek(): T | undefined{
        return this.cart[0];
    }
    isEmpty(): boolean{
        return this.cart.length===0;
    }
    isFull(): boolean {
        return this.cart.length === this.size;
    }
   
    print(): void{
        console.log(`Queue :  ${this.cart}`);
    }
}

const queue = new Queue<number>(5);

while (!queue.isFull()) {
    const n = randBetween(1, 10);
    console.log(`Enqueue ${n} into the queue.`)
    queue.enqueue(n);
}
console.log(`\n`);
queue.print();
console.log(`\n`);
while (!queue.isEmpty()) {
    const n = queue.dequeue();
    console.log(`Dequeue ${n} from the queue.`);
}

function randBetween(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.print();
// console.log(queue.peek());


    
    
    