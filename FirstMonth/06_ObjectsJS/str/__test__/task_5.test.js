const palindrom = require('../task_5');
describe('palindrom', () => {
    test('test palindrom', () => {
        expect(palindrom(-5)).toBe(11);
    })
    test('test palindrom', () => {
        expect(palindrom(2)).toBe(11);
    })
    test('test palindrom', () => {
        expect(palindrom(888)).toBe(898);
    })
    test('test palindrom', () => {
        expect(palindrom(23)).toBe(33);
    })
})