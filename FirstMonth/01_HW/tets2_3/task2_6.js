function reverseNumber(x)
{

	let xarray = x.toString().split('');
	let result = [];
	for (let i = xarray.length - 1; i >= 0; i--)
	{
		result.push(xarray[i]);
	}
	result = result.join('');
	return Number.parseInt(result);

}
module.exports = {reverseNumber};