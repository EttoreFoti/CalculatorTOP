function add(a, b){    //l'esercizio voleva usate le mie funzioni ma non è quello il grosso
    var tot=a+b;
    return tot;
}
function subtract(a, b){
    var tot=a-b;
    return tot;
}
function multiply(a, b){
    var tot=a*b;
    return tot;
}
function divide(a, b){
    var tot=a/b;
    return tot;
}

var text=document.querySelector('#risultato');
var number=document.querySelectorAll('.number');
var equal=document.querySelector('#equal');
var operator=document.querySelectorAll('.operator');


number.forEach((button) => button.addEventListener('click',()=>{
    text.innerText += button.innerText;
}));

operator.forEach((button) => button.addEventListener('click', () =>{
    text.innerText += button.innerText;
}));

equal.addEventListener("click", function(){
    let numbers=[];
    var contOp=0; var contNum=0;
    var operators=[]; var numtemp=''; var iex=0;
    var string=text.innerText;
    var stringa=string.split("");
    console.log(stringa);
    for(var i=0; i<=string.length; i++){
        if((string[i]=='*')||(string[i]=='/')||(string[i]=='+')||(string[i]=='-')){
            for(var k=iex; k<i; k++){
                numtemp+=string[k]
            }
            console.log(numtemp);
            numbers[contNum]=numtemp;
            console.log(numbers)
            numtemp='';
            contNum++;
            operators[contOp]=string[i];
            console.log(operators);
            contOp++;
            iex=k+1;
            console.log(iex);
        }
    }
    for(var l=iex; l<(string.length); l++){
        numtemp+=string[l];
    }
    numbers[contNum]=numtemp;
    console.log(numbers);
    console.log(contNum)

    /* esegue moltiplicazioni e divisioni,
    ogni volta che fa un operazione elimina i numeri tra cui fa le operazioni
    e l'operando. Accorcia i vettori e sostituisce il numero ottenuto */
    for(var c=0; c<contOp; ){
        if(operators[c]=='*'){
            numbers[c+1]=numbers[c]*numbers[(c+1)];
            numbers.splice(c, (c+1));
            operators.splice(c, (c+1));
        }else if(operators[c]=='/'){
            numbers[c+1]=numbers[c]/numbers[(c+1)];
            numbers.splice(c, (c+1));
            operators.splice(c, (c+1));
    }else{c++;} //siccome stringo il vettore se aumento ogni volta che fa l'operazione sballa i conti
    
}
    // esegue somma e sottrazioni
    for (var t=0; t<operators.length; ){
        if(operators[t]=='+'){
            numbers[t+1]=+numbers[t]+(+numbers[t+1]);
            numbers.splice(t, (t+1));
            operators.splice(t, (t+1));
        }else if(operators[t]=='-'){
            numbers[t+1]=numbers[t]-numbers[t+1];
            numbers.splice(t, (t+1));
            operators.splice(t, (t+1));
}else{t++}
console.log(numbers)
console.log(operators)
   
}
text.innerText=numbers[0];
//funziona tutto!!!!!!!
});

var backspace=document.querySelector('#backspace');
//funziona basta pulire il codice
backspace.addEventListener('click', function(){
    var string=text.innerText;
    var stringa=string.split("");
    stringa.pop();
    console.log(stringa)
    text.innerText=stringa.join('');
    console.log(string);
})

var wipe=document.querySelector('#wipe');
wipe.addEventListener('click', function(){
    text.innerText='';
})
