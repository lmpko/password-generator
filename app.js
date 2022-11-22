// arrays of characters
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const uppercase = ['A',	'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',	'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '"', '\'', '<', ',', '>', '.', '?', '/', ];

// checkbox elements
  const uppercaseCheckbox = document.getElementById("uppercase")
  const lowercaseCheckbox = document.getElementById("lowercase")
  const numbersCheckbox = document.getElementById("numbers")
  const symbolsCheckbox = document.getElementById("symbols")

// picker to lenght of password
  function changeInput(){
    document.getElementById("myRange").oninput = function() {
      //color change input
        let value = (this.value-this.min)/(this.max-this.min)*100
        this.style.background = 'linear-gradient(to right, #2d995b 0%, #2d995b ' + value + '%, rgb(25, 27, 27) ' + value + '%, rgb(25, 27, 27) 100%)'


      //show input value 
        let showValue = this.value;
    
        const characterLenghtValue = document.getElementsByClassName('character-lenght-value');

        characterLenghtValue[0].innerHTML = showValue;
    }
  }

//change tooltip text
  function changeTooltipText(text){
    document.getElementsByClassName('icon')[0].setAttribute('data-tooltip', text);
  }

// copy to clipboard generated password
  function copyToClipboard(){
    const password = document.getElementById("password-finish").innerText
   
    changeTooltipText("Copied!")

    navigator.clipboard.writeText(password);
  }

// update value from checkboxes 
  function updateValue(checkbox){
    if(checkbox.value === "false" ){
        checkbox.value = true
      }else{
        checkbox.value = false
      }
  }

  function updateUppercase(){
      updateValue(uppercaseCheckbox)
    }
    
  function updateLowercase(){
    updateValue(lowercaseCheckbox)
  }

  function updateNumbers(){
    updateValue(numbersCheckbox)
  }

  function updateSymbols(){
    updateValue(symbolsCheckbox)
  }

// change strenght visualization of password
  function changeStrenght(){
    const actualCharLenghtValue = document.getElementsByClassName('character-lenght-value')[0].innerText
    const strenght = document.getElementsByClassName("strenght-text")
    const strenghtRectangles = document.getElementsByClassName("strenght-rectangle")

    if(actualCharLenghtValue <= 8 || 
      
        (uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "false") ||

        (uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "false") ||

        (uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "false") ||

        (uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "true") ||

        (uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "false")
      
      ){
      strenght[0].innerText = "LOW"
      strenghtRectangles[0].style.border = "2px solid #620707"
      strenghtRectangles[0].style.background = "#b92d2d"
      strenghtRectangles[1].style.border = "2px solid grey"
      strenghtRectangles[1].style.background = "rgb(25, 27, 27)"
      strenghtRectangles[2].style.border = "2px solid grey"
      strenghtRectangles[2].style.background = "rgb(25, 27, 27)"
      strenghtRectangles[3].style.border = "2px solid grey"
      strenghtRectangles[3].style.background = "rgb(25, 27, 27)"

    }else if(actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "false" ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "true" ) ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "true" ) ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "false" ) ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "false" ) ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "true" ) ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "false" ) ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "true" ) ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "true" ) ||

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "true" ) || 

        (actualCharLenghtValue > 8 && actualCharLenghtValue <= 14 && uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "true" )
      
      ){
      strenght[0].innerText = "MEDIUM"
      strenghtRectangles[0].style.border = "2px solid rgb(64 57 8)"
      strenghtRectangles[0].style.background = "rgb(155 150 15)"
      strenghtRectangles[1].style.border = "2px solid rgb(64 57 8)"
      strenghtRectangles[1].style.background = "rgb(155 150 15)"
      strenghtRectangles[2].style.border = "2px solid rgb(64 57 8)"
      strenghtRectangles[2].style.background = "rgb(155 150 15)"
      strenghtRectangles[3].style.border = "2px solid grey"
      strenghtRectangles[3].style.background = "rgb(25, 27, 27)"

    }else if(actualCharLenghtValue >= 15 ){
      strenght[0].innerText = "HIGH"
      strenghtRectangles[0].style.border = "2px solid rgb(9 64 8)"
      strenghtRectangles[0].style.background = "rgb(15 155 19)"
      strenghtRectangles[1].style.border = "2px solid rgb(9 64 8)"
      strenghtRectangles[1].style.background = "rgb(15 155 19)"
      strenghtRectangles[2].style.border = "2px solid rgb(9 64 8)"
      strenghtRectangles[2].style.background = "rgb(15 155 19)"
      strenghtRectangles[3].style.border = "2px solid rgb(9 64 8)"
      strenghtRectangles[3].style.background = "rgb(15 155 19)"
    }
    
  }

// generate password
  function getCharactersFromArray(charLenghtValue, array1, array2, array3, array4){
    const pass = document.getElementById("password-finish")
    let generatedArray = array1.concat(array2).concat(array3).concat(array4).sort(() => Math.random() - Math.random()).slice(0, charLenghtValue).join('').toString()
    pass.innerText = generatedArray
  }

//pick lenght and characters from arrays to generate password
function getArrayOfCharacters(){
  const actualCharLenghtValue = document.getElementsByClassName('character-lenght-value')[0].innerText
  if(uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "false"){
    getCharactersFromArray(actualCharLenghtValue,lowercase)

  }else if(uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "true"){
    getCharactersFromArray(actualCharLenghtValue,lowercase,uppercase,symbols)

  }else if(uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "false"){
    getCharactersFromArray(actualCharLenghtValue,uppercase)

  }else if(uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "false"){
    getCharactersFromArray(actualCharLenghtValue,lowercase,uppercase)

  }else if(uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "false"){
    getCharactersFromArray(actualCharLenghtValue,lowercase,uppercase,numbers)

  }else if(uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "true"){
    getCharactersFromArray(actualCharLenghtValue,symbols)

  }else if(uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "true"){
    getCharactersFromArray(actualCharLenghtValue,numbers,symbols)

  }else if(uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "true"){
    getCharactersFromArray(actualCharLenghtValue,lowercase,numbers,symbols)

  }else if(uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "false"){
    getCharactersFromArray(actualCharLenghtValue,uppercase,numbers)

  }else if(uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "true"){
    getCharactersFromArray(actualCharLenghtValue,uppercase,numbers,symbols)
      
  }else if(uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "false"){
    getCharactersFromArray(actualCharLenghtValue,lowercase)
     
  }else if(uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "false"){
    getCharactersFromArray(actualCharLenghtValue,lowercase,numbers)
      
  }else if(uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "true" && symbolsCheckbox.value === "false"){
    getCharactersFromArray(actualCharLenghtValue,numbers)
      
  }else if(uppercaseCheckbox.value === "false" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "true"){
    getCharactersFromArray(actualCharLenghtValue,lowercase,symbols)
      
  }else if(uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "true" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "true"){
    getCharactersFromArray(actualCharLenghtValue,lowercase,uppercase,symbols)
      
  }else if(uppercaseCheckbox.value === "true" && lowercaseCheckbox.value === "false" && numbersCheckbox.value === "false" && symbolsCheckbox.value === "true"){
    getCharactersFromArray(actualCharLenghtValue,uppercase,symbols)
      
  }
}
  
// generate password on click to button
  function generatePassword() {
    changeTooltipText("Copy!")
    changeStrenght()
    getArrayOfCharacters() 
  }

  

