export class Node2<T> {
    value: T;
    next: Node2<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

export class linkedList<T> {
    private head: Node2<T> | null = null;;
    private tail: Node2<T> | null = null;;
    private size: number = 0;

    //Insert at end of list
    append(value: T): void {
        const newNode = new Node2(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    //insert at beginning of list
    prepend(value: T): void {
        const newNode = new Node2(value);
        //if there is no head, then there is no list
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    removeFirst(): void {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        if (this.size > 0) this.size--;
    }

    removeLast(): void {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            this.size--;
            return;
        }

        let current = this.head;
        //loop until the node before the tail
        while (current.next && current.next !== this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
        if (this.size > 0) this.size--;
    }

    getSize(): number {
        return this.size;
    }

    //returns the value of the head node and not the node itself
    getHead(): T | undefined {
        return this.head?.value;
    }

    //returns the value of the tail node and not the node itself
    getTail(): T | undefined {
        return this.tail?.value;
    }
}
