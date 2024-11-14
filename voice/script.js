let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let button = document.querySelector("button");

// Update voices when they change
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// Change voice when select option changes
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

// Start speaking when button is clicked
button.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});