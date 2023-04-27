import { mount } from "cypress/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders a button with the correct class name", () => {
    const className = "my-custom-class";
    mount(<Button className={className}>Click me</Button>);
    cy.get("button")
      .should("have.class", "bg-white")
      .and("have.class", "text-slate-900")
      .and("have.class", "font-bold")
      .and("have.class", "border-2")
      .and("have.class", "border-gray-200")
      .and("have.class", "py-4")
      .and("have.class", "px-8")
      .and("have.class", className);
  });

  it("triggers onClick when the button is clicked", () => {
    const onClick = cy.stub();
    mount(<Button onClick={onClick}>Click me</Button>);
    cy.get("button").click();
    expect(onClick).to.be.calledOnce;
  });
});
