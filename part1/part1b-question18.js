function printDateInf(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printDateInf,1000);
