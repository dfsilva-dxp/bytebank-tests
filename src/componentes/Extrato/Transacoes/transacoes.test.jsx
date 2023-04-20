import { render, screen } from "@testing-library/react";

import Transacoes from ".";
import estilos from "../Extrato.module.css";
describe("Transações", () => {
  it("Deve renderizar o mesmo componente com props atualizadas", () => {
    const transaction = {
      transacao: "Depósito",
      valor: 100
    };

    const { rerender } = render(
      <Transacoes estilos={estilos} transacao={transaction} />
    );

    const typeTransaction = screen.getByTestId("tipoTransacao");
    const amountTransaction = screen.getByTestId("valorTransacao");

    expect(typeTransaction).toHaveTextContent("Depósito");
    expect(amountTransaction).toHaveTextContent("R$ 100");

    const newTransaction = {
      transacao: "Transferência",
      valor: 50
    };

    rerender(<Transacoes estilos={estilos} transacao={newTransaction} />);

    const newTypeTransaction = screen.getByTestId("tipoTransacao");
    const newAmountTransaction = screen.getByTestId("valorTransacao");

    expect(newTypeTransaction).toHaveTextContent("Transferência");
    expect(newAmountTransaction).toHaveTextContent("- R$ 50");
  });
});
