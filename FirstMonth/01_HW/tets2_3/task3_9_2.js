function sortMassive2(n, m = [])
{
    let min = m[0];
    let g = [];
    g.length = n;
    let h = 0;
    let y = 0;
    for (let i = 0; i < n; i++)
    {
        if (m.length === 2)
        {
            if (m[0] > m[1])
            {
                g[i + 1] = m[0];
                g[i] = m[1];
                break;
            }
            if (m[0] < m[1])
            {
                g[i + 1] = m[1];
                g[i] = m[0]
                break;
            }
            if (m[0] === m[1])
            {
                g[i + 1] = m[0];
                g[i] = m[1];
                break;
            }
        }
        else
        {
            for (let k = 0; k < n; k++)
            {
                if (m[k] < min)
                {
                    min = m[k];
                    h = k;
                    y = k;
                }
            }
            m[h] = m[0];
            m[0] = min;
            g[i] = min;
            m.shift();
            min = m[0];
        }
    }
    return g;
}
module.exports = {sortMassive2};
