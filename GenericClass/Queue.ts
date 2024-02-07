class Queue<T>{
    public cart:T[] = [];

    enqueue(item: T): void{
        this.cart.push(item);
    }
    dequeue(): T | undefined{
        return this.cart.shift();
    } 
    peek(): T | undefined{
        return this.cart[0];
    }
    isEmpty(): boolean{
        return this.cart.length===0;
    }
    size(): number{
        return this.cart.length;
    }
    print(): void{
        console.log(this.cart);
    }
}

const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log(queue.peek());
console.log(queue.size());
