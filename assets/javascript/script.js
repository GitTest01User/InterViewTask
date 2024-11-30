
document.querySelectorAll('.box .top-box').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const radio = item.querySelector('input[type="radio"]');
        radio.checked = true;
    });

    item.addEventListener('mouseleave', () => {
        const radio = item.querySelector('input[type="radio"]');
        radio.checked = false;
    });
});

document.querySelectorAll('.box .middie-box').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const radio = item.querySelector('input[type="radio"]');
        radio.checked = true;
    });

    item.addEventListener('mouseleave', () => {
        const radio = item.querySelector('input[type="radio"]');
        radio.checked = false;
    });
});
document.querySelectorAll('.box .bottom-box').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const radio = item.querySelector('input[type="radio"]');
        radio.checked = true;
    });

    item.addEventListener('mouseleave', () => {
        const radio = item.querySelector('input[type="radio"]');
        radio.checked = false;
    });
});

