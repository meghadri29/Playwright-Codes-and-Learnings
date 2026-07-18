// Template Literal.Important Topic.
// `${}-${}`
let responseTime=850;
let sla=1000;
let slaStatus=responseTime <= sla ? "Within SLA" : "SLA Breached";
console.log(`Response Time: ${responseTime}ms - ${slaStatus}`);
console.log(`What is the SLA time? - ${sla}`);
// We use template literals in JavaScript to make code significantly cleaner, 
// more readable, and easier to maintain by removing the need for complex string concatenation

// Example:
// Without Using Template Literal
let user1 = "Sam";
let message1 = "Hello, " + user1 + "! Welcome back.";
console.log(message1);

// After Using Template Literal
let user2 = "Sam";
let message2 = `Hello, ${user2}! Welcome back.`;
console.log(message2);
