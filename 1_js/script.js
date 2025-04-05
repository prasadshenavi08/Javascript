function showmsg(){
    alert("hello js");
}

function showdate(){
    document.write("<h2>todays date</h2>");

    let d1 =new Date()
    document.write(d1);
}

function showno(){
    window.print("have a nice days");
}

function function1(){
    alert("Alert");
}
function function2(){
    confirm("confirm")
}
function function3(){
    prompt("Enter Promt");
}


function showdate1(){
    let d1 = new Date();
    document.write(d1.getMonth());
}