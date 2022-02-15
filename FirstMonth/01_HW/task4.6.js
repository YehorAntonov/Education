function numberToString(num)
{
    if (num < 0 || num > 999e9)
    {
        return 'Wrong input';
    }
    else
    {
        num = String(num);
        console.log('num = ' + num);
        console.log('type of num = ' + typeof num);
    }
}
let num = 12365656536;
console.log(numberToString(num));