var globalVar = "I am global";

function doSomething() {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("Final i:", i); // i ainda é acessível aqui por causa do 'var'
}

function doAnotherThing() {
    document.getElementById("myDiv").innerHTML = "<span>" + globalVar + "</span>";
    // Manipulação direta de DOM dentro de uma função, sem separação de responsabilidades
}

doSomething();
doAnotherThing();

function manipulateData() {
    var data = fetchData(); // fetchData não está definida em qualquer lugar
    data.push("new data");
    console.log(data);
}

manipulateData();

function fetchData() {
    // Uso ineficiente e errado de async-await, promessas não são manipuladas corretamente
    var data;
    fetch('https://api.example.com/data').then(response => {
        data = response.json();
    });
    return data; // Retorna undefined porque fetch é assíncrono
}

console.log(fetchData()); // Sempre loga undefined
