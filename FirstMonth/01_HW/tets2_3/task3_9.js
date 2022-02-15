function sortMassive(n, m = [])
{
    for (let i = 0; i < n; i++)
    {
        if (m[i] > m[i + 1])
        {
            let t = m[i + 1];
            m[i + 1] = m[i];
            m[i] = t;
        }
    }
    return m;

}

module.exports = {sortMassive};
