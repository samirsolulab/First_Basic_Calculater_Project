const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];
//Gets input from input field
function getUserNumberInput(){
  return parseInt(userInput.value);
}


//Generate and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalculation, calcNumber){
  const calcDescription =`${resultBeforeCalculation} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file

}

function writeToLog(
  operationIdentifier,prevResult,operationNumber, newResult)
  {
    const logEntry = {
      operation : operationIdentifier,
      prevResult : prevResult,
      number : operationNumber,
      result : newResult,      
    };
    logEntries.push(logEntry);
    console.log(logEntries);


}

// function add() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult  += enterdNumber;
//   // We have created here one object
   
//   createAndWriteOutput('+',initialResult,enterdNumber);
//   writeToLog('add', initialResult, enterdNumber, currentResult);
// }

// function subtract(){
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult -= enterdNumber;
//   createAndWriteOutput('-',initialResult,enterdNumber);
//   writeToLog('subtract', initialResult, enterdNumber, currentResult);
// }
// function multiply(){
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult *= enterdNumber;
//   createAndWriteOutput('*',initialResult,enterdNumber)
//   writeToLog('multiply', initialResult, enterdNumber, currentResult);
// }
// function divide(){
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult /= enterdNumber;
//   createAndWriteOutput('/',initialResult,enterdNumber);
//   writeToLog('divide', initialResult, enterdNumber, currentResult);
// }


// By using Bind Method

function calculate(operation){
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === 'ADD'){
    currentResult  += enterdNumber;
    operator = '+';
  }else if(operation === 'SUBTRACT'){
    currentResult  -= enterdNumber;
    operator = '-';
  }else if(operation === 'MULTIPLY'){
    currentResult  *= enterdNumber;
    operator = '*';
  }else {
    currentResult  /= enterdNumber;
    operator = '/';
  }
  createAndWriteOutput(operator,initialResult,enterdNumber);
  writeToLog(operator, initialResult, enterdNumber, currentResult);
}

addBtn.addEventListener('click', calculate.bind(this,'ADD'));
subtractBtn.addEventListener('click',  calculate.bind(this,'SUBTRACT'));
multiplyBtn.addEventListener('click',  calculate.bind(this,'MULTIPLY'));
divideBtn.addEventListener('click',  calculate.bind(this,'DIVIDE'));