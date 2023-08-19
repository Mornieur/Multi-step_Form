import { render } from "@testing-library/react";
import { Header } from "..";

test("renders header title", () => {
  const { getByText } = render(<Header />);
  const titleElement = getByText("Cadastro de Desenvolvedor");
  expect(titleElement).toBeInTheDocument();
});

test("renders header description", () => {
  const { getByText } = render(<Header />);
  const descriptionElement = getByText(
    "Faça seu cadastro na lista e receba seu emprego instantaneamente:"
  );
  expect(descriptionElement).toBeInTheDocument();
});
