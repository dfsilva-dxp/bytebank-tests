import { render, screen } from "@testing-library/react";

import Saldo from ".";
describe("Saldo", () => {
  it("Deve renderizar o saldo formatado para o Real (BRL)", () => {
    const saldo = 1000;
    render(<Saldo saldo={saldo} />);

    expect(screen.getByTestId("saldo")).toHaveTextContent("R$ 1000");
  });
});
