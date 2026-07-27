let browsers=["Chrome","Firefox","Safari","Opera","Edge"];
console.log(browsers.length);

browsers.pop();
console.log(browsers);

browsers.shift();
console.log(browsers);

for(let i=0;i<browsers.length;i++){
    console.log(browsers[i]);
    if(browsers[i]==="Opera"){
        console.log("Opera doesn't support Automation!");
    }
}



