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
        expect(todo.getTodo()).toEqual(["milk"]);
    })
    it("remove item at an index", () => {
        todo.add("milk");
        todo.add("egg");
        todo.remove(1);
        expect(todo.getTodo()).toEqual(["milk"]);
    })
    it("update item at an index", () => {
        todo.add("milk");
        todo.add("egg");
        todo.update(0, "sugar");
        expect(todo.getTodo()).toEqual(["sugar", "egg"]);
    })
    it("clear list", () => {
        todo.add("milk");
        todo.add("egg");
        todo.clear();
        expect(todo.getTodo()).toEqual([]);
    })
})