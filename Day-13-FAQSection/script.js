const accordians = document.querySelectorAll(".accordian");

accordians.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener("click", () => {
        if (icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        } else {
            // Close all other accordions
            accordians.forEach(item => {
                item.querySelector('.icon').classList.remove('active');
                item.querySelector('.answer').style.maxHeight = null;
            });

            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});
