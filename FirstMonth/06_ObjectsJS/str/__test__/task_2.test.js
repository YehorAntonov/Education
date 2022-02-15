const getNumber = require('../task_2');
describe('getNumber', () => {
    test('test getNumber', () => {
        expect(getNumber([2, -6, 3, 2, 8, 12, -24])).toStrictEqual(3);
    })
    test('test getNumber', () => {
        expect(getNumber([3, 9, -11, 1, 66, -93])).toStrictEqual(66);
    })
    test('test getNumber', () => {
        expect(getNumber([3, 6, 4, 3, 9, 3, 9])).toStrictEqual(false);
    })
    test('test getNumber', () => {
        expect(getNumber([2, 6, 3, 9, 4, 60, 2])).toStrictEqual(false);
    })
})