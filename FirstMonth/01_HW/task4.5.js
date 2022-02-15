function distanceBetweenPoints(x, y, x2, y2)
{
    if (x > 999e9 || y > 999e9 || x2 > 999e9 || y2 > 999e9)
    {
        console.log('Wrong input');
    }
    else
    {
        let dist = Math.sqrt(Math.pow((x2 - x), 2) + Math.pow((y2 - y), 2))
        return dist;
    }
}
let x = 9999545675;
let y = 99334434;
let x2 = 9999493434;
let y2 = 9343043478;
console.log(distanceBetweenPoints(x, y, x2, y2));