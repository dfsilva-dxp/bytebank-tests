describe("Rendimento", () => {
  it("Deve retornar o saldo + rendimento", () => {
    const calculateIncome = jest.fn((saldo) => saldo + saldo * 0.005);
    const balance = 100;

    const newBalance = calculateIncome(balance);

    expect(calculateIncome).toBeCalled();
    expect(calculateIncome).toHaveBeenCalledWith(balance);
    expect(newBalance).toBe(100.5);
  });
});
