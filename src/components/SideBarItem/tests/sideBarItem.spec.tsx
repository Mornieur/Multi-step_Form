import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { SideBarItem } from "..";

test("renders SideBarItem component with correct props", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    icon: "profile",
    path: "/test-path",
    active: true,
  };

  render(
    <Router>
      <SideBarItem {...props} />
    </Router>
  );

  const titleElement = screen.getByText(/Test Title/);
  const descriptionElement = screen.getByText(/Test Description/);
  const profileIconElement = screen.getByTestId("profile-icon");

  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(profileIconElement).toBeInTheDocument();
});

test("renders SideBarItem component with correct icon based on props", () => {
  const props = {
    title: "Test Title",
    description: "Test Description",
    icon: "book",
    path: "/test-path",
    active: false,
  };

  render(
    <Router>
      <SideBarItem {...props} />
    </Router>
  );

  const bookIconElement = screen.getByTestId("book-icon");

  expect(bookIconElement).toBeInTheDocument();
});
