"use strict";

// INLINE EXERCISE: Mutability
//
// Open up index.html in your browser if you haven't already to run the
// tests.
//
// Each of the functions below (called by the tests) makes a fairly
// simple change to a list or an Object, but it does by mutating the
// object that's passed in. Rewrite each to work without mutating this
// object.

function addCounter(list) {
  list.push(0);
  return list;
}

function removeCounter(list, index) {
  list.splice(index, 1);
  return list;
}

function incrementCounter(list, index) {
  list[index]++;
  return list;
}

function toggleTodo(todo) {
  todo.completed = !todo.completed;
  return todo;
}
