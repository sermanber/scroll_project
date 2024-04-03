const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

//Если добавлять или убирать ссылки в/из контэйнера, то высота каскадного меню подстраивается под кол-во ссылок

toggleBtn.addEventListener('click', function(){
    // links.classList.toggle('show-links');
    const linksHeight = links.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    
    if(linksContainerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        linksContainer.style.height = 0;
    }    
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    }
    else {
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        topLink.classList.add('show-toplink');
    }
    else {
        topLink.classList.remove('show-toplink')
    }
});

const scrolLinks = document.querySelectorAll('.scroll-link');

scrolLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains('fixed-nav');
        
        let position = element.offsetTop - navHeight + 1;
        
        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 100){
            position = position + containerHeight;
        }
        
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});

const btnWhite = document.querySelector('.btn-white');
const tours = document.getElementById('tours');

btnWhite.addEventListener('click', function(e){
    e.preventDefault();
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    const containerHeight = linksContainer.getBoundingClientRect().height;

    let position = tours.offsetTop - navHeight + 1;
    // console.log(position);
    if(!fixedNav){
        position = position - navHeight;
    }
    if(navHeight > 85){
        position = position + containerHeight;
    }
    // console.log(position);
    window.scrollTo({
        left: 0,
        top: position,
    });
    linksContainer.style.height = 0;
})
