import ToDo from "./ToDo.js";

describe("ToDO", () => {
    let todo;
    beforeEach(() => {
        todo = new ToDo();
    })
    it("starts empty", () => {
        expect(todo.getTodo()).toEqual([]);
    })
    it("add an item", () => {
        todo.add("milk");
        expect(todo.getTodo()).toEqual([{"id": 1, "name": "milk"}]);
    })
    it("remove item by id", () => {
        todo.add("milk");
        todo.add("egg");
        todo.remove(2);
        expect(todo.getTodo()).toEqual([{"id": 1, "name": "milk"}]);
    })
    it("update item by id", () => {
        todo.add("milk");
        todo.add("egg");
        todo.update(1, "sugar");
        expect(todo.getTodo()).toEqual([{"id": 1, "name": "sugar"}, {"id": 2, "name": "egg"}]);
    })
    it("try update an item by a non-existance id", () => {
        todo.add("milk");
        todo.add("egg");
        todo.update(3, "sugar");
        expect(todo.getTodo()).toEqual([{"id": 1, "name": "milk"}, {"id": 2, "name": "egg"}]);
    })
    it("clear list", () => {
        todo.add("milk");
        todo.add("egg");
        todo.clear();
        expect(todo.getTodo()).toEqual([]);
    })
})