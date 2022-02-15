const assert = require('assert');
const task4_1 = require('./task4_1');
const task4_2 = require('./task4_2');
const task4_3 = require('./task4_3');
const task4_4 = require('./task4_4');
const task1 = require('./task1');
const task2 = require('./task2');
const task3 = require('./task3');
const task4 = require('./task4');
const task5 = require('./task5');
describe("HW_1 Tests", function() {
    it ('input number of day and output day of week', function() {
        assert.equal(task4_1.dayOfWeek(1), "Monday");
        assert.equal(task4_1.dayOfWeek(2), "Tuesday");
        assert.equal(task4_1.dayOfWeek(3), "Wednesday");
        assert.equal(task4_1.dayOfWeek(4), "Thursday");
        assert.equal(task4_1.dayOfWeek(5), "Friday");
        assert.equal(task4_1.dayOfWeek(6), "Saturday");
        assert.equal(task4_1.dayOfWeek(7), "Sunday");
    })
    it ('calculate distance between 2 points', function() {
        assert.equal(task4_2.distanceBetweenPoints(2, 7, -2, 7), 4);
        assert.equal(task4_2.distanceBetweenPoints(-5, 1, -5, -7), 8);
        assert.equal(task4_2.distanceBetweenPoints(-3, 0, 0, 4), 5);
        assert.equal(task4_2.distanceBetweenPoints(0, 3, -4, 0), 5);
    })
    it ('cast number to string', function() {
        assert.equal(task4_3.numberToString(666), '666');
        assert.equal(task4_3.numberToString(7000), 'Wrong input');
        assert.equal(task4_3.numberToString(-2), 'Wrong input');
    })
    it ('cast string to number', function() {
        assert.equal(task4_4.stringToNumber('573'), 573);
        assert.equal(task4_4.stringToNumber('256444'), 'Wrong input');
        assert.equal(task4_4.stringToNumber('-855'), 'Wrong input');
    })
    it ('calculate a * b, if a even, else a + b', function() {
        assert.equal(task1.calculating(44, 6), 264);
        assert.equal(task1.calculating(59, 13), 72);
        assert.equal(task1.calculating(-58, 2), -116);
        assert.equal(task1.calculating(3, -30), -27);
    })
    it ('define quarter', function() {
        assert.equal(task2.quarter(56, 12), "Point is in the first quater");
        assert.equal(task2.quarter(-8, 23), "Point is in the second quater");
        assert.equal(task2.quarter(-50, -96), "Point is in the third quater");
        assert.equal(task2.quarter(15, -27), "Point is in the fourth quater");
        assert.equal(task2.quarter(0, 0), "Point is at the origin");
        assert.equal(task2.quarter(0, 56), "The point is on the Y-axis");
        assert.equal(task2.quarter(17, 0), "The point is on the X-axis");
    })
    it ('add all positive numbers', function() {
        assert.equal(task3.summa(6, 6, 6), 18);
        assert.equal(task3.summa(-9, 6 , 9), 15);
        assert.equal(task3.summa(45, -6, 3), 48);
        assert.equal(task3.summa(86, 12, -78), 98);
        assert.equal(task3.summa(56, -11, -758), 56);
        assert.equal(task3.summa(-806, 16, -79), 16);
        assert.equal(task3.summa(-96, -12, 7668), 7668);
    })
    it ('calculate expression', function() {
        assert.equal(task4.maximum(4, 5, 6), 123);
        assert.equal(task4.maximum(-8, 8, 2), 5);
        assert.equal(task4.maximum(16, -9, 6), 16);
        assert.equal(task4.maximum(11, 1, -3), 12);
        assert.equal(task4.maximum(-4, -8, -2), -11);
        assert.equal(task4.maximum(-16, -9, 6), 867);
    })
    it ('calculate grade', function() {
        assert.equal(task5.grade(15), "Grade is F");
        assert.equal(task5.grade(21), "Grade is E");
        assert.equal(task5.grade(55), "Grade is D");
        assert.equal(task5.grade(64), "Grade is C");
        assert.equal(task5.grade(82), "Grade is B");
        assert.equal(task5.grade(100), "Grade is A");
        assert.equal(task5.grade(-5), "Incorrect value");
        assert.equal(task5.grade(101), "Incorrect value");

    })
})
