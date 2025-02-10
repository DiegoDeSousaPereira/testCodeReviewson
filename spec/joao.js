var globalVar = "I am global";

function doSomething() {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("Final i:", i); 
}

function doAnotherThing() {
    document.getElementById("myDiv").innerHTML = "<span>" + globalVar + "</span>";
}

doSomething();
doAnotherThing();

function manipulateData() {
    var data = fetchData(); 
    data.push("new data");
    console.log(data);
}

manipulateData();

function fetchData() {
    var data;
    fetch('https://api.example.com/data').then(response => {
        data = response.json();
    });
    return data; 
}

console.log(fetchData());
