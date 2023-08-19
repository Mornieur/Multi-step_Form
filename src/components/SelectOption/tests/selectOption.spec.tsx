import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SelectOption } from "..";

const selectedMock = true;
const selectedMockFalse = false;

describe("SelectOption", () => {
  test("renders the title and description correctly", () => {
    const title = "Test Title";
    const description = "Test Description";

    const { getByText } = render(
      <SelectOption
        title={title}
        description={description}
        selected={selectedMock}
      />
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  test("renders the icon correctly", () => {
    const icon = "Test Icon";
    const { getByText } = render(
      <SelectOption icon={icon} selected={selectedMock} />
    );

    expect(getByText(icon)).toBeInTheDocument();
  });

  test("calls the onClick function when clicked", () => {
    const onClick = jest.fn();
    const { container } = render(
      <SelectOption onClick={onClick} selected={selectedMock} />
    );

    fireEvent.click(container.firstChild as Element);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test("does not apply the selected class when selected is false", () => {
    const { container } = render(<SelectOption selected={selectedMockFalse} />);

    expect(container.firstChild).not.toHaveClass("selected");
  });
});
