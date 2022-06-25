let output=document.getElementById("Display");

function Calculate(){
    
        output.value=eval(output.value);
    
    
  

}
function Clear(){
    output.value="";
}
function del(){
    output.value=output.value.slice(0,-1);
}

function show(num){
    output.value +=num
}

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementById("currentDate").value = date;

