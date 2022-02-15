function grade(x)
{
	if (x < 0)
	{
		return ("Incorrect value");
	}
	else if (x > 100)
	{
		return ("Incorrect value");
	}
	else if (x <= 19)
	{
		return ("Grade is F");
	}
	else if (x >= 20 && x <= 39)
	{
		return ("Grade is E");
	}
	else if (x >=40 && x <= 59)
	{
		return ("Grade is D");
	}
	else if (x >= 60 && x <= 74)
	{
		return ("Grade is C");
	}
	else if (x >= 75 && x <= 89)
	{
		return ("Grade is B");
	}
	else if (x >= 90 && x <= 100)
	{
		return ("Grade is A");
	}
}
module.exports = {grade};

