const infoButtons = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoButtons) {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.parentNode.querySelector('.info-hint').classList.toggle('none')
    })
}

document.addEventListener('click', () => {
    
    for (let hint of infoHints) {
        hint.classList.add('none');
        hint.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    }
 })