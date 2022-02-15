const getCookingTime = require('../task_1');
describe('getCookingTime', () => {
    test('test getCookingTime', () => {
        expect(getCookingTime(-5)).toBe(false);
    })
    test('test getCookingTime', () => {
        expect(getCookingTime(0)).toBe(0);
    })
    test('test getCookingTime', () => {
        expect(getCookingTime(3)).toBe(5);
    })
    test('test getCookingTime', () => {
        expect(getCookingTime(11)).toBe(15);
    })
})