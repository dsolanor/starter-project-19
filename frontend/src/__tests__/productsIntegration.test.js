import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "../Root";
import App from "../App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("*/products", {
    status: 200,
    response: [
      {
        id: 0,
        name: "Test product 0",
        description: "Test description 0",
        price: 55.6
      },
      {
        id: 2,
        name: "Test product 2",
        description: "Test description 2",
        price: 55.6
      }
    ]
  });
});
afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of products and display them", done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  moxios.wait(() => {
    wrapped.update();
    console.log(wrapped.find("li").html());
    expect(wrapped.find("li").length).toEqual(2);
    done();
    wrapped.unmount();
  });
});
