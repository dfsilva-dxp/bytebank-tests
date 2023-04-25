import { calculaNovoSaldo } from ".";
describe("Rendimento", () => {
  it("Deve aumentar o saldo se a transação for Depósito", () => {
    const transaction = {
      transacao: "Depósito",
      valor: 50
    };

    const newBalance = calculaNovoSaldo(transaction, 100);

    expect(newBalance).toBe(150);
  });

  it("Deve subtrair o saldo se a transação for Transferência", () => {
    const transaction = {
      transacao: "Transferência",
      valor: 75
    };

    const newBalance = calculaNovoSaldo(transaction, 100);

    expect(newBalance).toBe(25);
  });
  it("Deve retornar o saldo + rendimento", () => {
    const calculateIncome = jest.fn((saldo) => saldo + saldo * 0.005);
    const balance = 100;

    const newBalance = calculateIncome(balance);

    expect(calculateIncome).toBeCalled();
    expect(calculateIncome).toHaveBeenCalledWith(balance);
    expect(newBalance).toBe(100.5);
  });
});
