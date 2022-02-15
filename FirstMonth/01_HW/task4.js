function maximum(a, b, c)
{
    let n = a * b * c;
    let y = a + b + c;
    let z = Math.max(n, y);
    z = z + 3;
    return z;
}
module.exports = {maximum};

