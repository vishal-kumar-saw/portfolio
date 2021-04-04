const links = document.querySelectorAll('.nav-link');

// adding scroll feature to navbar 
for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const destinationID = link.getAttribute('href');
        const destination = document.querySelector(destinationID);
        let targetPos = destination.getBoundingClientRect().y;
        let currentPos = link.getBoundingClientRect().y;
        let scrollInterVal = setInterval(() => {
            if (currentPos >= targetPos) {
                clearInterval(scrollInterVal);
                return;
            }
            currentPos += 50;
            window.scrollBy(0, 50);
        }, 30);
    })
}


// skill bar auto fill

const progressBars = document.querySelectorAll('.skill-bars');
const skillsContainer = document.getElementById('skills-container');

const isVisible = (element) => {
    const position = element.getBoundingClientRect();
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        return true;
    }
    if (position.top < window.innerHeight && position.bottom >= 0) {
        return true;
    }
    return false;
}

let animationDone = false;

const initialiseBars = () => {
    for (let bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

const fillBars = () => {
    for (let bar of progressBars) {
        bar.style.transition = 'all 0.5s linear';
        bar.style.width = bar.getAttribute('value') + '%';
    }
}
initialiseBars();
window.addEventListener('scroll', () => {
    if (!animationDone && isVisible(skillsContainer)) {
        fillBars();
        animationDone = true;
    }

    if (isVisible(document.querySelector('.nav-menu'))) {
        initialiseBars();
        animationDone = false;
    }
});



