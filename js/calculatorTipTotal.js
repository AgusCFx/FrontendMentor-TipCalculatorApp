let billInit = 0;
const bill = document.getElementById('bill');
let tipInit = 0;
const tip = document.querySelectorAll('.tipBox__box');
const tipCustom = document.getElementById('tipCustom');
let numberOfPeopleInit = 1;
const numberOfPeople = document.getElementById('numberOfPeople');
const resetBtn = document.getElementById('resetBtn');

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

//------------- reset
resetBtn.addEventListener('click',(e)=>{
    bill.value = "";
    billInit = 0;
    tipCheck.classList.remove('tipBox__box-checked');
    tipInit = 0;
    tipCustom.value = "";
    numberOfPeople.value = "";
    numberOfPeopleInit = 1;
})

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
    if(!totalPrice){
        tipAmount="$0.00";
        total.textContent="$0.00";    
    }else{
        tipAmount.textContent="$"+totalTip.toFixed(2);
        total.textContent="$"+totalPrice.toFixed(2);
    }
}
