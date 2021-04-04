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


const initialiseBar = (bar) => {
    bar.setAttribute('is-visited', false);
    bar.style.width = 0 + '%';
}

for (let bar of progressBars) {
    initialiseBar(bar);
}

const fillBar = (bar) => {
    bar.style.transition = 'all 0.5s linear';
    bar.style.width = bar.getAttribute('value') + '%';
}

window.addEventListener('scroll', () => {
    for (let bar of progressBars) {
        let barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute('data-visited') == 'false') &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }
    }
});



