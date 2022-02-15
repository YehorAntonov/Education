function getNumber(array)
{
    let counteven = 0;
    let countodd = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (array[i] % 2 === 0)
        {
            counteven++;
        }
        else
        {
            countodd++;
        }
    }
    if (counteven === (array.length - 1))
    {
        for (let i = 0; i < array.length; i++)
        {
            if (array[i] % 2 !== 0)
            {
               return array[i];
            }
        }
    }
    else if (countodd === (array.length - 1))
    {
        for (let i = 0; i < array.length; i++)
        {
            if (array[i] % 2 === 0)
            {
                return array[i];
            }
        }
    }
    else if (counteven < (array.length - 1) && countodd < (array.length - 1))
    {
        return false;
    }


}


module.exports = getNumber;