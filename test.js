function test_prime(n)
{

  if (n===1){
    document.write ("Not Prime")
    return false;
  }
  else if(n === 2){
    return true;
  }else{
    document.write ("Prime")
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;
  }
}

console.log(test_prime(37));
