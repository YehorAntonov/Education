function countnumbers()
{
	let c = 0;
	let sum = 0;
	for (let x = 1; x <= 99; x++)
	{
		if (x % 2 === 0)
		{
			c = c + 1;
			sum = sum + x;
		}
	}
	return (c, sum);
}
module.exports = {countnumbers};

