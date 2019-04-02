import { Months } from "./constants";

test(``, () => {
  const expectedMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  expect(Months).toEqual(expectedMonths);
});
