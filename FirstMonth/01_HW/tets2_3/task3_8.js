function inverseNum(n, m = [])
{
    if (n % 2 == 0)
    {
        let firsthalf = [];
        firsthalf.length = n / 2;
        let secondhalf = [];
        secondhalf.length = n / 2;
        for (let k = 0; k < n / 2; k++)
        {
            firsthalf[k] = m[k];
        }
        let d = m.reverse();
        for (let k = 0; k < n / 2; k++)
        {
            secondhalf[k] = m[k];
        }
        secondhalf.reverse();
        let res = secondhalf.join(',') + ',' + firsthalf.join(',');
        return res;
    }
    else
    {
        let l = m[(n / 2) - 0.5];
        let firsthalf = [];
        firsthalf.length = (n - 1) / 2;
        let secondhalf = [];
        secondhalf.length = (n - 1) / 2;
        for (let k = 0; k < firsthalf.length; k++)
        {
            firsthalf[k] = m[k];
        }
        let d = m.reverse();
        for (let k = 0; k < secondhalf.length; k++)
        {
            secondhalf[k] = m[k];
        }
        secondhalf.reverse();
        secondhalf[(n / 2) - 0.5] = l;
        let res = secondhalf.join(',') + ',' + firsthalf.join(',');
        return res;
    }

}
module.exports = {inverseNum};
		