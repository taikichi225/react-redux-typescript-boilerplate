import * as React from 'react';
import * as enzyme from 'enzyme';
import todos, { Todo as TodoState, generateTodos, TodoActionType } from './Todo';

it("renders text when completed i true", () => {
    let state = [
        {id:0, text: "hello", completed: false}
    ];
    state = todos(state, {type: TodoActionType.ADD_TODO, id: 1, text: "goodbye"});
    expect(state).toEqual([
        {id: 0, text: "hello", completed: false},
        {id: 1, text: "goodbye", completed: false},
    ]);
});