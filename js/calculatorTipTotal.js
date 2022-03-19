let billInit = 0;
let bill = document.getElementById('bill');
let tipInit = 0;
let tip = document.querySelectorAll('.tipBox__box');
let tipCustom = document.getElementById('tipCustom');
let numberOfPeopleInit = 1;
let numberOfPeople = document.getElementById('numberOfPeople');

let tipAmount = document.getElementById('tipAmount');
let total = document.getElementById('total');


//------------ seccion bill

bill.addEventListener('input', (e) =>{
    justNumber(e.target);
    billInit = parseInt(e.target.value);
    lastFunction(billInit,tipInit,numberOfPeopleInit);
});


//------------- seccion NumberOfPeople
numberOfPeople.addEventListener('input', (e) =>{
    justNumber(e.target);
    numberOfPeopleInit = parseInt(e.target.value);
    if(!numberOfPeopleInit){
        document.getElementById('numberOfPeopleError').classList.add('numberOfPeople__error-active');
    }else{document.getElementById('numberOfPeopleError').classList.remove('numberOfPeople__error-active');
    }
    lastFunction(billInit,tipInit,numberOfPeopleInit);
});

//------------- seccion tip
let tipCheck;

tip.forEach(element => {
    if(!element.classList.contains('tipBox__box-custom')){
        element.addEventListener('click', (e)=>{
            tipInit = parseInt(e.target.innerText.slice(0, -1));
            tipCustom.value = "";
            if(tipCheck){
                tipCheck.classList.remove('tipBox__box-checked');
            }
            tipCheck=element;
            tipCheck.classList.add('tipBox__box-checked');
            lastFunction(billInit,tipInit,numberOfPeopleInit);
        })

    }else {
        tipCustom.addEventListener('input',(e)=>{
            justNumber(e.target);
            tipInit = parseInt(e.target.value);
            tipCheck.classList.remove('tipBox__box-checked');
            lastFunction(billInit,tipInit,numberOfPeopleInit);
        })
    }
});
//------------- seccion funciones

function justNumber(target){
    if(isNaN(target.value.slice(-1))){
        target.value = target.value.slice(0, -1)
    }
}
function tipAmountCalc(b,t,nOP){
    return ((b*t)/100)/nOP;
};
function totalCalc(b,t,nOP){
    return (b/nOP)+(((b*t)/100)/nOP);
};

function lastFunction(b,t,nOP){
    let totalTip = tipAmountCalc(b,t,nOP);
    let totalPrice = totalCalc(b,t,nOP);
    console.log(totalTip, totalPrice);
    tipAmount.textContent="$"+totalTip.toFixed(2);
    total.textContent="$"+totalPrice.toFixed(2);
}


// REVISAR
// resultados sin NaN al quedar en 0, que se imprima $0.00 en el resultado
// resultados sin infinity
// reiniciar contador al reiniciar la pagina
