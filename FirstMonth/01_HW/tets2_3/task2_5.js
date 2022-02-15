function summaOFNumbersInNumber(x)
{
	if (x < 0)
	{
		x = x * (-1);
	}
	let sum = 0;
	while (x)
	{
		let t = x % 10;
		x = (x - t) / 10;
		sum = sum + t;
	}
	return sum;
}
module.exports = {summaOFNumbersInNumber};
