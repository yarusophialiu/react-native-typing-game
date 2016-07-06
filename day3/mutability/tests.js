"use strict";

describe("Adding to a list", function() {
  it("adds to a list", function() {
    const listBefore = [];
    const listAfter = [0];

    expect(addCounter(listBefore)).toEqual(listAfter);
  });
  it("adds to a list immutably", function() {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore);

    expect(addCounter(listBefore)).toEqual(listAfter);
  });
});
describe("Removing from a list", function() {
  it("removes from a list", function() {
    const listBefore = [10, 20, 30];
    const listAfter = [10, 30];

    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
  });
  it("removes from a list immutably", function() {
    const listBefore = [10, 20, 30];
    const listAfter = [10, 30];

    deepFreeze(listBefore);

    expect(removeCounter(listBefore, 1)).toEqual(listAfter);
  });
});
describe("Modifying inside a list", function() {
  it("increments a counter", function() {
    const listBefore = [10, 20, 30];
    const listAfter = [10, 21, 30];

    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
  });
  it("increments a counter immutably", function() {
    const listBefore = [10, 20, 30];
    const listAfter = [10, 21, 30];

    deepFreeze(listBefore);

    expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
  });
});
describe("Modifying inside an object", function() {
  it("modifies the object", function() {
    const todoBefore = {
      id: 0,
      text: "Buy milk",
      completed: false
    };
    const todoAfter = {
      id: 0,
      text: "Buy milk",
      completed: true
    };

    expect(toggleTodo(todoBefore, 1)).toEqual(todoAfter);
  });
  it("modifies the object immutably", function() {
    const todoBefore = {
      id: 0,
      text: "Buy milk",
      completed: false
    };
    const todoAfter = {
      id: 0,
      text: "Buy milk",
      completed: true
    };

    deepFreeze(todoBefore);

    expect(toggleTodo(todoBefore, 1)).toEqual(todoAfter);
  });
});
