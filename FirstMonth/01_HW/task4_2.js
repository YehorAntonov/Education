function distanceBetweenPoints(x, y, x2, y2)
{
    let dist = Math.sqrt(Math.pow((x2 - x), 2) + Math.pow((y2 - y), 2))
    return dist;
}
module.exports = {distanceBetweenPoints};