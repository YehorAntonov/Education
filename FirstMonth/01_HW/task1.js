function calculating(a, b)
{
  if (a % 2 === 0)
  {
    c = a * b;
    return c;
  }
  else
  {
    c = a + b;
    return c;
  }
}
module.exports = {calculating};

