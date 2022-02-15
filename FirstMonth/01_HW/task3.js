function summa(a, b, c)
{
	let sum = 0;
	if (a > 0)
	{
		sum = sum + a;
	}
	if (b > 0)
	{
		sum = sum + b;
	}
	if (c > 0)
	{
		sum = sum + c;
	}
	return sum;
}
module.exports = {summa};


