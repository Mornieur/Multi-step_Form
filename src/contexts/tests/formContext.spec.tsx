import React from "react";
import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "../FormContext";
import { BrowserRouter as Router } from "react-router-dom";

describe("FormProvider", () => {
  test("should render the children", () => {
    render(
      <FormProvider>
        <Router>
          <div>Test Child</div>
        </Router>
      </FormProvider>
    );
    const testChildElement = screen.getByText("Test Child");
    expect(testChildElement).toBeInTheDocument();
  });
});

describe("useForm", () => {
  test("should throw an error when used outside of FormProvider", () => {
    const useFormWrapper = () => useForm();
    expect(useFormWrapper).toThrow(
      "useForm precisa ser usado dentro do FormProvider"
    );
  });
});
