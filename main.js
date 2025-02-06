
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
const inputEl = document.getElementById("text-input");
const checkPalindorm = () => {

  const textInputValue = document.getElementById("text-input").value;
  const word = textInputValue.replace(/[!@#$%^&*()_+={}\[\]:;"'<>,.?\/\\|-\s]/g,"");
  const reversedWord = word.split('').reverse().join('');

  let resultText;
    if(word.length === 0){
    alert("Please input a value");
  }else{
     if(word.toLowerCase() === reversedWord.toLowerCase()){
    resultText = `${textInputValue} is a palindrome`;
    }else{
    resultText = `${textInputValue} is not a palindrome`;
    }
    result.innerText = resultText;
  }
}

checkBtn.addEventListener("click",checkPalindorm);
inputEl.addEventListener("keydown",(e)=>{
  if(e.key === "Enter"){
    checkPalindorm();
    console.log(e)
  }
});
