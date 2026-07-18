// Multiple Condition

1. 
let age=25;
//If age > 18 -> He will go to Go else not.
// Drink > 24 -> Yes else no.
let will_priyam_enjoy=age>18 ? (age>24?"Yes he can":"He can't"):false;
console.log(`Can Priyam Drink?:${will_priyam_enjoy}`);

2.
let statusCode=404;
let category=statusCode<300 ? Success : statusCode<400 ? Redirect : statusCode <500 ? "Client Error": "Server Error";
console.log(`Status-${statusCode}:${category}`);
3.
let temp=35;
let feel=(temp>=40) ? "Very Hot":(temp>=30)?"Hot":(temp>=20)?"Warm":(temp>=10) ? "Cool":"Cold";
console.log("7.Temperature:",temp,"|Feel:",feel);



