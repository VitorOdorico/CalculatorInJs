function insert(num){
   var numero =  document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = numero + num;

}
function clean(){
    document.getElementById('result').innerHTML ="";

    
}
function back()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
        