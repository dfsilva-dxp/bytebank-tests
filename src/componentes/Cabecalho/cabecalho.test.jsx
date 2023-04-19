import { render, screen } from "@testing-library/react";
import Cabecalho from ".";

describe("Cabeçalho", () => {
  it("Deve renderizar o nome do user logado", () => {
    render(<Cabecalho />);

    const userName = screen.getByText("Joana Fonseca Gomes");

    expect(userName).toBeInTheDocument();
  });
});
