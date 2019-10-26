const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach(button => button.addEventListener('click', toggleButton));

function toggleButton(event) {
    const text = event.target.parentNode.children[1];
    console.log(text.style.display)
if (text.style.display === "none" || !text.style.display) {
    text.style.display = "block";
   
} else {
   text.style.display = "none";
}
}




