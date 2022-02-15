function simpleNumber(x)
{
	let count = 0;
	if (x <= 0)
	{
		return ('Number is not a simple');
	}
	if (x == 2)
	{
		return ('Number is a simple');
	}
	else
	{
		for (let i = 2; i < x; i++)
		{
			if (x % i === 0)
			{
				count = count + 1;
			}
		}
		if (count > 0)
		{
			return ('Number is not a simple');
		}
		else
		{
			return ('Number is a simple');
		}
	}
}
module.exports = {simpleNumber};

