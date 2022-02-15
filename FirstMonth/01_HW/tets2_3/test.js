const assert = require('assert');
const task2_1 = require('./task2_1');
const task2_2 = require('./task2_2');
const task2_3 = require('./task2_3');
const task2_4 = require('./task2_4');
const task2_5 = require('./task2_5');
const task2_6 = require('./task2_6');
const task3_1 = require('./task3_1');
const task3_2 = require('./task3_2');
const task3_3 = require('./task3_3');
const task3_4 = require('./task3_4');
const task3_5 = require('./task3_5');
const task3_6 = require('./task3_6');
const task3_7 = require('./task3_7');
const task3_8 = require('./task3_8');
const task3_9 = require('./task3_9');
const task3_9_2 = require('./task3_9_2');
describe("HW_1 Tests", function() {
    it('calculate sum and count of even numbers from 1 to 99', function () {
        assert.equal(task2_1.countnumbers(), (49, 2450));
    })
    it('define what is number: simple or not a simple', function () {
        assert.equal(task2_2.simpleNumber(2), "Number is a simple");
        assert.equal(task2_2.simpleNumber(53), "Number is a simple");
        assert.equal(task2_2.simpleNumber(66), "Number is not a simple");
        assert.equal(task2_2.simpleNumber(112), "Number is not a simple");
    })
    it('calculate sqrt of number', function () {
        assert.equal(task2_3.sqrtoOfNumber(0), 0);
        assert.equal(task2_3.sqrtoOfNumber(-85), "Number is negative");
        assert.equal(task2_3.sqrtoOfNumber(144), 12);
        assert.equal(task2_3.sqrtoOfNumber(135), 11);
    })
    it('calculate factorial of number', function () {
        assert.equal(task2_4.factorial(0), 0);
        assert.equal(task2_4.factorial(-6), "Number is negative");
        assert.equal(task2_4.factorial(5), 120);
        assert.equal(task2_4.factorial(13), 6227020800);
    })
    it('calculate summa of numbers in number', function () {
        assert.equal(task2_5.summaOFNumbersInNumber(-5621), 14);
        assert.equal(task2_5.summaOFNumbersInNumber(564), 15);
        assert.equal(task2_5.summaOFNumbersInNumber(5), 5);
        assert.equal(task2_5.summaOFNumbersInNumber(0), 0);
    })
    it('reverse number', function () {
        assert.equal(task2_6.reverseNumber(599), 995);
        assert.equal(task2_6.reverseNumber(69), 96);
        assert.equal(task2_6.reverseNumber(5), 5);
        assert.equal(task2_6.reverseNumber(-689), 986);
    })
        it('find minimum number of massive', function () {
        assert.equal(task3_1.minimum(3, [3, 7, 1]), 1);
        assert.equal(task3_1.minimum(6, [-52, 56, 2 , 0, 6, 520]), -52);
        assert.equal(task3_1.minimum(2, [5, -999]), -999);
    })
    it('find maximum number of massive', function () {
        assert.equal(task3_2.maximum(5, [3, 7, 1, -666, 944]), 944);
        assert.equal(task3_2.maximum(1, [520]), 520);
        assert.equal(task3_2.maximum(3, [545, 0, 65]), 545);
    })
    it('find index of minimum number of massive', function () {
        assert.equal(task3_3.minimumIndex(5, [3, 7, 1, -666, 944]), 3);
        assert.equal(task3_3.minimumIndex(1, [520]), 0);
        assert.equal(task3_3.minimumIndex(3, [23, -46, 65]), 1);
    })
    it('find index of maximun number of massive', function () {
        assert.equal(task3_4.maximumIndex(5, [3, 7, 1, -666, 944]), 4);
        assert.equal(task3_4.maximumIndex(1, [520]), 0);
        assert.equal(task3_4.maximumIndex(3, [23, -46, 65]), 2);
    })
    it('find summa of numbers with uneven index', function () {
        assert.equal(task3_5.sumUneven(3, [3, 5, 9]), 5);
        assert.equal(task3_5.sumUneven(5, [-56, 545, -3, 8, 6]), 553);
        assert.equal(task3_5.sumUneven(7, [23, -46, 65, 90, -89, 800, -745]), 844);
    })
    it('find summa of numbers with uneven index', function () {
        assert.deepEqual(task3_6.reverseMassive(3, [3, 5, 9]), [9, 5, 3]);
        assert.deepEqual(task3_6.reverseMassive(5, [-56, 545, -3, 8, 6]), [6, 8, -3, 545, -56]);
        assert.deepEqual(task3_6.reverseMassive(7, [23, -46, 65, 90, -89, 800, -745]), [-745, 800, -89, 90, 65, -46, 23]);
    })
    it('find summa of numbers with uneven index', function () {
        assert.equal(task3_7.oddElements(3, [3, 5, 9]), 3);
        assert.equal(task3_7.oddElements(5, [-56, 545, -3, 8, 6]), 2);
        assert.equal(task3_7.oddElements(7, [23, -46, 65, 90, -89, 800, -745]), 4);
    })
    it('find summa of numbers with uneven index', function () {
        assert.equal(task3_8.inverseNum(4, [1, 2, 3, 4]), '3,4,1,2');
        assert.equal(task3_8.inverseNum(5, [10, 11, 12, 13, 14]), '13,14,12,10,11');
    })
    it('sort massive with Bubble method', function () {
        assert.deepEqual(task3_9.sortMassive(2, [9, 2]), [2, 9]);
        assert.deepEqual(task3_9.sortMassive(5, [-56, 545, -3, 8, 6]), [-56, -3, 8, 6, 545]);
        assert.deepEqual(task3_9.sortMassive(3, [23, -46, 65]), [-46, 23, 65]);
    })
    it('sort massive with Select method', function () {
        assert.deepEqual(task3_9_2.sortMassive2(3, [3, 9, 5]), [3, 5, 9]);
        assert.deepEqual(task3_9_2.sortMassive2(5, [-56, 545, -3, 8, 6]), [-56, -3, 6, 8, 545]);
    })

})