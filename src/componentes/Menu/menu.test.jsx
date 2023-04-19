import { render, screen } from "@testing-library/react";

import Menu from ".";

describe("Menu", () => {
  it("Deve renderizar um link para a página inicial", () => {
    render(<Menu />);

    const linkToHome = screen.getByText("Inicial");

    expect(linkToHome).toBeInTheDocument();
  });

  it("Deve renderizar uma lista de links", () => {
    render(<Menu />);

    const listLinks = screen.getAllByRole("link");

    expect(listLinks).toHaveLength(4);
  });

  it("Não deve renderizar o link para extrato", () => {
    render(<Menu />);

    const link = screen.queryByRole("link", { name: "Extrato" });

    expect(link).not.toBeInTheDocument();
  });

  it("Deve renderizar uma lista de links com a classe link", () => {
    render(<Menu />);

    const links = screen.getAllByRole("link");

    links.forEach((link) => expect(link).toHaveClass("link"));

    expect(links).toMatchSnapshot();
  });
});
