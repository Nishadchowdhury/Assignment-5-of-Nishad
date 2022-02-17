

// getting value
function getvalue(input,check){
    let getInput = document.getElementById(input);
    const getInputN = parseFloat(getInput.value);

   if(check == true ){
       if(!isNaN(getInputN)){
         return parseFloat(getInput.value);
        }
        else if (isNaN(getInputN)){
            getInput.value = '';
            return 0;
        }
   }else if((isNaN(getInputN)) && (check == false)){
       getInput.value = '';
       return 0;
   }else if((!isNaN(getInputN)) && (check == false)){
    return getInputN;    
   }
   
}

//getting sum
function sum(){
    let sumOf = 0;
    for(const n of arguments){
      sumOf = sumOf + n;
    }
    return sumOf;
}

// get and replase value of textHolder 
function replaseText(inputX, newValue){
    const getElement = document.getElementById(inputX);
    getElement.innerText = newValue;
}


document.getElementById('calculate-btn').addEventListener('click' , function(){
const totalIncomeN = getvalue("Income-input" , false);
const foodSpent = getvalue('Food-input', true);
const rentSpant = getvalue('Rent-input', true);
const clothesSpent = getvalue('Clothes-input', true);


const totalExpenses = sum(foodSpent , rentSpant , clothesSpent);
const FinalBalance = totalIncomeN - totalExpenses;

if(totalIncomeN < 0){
    alert("plese , don't put Negative value ")
}

if(FinalBalance < 0 && FinalBalance != " "){
   
    document.getElementById('Food-input').value = '';
    document.getElementById('Rent-input').value = '';
    document.getElementById('Clothes-input').value = ''; 
    alert("plese , don't try to spent more than you income")
}else{
//replace final vlaue
replaseText("Total-Expenses", totalExpenses);
replaseText("Total-Balance", FinalBalance);

}

//save section started

    if(totalIncomeN == '' || totalIncomeN > 0){
        
    document.getElementById('save-btn').addEventListener('click',function(){
    const saveInput = getvalue('save-input',false);
    const percent = (totalIncomeN / 100) * saveInput;
    const remeining = FinalBalance - percent;
    
    const saveoutput = document.getElementById('Total-saveing');
    const remeiningBalance = document.getElementById('Total-remaining');

    if(remeining < 0){
        alert("you don't have enough money , to save .")
    }else if(percent < 0){
        alert("plese , don't put Negative number to calculate saving")
    }
    else{
        
    remeiningBalance.innerText = remeining;
    saveoutput.innerText = percent;
    }})}
});




//function replaseText(inputX, newValue)
