const copyBtn = document.querySelector('button')

const textarea = document.querySelector('textarea');

copyBtn.addEventListener ('click' , () => {
textarea.select()
var textval = textarea.value;
navigator.clipboard.writeText(textval)
copyBtn.innerHTML = 'کپی شد!'
copyBtn.style.background = '#03A9F4'
setTimeout(() => {
    copyBtn.innerHTML = 'کپی کن'
    copyBtn.style.background = '#region '
}, 1500);
})