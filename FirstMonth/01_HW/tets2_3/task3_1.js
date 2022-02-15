function minimum(n, m = [])
{
	let min = m[0];
	for (let i = 0; i < n; i++)
	{
		if (m[i] < min)
		{
			min = m[i];
		}
	}
	return min;
}
module.exports = {minimum};
