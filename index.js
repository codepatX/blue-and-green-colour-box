const colorDiv = document.getElementById('colors');



colorDiv.addEventListener('click', () => {
    if (colors.style.backgroundColor === 'blue') {
        colors.style.backgroundColor = 'green';
    } else {
        colors.style.backgroundColor = 'blue';
    }
});


