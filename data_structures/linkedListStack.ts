import { linkedList } from './linkedList.ts';

class linkedListStack<T> {
    private linkedList: linkedList<T> | null = null;
    private size: number = 0;

    constructor() {
        this.linkedList = new linkedList<T>();
    }

    push(value: T): void {
        this.linkedList?.append(value)
        this.size++;
    }

    pop(): void {
        this.linkedList?.removeLast();
        if (this.size > 0) this.size--;
    }

    peek(): T | undefined {
        return this.linkedList?.getTail();
    }

    getSize(): number {
        return this.size;
    }
}
