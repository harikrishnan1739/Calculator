function happy(val){

    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearDisplay(){
    document.getElementById("screen").value=""
} 
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)   // its a methord
    document.getElementById('screen').value=result
}