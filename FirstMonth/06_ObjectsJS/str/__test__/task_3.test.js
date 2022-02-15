const findTitle = require('../task_3');
describe('findTitle', () => {
    test('test findTitle', () => {
        expect(findTitle([{title: 'yyy'}, {title: "yyy"}, {user: 'yyy'}], 'yyy')).toStrictEqual([{title: 'yyy'}, {title: "yyy"}]);
    })
    test('test findTitle', () => {
        expect(findTitle([56, 2, {title: 'qwe'}], 'qwe')).toStrictEqual([{title: 'qwe'}]);
    })
    test('test findTitle', () => {
        expect(findTitle([56, 2, {title: 'qwe'}, {title: 'fkhj'}], 'qwe')).toStrictEqual([{title: 'qwe'}]);
    })
})