function quarter(x, y)
{
	if (x === 0 && y === 0)
	{
		return ("Point is at the origin");
	}
	else if (y === 0)
	{
		return ("The point is on the X-axis");
	}
	else if (x === 0)
	{
		return ("The point is on the Y-axis");
	}
	else if (x >= 0 && y >= 0)
	{
		return ("Point is in the first quater");
	}
	else if (x <= 0 && y >= 0)
	{
		return ("Point is in the second quater");
	}
	else if (x <= 0 && y <= 0)
	{
		return ("Point is in the third quater");
	}
	else if (x >= 0 && y <= 0)
	{
		return ("Point is in the fourth quater");
	}
}
module.exports = {quarter};
