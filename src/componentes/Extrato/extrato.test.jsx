import { render, screen } from "@testing-library/react";

import Extrato from ".";

describe("Extrato", () => {
  it("Deve renderizar uma lista de transações", () => {
    const transactions = [
      {
        transacao: "Depósito",
        valor: 100
      }
    ];
    render(<Extrato transacoes={transactions} />);

    const list = screen.getByRole("listitem");

    expect(list).toBeInTheDocument();
  });
});
