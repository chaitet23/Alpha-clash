function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
    }
    function showElementById(elementId){
        const element=document.getElementById(elementId);
        element.classList.remove('hidden');
    }
    function getARandomAlphabet(){
        const alphabetString ='abcdefghijklmnopqrstuvwxyz';
        const alphabets = alphabetString.split('');
       
        const radomNumber =Math.random()*25;
        const index = Math.round(radomNumber);
       
        const alphabet =alphabets[index];
        return(alphabet);


    }