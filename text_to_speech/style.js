const textarea = document.querySelector("textarea")
const button = document.querySelector("button")
let  isSpeaking = true

const textToSpeech = () =>
    {
    const synth = window.speechSynthesis;
    const text = textarea.value;
     if(!synth.speaking && text)
    {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
        
     }
     setInterval(()=>{
     if(!synth.speaking && !isSpeaking)
     {
        isSpeaking = true;
        button.innerText = "Convert To Speech";
     }})
    if(synth.speaking && isSpeaking)
    {
        button.innerText = "Pause";
        synth.resume();
        isSpeaking = false 
    }
    else{
        button.innerText = "Resume";
        synth.pause();
        isSpeaking = true;
    }

}
button.addEventListener('click', textToSpeech);

