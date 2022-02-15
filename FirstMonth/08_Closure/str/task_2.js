function getSum(num1, num2) {
    if (typeof num1 !== 'string' || typeof num2 !== 'string') {
        return false;
    }

    const sum1 = num1.split('');
    const sum2 = num2.split('');

    const arr1 = sum1.map(Number);
    const arr2 = sum2.map(Number);


    const sum = arr2.map(function (num, num2) {
        return num + arr1[num2];
    });
    let result = sum.join('');
    return result;

}


module.exports = { getSum };
