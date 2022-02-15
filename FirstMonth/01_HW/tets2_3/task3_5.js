function sumUneven(n, m = [])
{
    let sum = 0;
    for (let i = 0; i < n; i++)
    {
        if (i % 2 != 0)
        {
            sum += m[i];
        }
    }
    return sum;
}

module.exports = {sumUneven};

