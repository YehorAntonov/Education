function maximum(n, m = [])
{
    let max = m[0];
    for (let i = 0; i < n; i++)
    {
        if (m[i] > max)
        {
            max = m[i];
        }
    }
    return max;
}
module.exports = {maximum};