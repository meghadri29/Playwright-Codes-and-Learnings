1.
let actualStatusCode=200;
let expectedStatusCode=300;
let testresult=actualStatusCode===expectedStatusCode? "PASS" : "FAIL";
console.log(testresult);

// === is used to check the strict comparison.

2.
let environment="staging";
let baseUrl=environment==="prod" ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);

3.
let isCI=true;
let browserMode=isCI ? "headless" : "headed";
console.log("Launching Browser in:",browserMode,"Mode");

