const links = document.querySelectorAll('.nav-link');

// adding scroll feature to navbar 
let scrollInterVal;
for (let link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const destinationID = link.getAttribute('href');
        const destination = document.querySelector(destinationID);
        scrollInterVal = setInterval(scrollVertically, 40, destination);
    });
}

const scrollVertically = (destination) => {
    let targetPos = destination.getBoundingClientRect().top;
    if (targetPos <= 0) {
        clearInterval(scrollInterVal);
        return;
    }
    window.scrollBy(0, 50);
}


