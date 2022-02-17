

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

//replace final vlaue
replaseText("Total-Expenses", totalExpenses);
replaseText("Total-Balance", FinalBalance);

//save section started

    if(totalIncomeN >0){
        
    document.getElementById('save-btn').addEventListener('click',function(){
    const totalIncomeN = getvalue("Income-input" , false);
    const saveInput = getvalue('save-input',false);
    const percent = (totalIncomeN / 100) * saveInput;
    console.log(FinalBalance);
    })
    }

});




//function replaseText(inputX, newValue)
