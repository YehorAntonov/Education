function dayOfWeek(day)
{
    switch(day)
    {
        case 1:
            day = String('Monday');
            break;
        case 2:
            day = String('Tuesday');
            break;
        case 3:
            day = String('Wednesday');
            break;
        case 4:
            day = String('Thursday');
            break;
        case 5:
            day = String('Friday');
            break;
        case 6:
            day = String('Saturday');
            break;
        case 7:
            day = String('Sunday');
            break;
    }
    return day;
}
module.exports = {dayOfWeek};
//let day = 4;
//console.log(dayOfWeek(day));