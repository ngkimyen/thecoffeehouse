const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//  slider start
const slides = $$('.slide');
const slideBtns = $$('.manual-btn');
const btns = Array.from(slideBtns);
let counter = 1;

btns.forEach( function (btn) {
    btn.onclick = function  () {
        let index = btn.id -1;
        changeSlide(slides,btns,index);
        updateCurrentSlide(btns,index);
        counter = index + 1;
        if (counter >= slides.length ) counter = 0;
    }
})

function changeSlide (slides,btns,index) {
    for ( let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        btns[i].classList.remove("active");
    }
    slides[index].classList.add("active");
    btns[index].classList.add("active");
}

function updateCurrentSlide (btns,index) {
    for ( let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
    btns[index].classList.add("active");
}

setInterval(() => {
    changeSlide(slides,btns,counter);
    counter++;
    if (counter >= slides.length) counter = 0;
}, 3000);

// slider end 


// header 
const userElement = $('.user__img:first-child');
const userOption = $('.user__option');
const closeBtn = $('.user__icon-close');


userElement.onclick = function () {
    display(userOption);
}

closeBtn.onclick = function () {
    hide(userOption);
}


function display (element) {
    element.style.visibility = 'visible';
}

function hide (element) {
    element.style.visibility = 'hidden';
}

// delivery / take away 
const body = $('body');
const delivery = $('.delivery');
const modal1 = $('modal1');

const deliveryWrap = $('.delivery-wrap');
const deliveryOptions = $$('.delivery-item');
const deliveryImgs = $$('.delivery__img');
const deliveryHeadings = $$('.delivery__heading');
const deliveryInputs = $$('.delivery__input');

const overlays = $$('.overlay');

delivery.onclick= function () {
    display(modal1);
    body.style.overflow="hidden";
    deliveryWrap.style.animation="fadeIn 0.3s ease-in ";

}


// delivery modal
deliveryOptions.forEach( (option, index) => {
    option.onclick= function (event) {
        event.stopPropagation();
        addActive(option,deliveryOptions,index);
        for ( let i =0; i < deliveryImgs.length; i++ ) {
            deliveryImgs[i].classList.remove('active')
        }
        deliveryImgs[index].classList.add('active');

        for ( let i =0; i < deliveryHeadings.length; i++ ) {
            deliveryHeadings[i].classList.remove('active')
        }
        deliveryHeadings[index].classList.add('active');
        for ( let i =0; i < deliveryHeadings.length; i++ ) {
            deliveryInputs[i].classList.remove('active')
        }
        deliveryInputs[index].classList.add('active');
    }
})

$$('.delivery__input').forEach( (input,index) => {
    input.onclick = function (e) {
        e.stopPropagation();
    }
})

// suggestion section

const headings = $$('.suggestion__heading');
const suggestions = $$('.suggestion__option');
// console.log(suggestions);


headings.forEach ( (heading,index) => {
    heading.onclick = function () {
        for (let i = 0; i < headings.length; i++) {
            headings[i].classList.remove('active');
            suggestions[i].classList.remove('active');
        }
        heading.classList.add('active');
        suggestions[index].classList.add('active');
    }
})


function addActive (element,parent,index) {
    for (let i = 0; i < parent.length; i++) {
        parent[i].classList.remove('active');
    }
    element.classList.add('active');
}

// store automatic slides
const storeSlides = $$('.store-slide');
const storeBtns = $$('.store-btn');
let storeCounter=1;

setInterval(() => {
    changeSlide(storeSlides,storeBtns,storeCounter);
    storeCounter++;
    if (storeCounter >= storeSlides.length) storeCounter = 0;

}, 3000);

// footer display list 

const infoItems = $$('.info-item__wrap');

infoItems.forEach (infoItem => 
    infoItem.onclick = (e) => {
        const icon = infoItem.querySelector('.fas');
        icon.classList.toggle('fa-minus');
        if (icon.classList.contains('fa-minus')) {
            icon.classList.remove('fa-plus');
        } else icon.classList.add('fa-plus');
        
        const infoList = infoItem.querySelector('.info-list');
        infoList.classList.toggle('active');
    }
)


