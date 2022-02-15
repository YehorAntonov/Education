function numberToString(num)
{
    if (num < 0 || num > 999)
    {
        return 'Wrong input';
    }
    else
    {
        num = String(num);
        return num
    }
}
module.exports = {numberToString};