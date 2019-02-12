class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    add(data) {
        const node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    remove(data) {
        let prev = this.head;
        let cur = this.head;

        while (cur) {
            if (cur.data === data) {
                if (cur === this.head) {
                    this.head = this.head.next;
                } else if (cur === this.tail) {
                    this.tail = prev;
                } else {
                    prev.next = cur.next;
                }
                this.length--;
                break;
            } else {
                prev = cur;
            }
            cur = cur.next;
        }
    }
    insertAfter(data, element) {
        const node = new Node(data);
        let current = this.head;

        while (current) {
            if (current.data === element) {
                node.next = current.next;
                current.next = node;
                break;
            } else {
                current = current.next;
            }
        }
    }
    getList() {
        let current = this.head;
        let data = [];

        while (current) {
            data.push(current.data);
            current = current.next;
        }
        return data;
    }
}