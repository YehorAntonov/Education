function getCookingTime(eggsAmount)
{
    let result;
    if (eggsAmount < 0)
    {
        return false;
    }
    if (eggsAmount === 0)
    {
        return 0;
    }
    if (eggsAmount > 5)
    {
        eggsAmount = eggsAmount / 5;
        eggsAmount = parseInt(eggsAmount) + 1;
        result = eggsAmount * 5;
    }
    else
    {
        return 5;
    }


    return result;
}

module.exports = getCookingTime;