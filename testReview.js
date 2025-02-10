var globalVar = "Eu sou global";

function processData() {
    var data = fetchData();
    console.log(data);
    processData2(data);
}

function fetchData() {
    var data = { key: 'value' };
    setTimeout(() => {
        data = { key: 'new value' };
    }, 1000);
    return data;
}

function processData2(info) {
    for(var i = 0; i < info.length; i++) {
        console.log(info[i]);
    }
}

processData();
