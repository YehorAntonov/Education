function minimumIndex(n, m = [])
{
    let min = m[0];
    let y = 0;
    for (let i = 0; i < n; i++)
    {
        if (m[i] < min)
        {
            min = m[i];
            y = i;
        }
    }
    return y;
}

module.exports = {minimumIndex};
