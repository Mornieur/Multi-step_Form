import { render } from "@testing-library/react";
import { Theme } from "..";
import { FormProvider } from "../../../contexts/FormContext";
import { BrowserRouter as Router } from "react-router-dom";

describe("Theme component", () => {
  const childrenMock = <div>Mocked Children</div>;

  it("renders children correctly", () => {
    const { getByText } = render(
      <FormProvider>
        <Router>
          <Theme>{childrenMock}</Theme>
        </Router>
      </FormProvider>
    );
    expect(getByText("Mocked Children")).toBeInTheDocument();
  });

  it("renders children correctly within FormProvider", () => {
    const { getByText } = render(
      <FormProvider>
        <Router>
          <Theme>
            <div>Child component</div>
          </Theme>
        </Router>
      </FormProvider>
    );
    expect(getByText("Child component")).toBeInTheDocument();
  });
});
