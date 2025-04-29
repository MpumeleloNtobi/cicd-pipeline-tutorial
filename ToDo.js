export default class ToDo {
    constructor() {
        this.todo = [];
        this.id = 1;
    }
    getTodo() {
        return this.todo;
    }
    add(name) {
        this.todo.push({"id": this.id, "name": name});
        this.id ++;
    }
    remove(id) {
        this.todo = this.todo.filter(item => item.id !== id);
    }
    update(id, name) {
        const item = this.todo.find(item => item.id === id);
        if (item) {
          item.name = name;
        }
    }
    clear() {
        this.todo = [];
    }
}