const {LList} = require('../ts/LList')

describe('getSize', () => {
    test('should return 0', () => {
        const testArr = new LList([])
        expect(testArr.getSize()).toEqual(0)
    })
    test('should return 1', () => {
        const testArr = new LList([1])
        expect(testArr.getSize()).toEqual(1)
    })
})

describe('add', function () {
    test('should add 1 to LList', () => {
        const testArr = new LList([])
        expect((() => {
            testArr.add(1)
            return testArr.toArray()
        })()).toEqual([1])
    })
});

describe('clear', function () {
    test('should return size = 0', () => {
            expect((() => {
                const testArr = new LList([1,2,3])
                testArr.clear()
                return testArr.toArray()
            })()).toEqual([])
        }
    )
});

describe('set', function () {
    test('LList[2] === 12', () => {
            expect((() => {
                const testArr = new LList([1,2,3])
                testArr.set(12,2)
                return testArr.toArray()
            })()).toEqual([1,2,12])
        }
    )
    test('LList[4] !== 12', () => {
            expect((() => {
                const testArr = new LList([1,2,3])
                testArr.set(12,4)
                return testArr.toArray()
            })()).toEqual([1,2,3])
        }
    )
});

describe('get', () => {
    const testArr = new LList([1,2,3])
    test('should return 1', () => {
        expect(testArr.get(0)).toEqual(1)
    })
    test('should return 3', () => {
        expect(testArr.get(2)).toEqual(3)
    })
    test('should return -1', () => {
        expect(testArr.get(4)).toEqual(-1)
    })
    test('should return -1', () => {
        expect(testArr.get(-4)).toEqual(-1)
    })
})

describe('remove', () => {
    const testArr = new LList([1,2,3,4])
    const testArr2 = new LList([1,2])
    const testArr3 = new LList([1])
    test('should remove LList[0] and return 1', () => {
        expect(testArr.remove(1)).toEqual(1)
    })
    test('should remove LList[3] and return 1', () => {
        expect(testArr.remove(4)).toEqual(4)
    })
    test('should remove LList[1] and return 2', () => {
        expect(testArr2.remove(2)).toEqual(2)
    })
    test('should remove LList[0] and return 1', () => {
        expect(testArr3.remove(1)).toEqual(1)
    })
})

describe('toArray', () => {
    const testArr = new LList([1,2,3])
    test('should return [1,2,3]', () => {
        expect(testArr.toArray()).toEqual([1,2,3])
    })
})

describe('toString', () => {
    const testArr = new LList([1,2,3])
    test('should return 123', () => {
        expect(testArr.toString()).toEqual('123')
    })
})

describe('contains', () => {
    const testArr = new LList([1,2,3])
    test('should return true', () => {
        expect(testArr.contains(1)).toBe(true)
    })
    test('should return false', () => {
        expect(testArr.contains(12)).toBe(false)
    })
})

describe('minValue', () => {
    const testArr = new LList([4,1,2,3])
    test('should return 1', () => {
        expect(testArr.minValue()).toBe(1)
    })
})

describe('maxValue', () => {
    const testArr = new LList([1,2,3])
    test('should return 3', () => {
        expect(testArr.maxValue()).toBe(3)
    })
})

describe('minIndex', () => {
    const testArr = new LList([4,1,2,3])
    test('should return 1', () => {
        expect(testArr.minIndex()).toBe(1)
    })
})

describe('maxIndex', () => {
    const testArr = new LList([1,2,3])
    test('should return 0', () => {
        expect(testArr.maxIndex()).toBe(2)
    })
})

describe('reverse', () => {


    test('should return [5,4,3,2,1]', () => {
        const testArr = new LList([1,2,3,4,5])
        expect((() => {
            testArr.reverse()
            return testArr.toArray()
        })()).toEqual([5,4,3,2,1])
    })

    test('should return []', () => {
        const testArr = new LList()
        expect((() => {
            testArr.reverse()
            return testArr.toArray()
        })()).toEqual([])
    })
})

describe('halfReverse', () => {
    const testArr = new LList([1,2,3,4,5])

    test('should return [3,4,5,1,2]', () => {
        expect((() => {
            testArr.halfReverse()
            return testArr.toArray()
        })()).toEqual([3,4,5,1,2])
    })
})

describe('retainAll', () => {
    const testArr = new LList([1,2,3,4,5])
    const testArr2 = new LList([1,2,3,4,5])
    const testArr3 = new LList([1,2])

    test('should return [1,2]', () => {
        expect((
            () => {
                testArr.retainAll([1,2])
                return testArr.toArray()
            }
        )()).toEqual([1,2])
    })
    test('should return [1,2]', () => {
        expect((
            () => {
                testArr2.retainAll([0])
                return testArr2.toArray()
            }
        )()).toEqual([])
    })
    test('should return [1]', () => {
        expect((
            () => {
                testArr3.retainAll([1])
                return testArr3.toArray()
            }
        )()).toEqual([1])
    })
})

describe('removeAll', () => {
    const testArr = new LList([1,2,3,4,5])
    const testArr2 = new LList([1,2])
    const testArr3 = new LList([1,2])
    test('should return [3,4,5]', () => {
        expect((
            () => {
                testArr.removeAll([1,2])
                return testArr.toArray()
            }
        )()).toEqual([3,4,5])
    })
    test('should return []', () => {
        expect((
            () => {
                testArr2.removeAll([1,2,3,4,5])
                return testArr2.toArray()
            }
        )()).toEqual([])
    })
    test('should return [1]', () => {
        expect((
            () => {
                testArr3.removeAll([2,3,4,5])
                return testArr3.toArray()
            }
        )()).toEqual([1])
    })
})

describe('print', () => {
    const testArr = new LList([1])

    test('should console.log() something', () => {
        jest.spyOn(console, 'log')
        testArr.print()
        expect(console.log).toBeCalledWith(1)
    })
})

describe('sort', () => {
    const testArr = new LList([12,3,4,1,45,4])

    test('should return sorted array', () => {
        expect((() => {
            testArr.sort()
            return testArr.toArray()
        })()).toEqual([1,3,4,4,12,45])
    })
})