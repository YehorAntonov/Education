function sqrtoOfNumber(x)
{
	if (x === 0)
	{
		return 0;
	}
	if (x < 0)
	{
		return 'Number is negative';
	}
	else
	{
		for (let i = 1; ;i++)
		{
			let a = i * i;
			if (x === a)
			{
				return i;
				break;
			}
			else if (x < a)
			{
				i--;
				return i;
				break;
			}
		}
	}

}
module.exports = {sqrtoOfNumber};
