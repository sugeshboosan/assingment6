
var colors = ["red","blue","green"];
for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


setTimeout(()=>{
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'grey'
},5000)

function printTable(){
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1; i<=10; i++){
        var pTag= document.getElementById('pPrint');
        pTag.innerHTML += (num*i) + "<br/>" 
    }
}




function message(){
    const print = document.getElementById('name').value;
const msg = document.getElementById('msg')
    if(print =="sugesh"){
        msg.innerHTML = "welcome";
        return  false;
    }
}

const time = document.getElementById('time')
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    time.innerText = time;
}

setInterval(clock,1000);