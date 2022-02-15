function palindrom(num)
{
    let result;
    if (num < 10)
    {
        return 11;
    }
    for (let num2 = num + 1; num2 < num + 1000; num2++)
    {
        let str = String(num2).split('');

        let reverse = [];
        for (let i = str.length - 1; i >= 0; i--)
        {
            reverse.push(str[i]);
        }
        str = str.join('');
        reverse = reverse.join('');
        if (str === reverse)
        {
            result = num2;
            return result;
        }
    }
}


module.exports = palindrom;