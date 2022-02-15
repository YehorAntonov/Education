const countCharacters = require('../task_4');
describe('countCharacters', () => {
    test('test countCharacters', () => {
        expect(countCharacters('fklkegc')).toStrictEqual({f: 1, k: 2, l: 1, e: 1, g: 1, c: 1});
    })
    test('test countCharacters', () => {
        expect(countCharacters('edioe')).toStrictEqual({e: 2, d: 1, i: 1, o: 1});
    })
})