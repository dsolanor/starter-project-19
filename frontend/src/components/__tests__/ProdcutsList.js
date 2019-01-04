import React from "react";
import { mount } from "enzyme";
import ProductsList from "../ProductsList";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <ProductsList />
    </Root>
  );
});
afterEach(() => {
  wrapped.unmount();
});

it("renders without crashing list", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<ProductsList />, div);
  // ReactDOM.unmountComponentAtNode(div);
});
