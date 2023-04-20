import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Formulario from ".";

describe("Form", () => {
  it("Deve renderizar um campo de input", () => {
    render(<Formulario />);

    const input = screen.getByPlaceholderText("Digite um valor");

    expect(input).toBeInTheDocument();
  });

  it("Deve renderizar um campo de input do tipo number", () => {
    render(<Formulario />);

    const input = screen.getByPlaceholderText("Digite um valor");

    expect(input).toHaveAttribute("type", "number");
  });

  it("Deve mudar o valor do campo quando um number for digitado", () => {
    render(<Formulario />);

    const input = screen.getByPlaceholderText("Digite um valor");

    userEvent.type(input, "50");

    expect(input).toHaveValue(50);
  });

  it("Deve chamar um evento de onSubmit ao clicar em realizar transação", () => {
    const realizarTransacao = jest.fn();

    render(<Formulario realizarTransacao={realizarTransacao} />);

    fireEvent.change(screen.getByTestId("select-opcoes"), {
      target: { value: "Depósito" }
    });

    fireEvent.change(screen.getByPlaceholderText("Digite um valor"), {
      target: { value: "100" }
    });

    fireEvent.click(screen.getByRole("button", { name: "Realizar transação" }));

    expect(realizarTransacao).toHaveBeenCalledTimes(1);
    expect(realizarTransacao).toHaveBeenCalledWith({
      transacao: "Depósito",
      valor: "100",
      data: "20/04/2023",
      mes: "Abril"
    });
  });
});
