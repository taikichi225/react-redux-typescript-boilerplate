import * as React from 'react';
import * as enzyme from 'enzyme';
import TodoList from '../TodoList';

it("render list when props are passed", () => {
    const dummyFunc = () => {};
    const Todos = [{
        id: 1,
        text: "test",
        completed: false
    }]
    const list = enzyme.shallow(<TodoList todos={Todos} onTodoClick={dummyFunc}/>)
    expect(list.find("ul").exists()).toBeTruthy();
    expect(list.find("ul").children.length).toBe(1);
});