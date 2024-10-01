function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBackgroundColor(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text =element.innerText;
    return text;
}
function getTextElementzValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}
function setTextElementById(elementId ,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const radomNumber = Math.random() * 25;
    const index = Math.round(radomNumber);

    const alphabet = alphabets[index];
    return (alphabet);
}
 