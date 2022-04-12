const helperFunctions = require('./helperFunctions.js');

test("Number of spaces equals the number passed", () =>{
    expect(helperFunctions.makeSpace(4)).toBe("&nbsp&nbsp&nbsp&nbsp");
});

test("Returns true if the year is a leap year", () => {
    expect(helperFunctions.isLeapYear(2020)).toBe(true);

    expect(helperFunctions.isLeapYear(2021)).toBe(false);

    expect(helperFunctions.isLeapYear(1600)).toBe(true);

    expect(helperFunctions.isLeapYear(2800)).toBe(true);

    expect(helperFunctions.isLeapYear(1900)).toBe(false);
})


test("Returns the first day in the week the year begins", () => {
    expect(helperFunctions.findFirstDay(2021)).toBe(6);

    expect(helperFunctions.findFirstDay(2005)).toBe(7);

    expect(helperFunctions.findFirstDay(2005)).toBe(7);

    expect(helperFunctions.findFirstDay(2005)).toBe(7);
})

