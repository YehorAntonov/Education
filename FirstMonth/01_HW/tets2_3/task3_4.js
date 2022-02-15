function maximumIndex(n, m = [])
{
    let max = m[0];
    let y = 0;
    for (let i = 0; i < n; i++)
    {
        if (m[i] > max)
        {
            max = m[i];
            y = i;
        }
    }
    return y;
}

module.exports = {maximumIndex};
