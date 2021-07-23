/**************************
 *
 * THIS IS A TESTING FILE
 *
 * DO NOT MODIFY THIS FILE
 *
 ***************************/

import { Vendor, Customer, Person, Point, Wallet } from "../bareed";

let customer;

beforeEach(() => {
  customer = new Customer("Asis", 4, 3);
});

describe("new Customer('Aziz', 4, 3)", () => {
  test("is a subclass of Person", () => {
    expect(customer instanceof Person).toBe(true);
  });

  test("inherits name, location and wallet from Person", () => {
    let expectedLocation = new Point(4, 3);
    expect(customer.name).toBe("Asis");
    expect(customer.location.equals(expectedLocation)).toBe(true);
    expect(customer.location instanceof Point).toBe(true);
    expect(customer.wallet instanceof Wallet).toBe(true);
  });

  test("has 10 in the wallet by default", () => {
    expect(customer.wallet.money).toBe(10);
  });

  test("inherits the moveTo method from Person", () => {
    let newPoint = new Point(12, 13);
    customer.moveTo(newPoint);
    let newLocation = customer.location;
    expect(newLocation).toEqual(newPoint);
  });

  describe("has a _isInRange(vendor) method which detects if they are in range of the vendor", () => {
    const testCases = new Array(10).fill(null).map(() => {
      const customerLocation = Point.randomPoint();
      const vendorLocation = Point.randomPoint();
      const isInRange = Math.random() > 0.5;
      const range =
        customerLocation.distanceTo(vendorLocation) +
        Math.random() * (isInRange ? 10 : -10);
      return [customerLocation, vendorLocation, range, isInRange];
    });

    test.each(testCases)(
      "Is customer at %O in range of vendor at %O with range of %f?",
      (customerLocation, vendorLocation, range, isInRange) => {
        let vendor = new Vendor("Hamsa", 0, 0);
        vendor.range = range;
        vendor.location = vendorLocation;
        customer.location = customerLocation;
        expect(customer._isInRange(vendor)).toBe(isInRange);
      }
    );
  });

  describe("has a _haveEnoughMoney(vendor, numberOfIceCreams) method which returns whether they have enough money to buy from a vendor", () => {
    const testCases = new Array(10).fill(null).map(() => {
      const hasEnoughMoney = Math.random() > 0.5;
      const numberOfIceCreams = Math.floor(Math.random() * 100);
      const price = Math.floor(Math.random() * 10);
      const money =
        numberOfIceCreams * price +
        Math.floor(Math.random() * (hasEnoughMoney ? 10 : -10));

      return [money, numberOfIceCreams, price, hasEnoughMoney];
    });

    test.each(testCases)(
      "Can customer with %f money buy %i ice creams at %i each?",
      (money, numberOfIceCreams, price, hasEnoughMoney) => {
        let vendor = new Vendor("Hamsa", 0, 0);
        vendor.price = price;
        customer.wallet.money = money;
        expect(customer._haveEnoughMoney(vendor, numberOfIceCreams)).toBe(
          hasEnoughMoney
        );
      }
    );
  });

  describe("has a requestIceCream(vendor, numberofIceCreams) method which", () => {
    test("does NOT work if customer is out of range", () => {
      let vendor = new Vendor("Hamsa", 1000, 1000);
      let originalLocation = new Point(1000, 1000);
      customer.requestIceCream(vendor, 1);

      expect(vendor.location.equals(originalLocation)).toBe(true);
      expect(vendor.wallet.money).toBe(0);
      expect(customer.wallet.money).toBe(10);
    });

    test("does NOT work if customer doesn't have enough money", () => {
      let vendor = new Vendor("Hamsa", 1000, 1000);
      let originalLocation = new Point(1000, 1000);
      customer.wallet.money = 0;
      customer.requestIceCream(vendor, 1);

      expect(vendor.location.equals(originalLocation)).toBe(true);
      expect(vendor.wallet.money).toBe(0);
      expect(customer.wallet.money).toBe(0);
    });

    test("works if the customer has enough money and is in range of the vendor", () => {
      let vendor = new Vendor("Hamsa", 4, 3);

      let newPrice = Math.floor(Math.random() * 100);
      let vendorMoney = Math.floor(Math.random() * 100);
      vendor.price = newPrice;
      vendor.wallet.money = vendorMoney;

      let numberOfIceCreams = Math.floor(Math.random() * 10);
      let expectedCost = numberOfIceCreams * newPrice;
      let customerMoney = Math.floor(expectedCost + Math.random() * 100);
      customer.wallet.money = customerMoney;

      let expectedCustomerMoney = customerMoney - expectedCost;
      let expectedVendorMoney = vendorMoney + expectedCost;

      customer.requestIceCream(vendor, numberOfIceCreams);

      expect(vendor.location).toEqual(customer.location);
      expect(vendor.wallet.money).toBe(expectedVendorMoney);
      expect(customer.wallet.money).toBe(expectedCustomerMoney);
    });
  });
});
