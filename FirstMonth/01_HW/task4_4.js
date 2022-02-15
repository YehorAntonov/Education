function stringToNumber(str)
{
    str = Number(str);
    if (str < 0 || str > 999)
    {
        return 'Wrong input';
    }
    else
    {
        return str;
    }
}

module.exports = {stringToNumber};