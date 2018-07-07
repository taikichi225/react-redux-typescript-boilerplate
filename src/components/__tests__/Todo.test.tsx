import * as React from 'react';
import * as enzyme from 'enzyme';
import Todo from '../Todo';

it("renders text when completed is true", () => {
    const dummyFunc = () => {};
    const hello = enzyme.shallow(<Todo completed={true} text="hello" onClick={dummyFunc} />);

    expect(hello.find("li").text()).toEqual("hello");
    expect(hello.find("li").props().style.textDecoration).toEqual("line-through");
});

it("renders text when completed is false", () => {
    const dummyFunc = () => {};
    const hello = enzyme.shallow(<Todo completed={false} text="hello" onClick={dummyFunc} />);

    expect(hello.find("li").text()).toEqual("hello");
    expect(hello.find("li").props().style.textDecoration).toEqual("none");
});