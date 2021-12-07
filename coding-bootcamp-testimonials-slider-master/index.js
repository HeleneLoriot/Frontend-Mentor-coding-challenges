const slideElmt = document.querySelectorAll('.slide');
const buttonElmts = document.querySelectorAll('.button');

// since we only have 2 slides, toggle the hidden class on click or on arrow-right/left keyboard event
const toggleHiddenSlide = (event) => {
    if(event.type === 'click' || event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        for (const element of slideElmt) {
            element.classList.toggle('slide--hidden');
        }
    }   
}

for (const buttonElmt of buttonElmts) {
    buttonElmt.addEventListener('click', toggleHiddenSlide)
}

document.addEventListener('keyup', toggleHiddenSlide);
