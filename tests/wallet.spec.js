/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import { Wallet } from "../bareed";

let wallet;

beforeEach(() => {
  wallet = new Wallet(10);
});

describe("new Wallet([x])", () => {
  test('"new Wallet()" creates a wallet instance with zero money', () => {
    wallet = new Wallet();
    expect(wallet.money).toBe(0);
  });

  test('"new Wallet(10)" creates a wallet instance with 10 money', () => {
    expect(wallet.money).toBe(10);
  });

  test("has a credit(amount) method that adds money to the wallet", () => {
    let amount = 5;
    wallet.credit(5);
    expect(wallet.money).toBe(15);
  });

  test("has a debit(amount) method that removes money from the wallet", () => {
    let amount = 5;
    wallet.debit(5);
    expect(wallet.money).toBe(5);
  });
});
