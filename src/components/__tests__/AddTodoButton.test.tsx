import * as React from 'react';
import * as enzyme from 'enzyme';
import AddTodoButton from '../AddTodoButton';

it("renders input", () => {
    let res: string;
    const dummyFunc = (s:string) => {};
    const wrapper = enzyme.shallow(<AddTodoButton onSubmit={dummyFunc} />);
    wrapper.setState({input: "hello"})
    expect(wrapper.find("button").text()).toEqual("Add Todo");
});