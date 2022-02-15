function oddElements(n, m = [])
{
	let c = 0;
	for (let i = 0; i < n; i++)
	{
		if (m[i] % 2 != 0)
		{
			c++;
		}
	}
	return c;

}

module.exports = {oddElements};