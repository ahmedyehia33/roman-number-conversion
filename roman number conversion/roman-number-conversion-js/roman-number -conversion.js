const numberInput = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const result = document.getElementById('output');
const inputVal = numberInput.value;

//function to convert
function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];

  let result = '';

  for (const pair of romanNumerals) {
    while (num >= pair.value) {
      result += pair.numeral;
      num -= pair.value;
    }
  }

  return result;}

  //end of it  


const convertor = (event)=>{ if (event && event.type === 'keydown' && event.key !== 'Enter') {
    return;}
    
    {result.style.display= 'flex';
 const inputVal = parseInt(numberInput.value);
 if (inputVal >= 1 && inputVal <=3999){const finalResult = convertToRoman(inputVal);
result.innerText = finalResult
result.style.fontSize = '3rem'
result.style.backgroundColor = 'rgb(59,59,79)';
//result.style.color = 'rgb (245,246,247)';
result.style.setProperty("color", "rgb (245,246247)", "important")

result.style.border = '4px solid rgb (228,229,232)'

 }
else if (isNaN(inputVal)|| inputVal === 0){
    result.innerText = "Please enter a valid number.";
    result.style.backgroundColor = 'rgba(255,173,173,255)';
    result.style.border = '4px solid rgb(133,0,0)';
    result.style.color = 'rgb(133,0,0)'

}
else if (inputVal < 1) {
    result.innerText = "Please enter a number greater than or equal to 1";
      result.style.backgroundColor = 'rgba(255,173,173,255)';
    result.style.border = '4px solid rgb(133,0,0)';
    result.style.color = 'rgb(133,0,0)';
    result.style.fontSize = '2rem'

}
else if (inputVal >= 4000){
  result.innerText = 'Please enter a number less than or equal to 3999';
  result.style.backgroundColor = 'rgba(255,173,173,255)';
    result.style.border = '4px solid rgb(133,0,0)';
    result.style.color = 'rgb(133,0,0)';
    result.style.fontSize= ' 2rem';

}

}

};
btn.addEventListener('click', convertor);
numberInput.addEventListener('keydown', convertor);
