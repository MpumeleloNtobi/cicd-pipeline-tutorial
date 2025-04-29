export default class ToDo {
    constructor() {
        this.todo = [];
        this.nextID = 1;
    }
    getTodo() {
        return this.todo;
    }
    add(name) {
        this.todo.push(name);
    }
    remove(id) {
        this.todo.splice(id, 1);
    }
    update(id, name) {
        this.todo.splice(id, 1, name);
    }
    clear() {
        this.todo = [];
    }
}