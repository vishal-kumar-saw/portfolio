const links = document.querySelectorAll('.nav-link');

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
        }, 40);
    })
}
