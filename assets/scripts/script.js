// Random background color on top container
// const top_container = document.querySelector('.top-container');
// const colors = ['#EEF384', '#c58c85', '#DFE6E6', '#AFD297', '#CA7E8D'];

// const random_num = Math.floor((Math.random() * colors.length));
// console.log(random_num);

// top_container.style.background = `radial-gradient(rgb(197, 184, 184), ${colors[random_num]})`;

// Onclick Functions
function pictureClick(pictureClass, imageContainerClass){
    // Change picture when clicked - Spring
    const pictures = document.querySelectorAll(pictureClass);
    const image_container = document.querySelector(imageContainerClass);

    let counter = 1;

    for(let i = 1; i < pictures.length; i++){
        pictures[i].style.opacity = '0';
    }

    image_container.addEventListener('click', () => {
        if(pictures.length == 3){
            if(counter == 1){
                pictures[1].style.animation = "fade-in 0.7s forwards ease-in";
                pictures[0].style.animation = "fade-out 0.7s forwards ease-out";
                counter++;
            }else if(counter == 2){
                pictures[2].style.animation = "fade-in 0.7s forwards ease-in";
                pictures[1].style.animation = "fade-out 0.7s forwards ease-out";
                counter++;
            }else{
                pictures[0].style.animation = "fade-in 0.7s forwards ease-in";
                pictures[2].style.animation = "fade-out 0.7s forwards ease-out";
                counter = 1;
            }
        }else{
            if(counter == 1){
                pictures[1].style.animation = "fade-in 0.7s forwards ease-in";
                pictures[0].style.animation = "fade-out 0.7s forwards ease-out";
                counter++;
            }else if(counter == 2){
                pictures[2].style.animation = "fade-in 0.7s forwards ease-in";
                pictures[1].style.animation = "fade-out 0.7s forwards ease-out";
                counter++;
            }else if(counter == 3){
                pictures[3].style.animation = "fade-in 0.7s forwards ease-in";
                pictures[2].style.animation = "fade-out 0.7s forwards ease-out";
                counter++;
            }else{
                pictures[0].style.animation = "fade-in 0.7s forwards ease-in";
                pictures[3].style.animation = "fade-out 0.7s forwards ease-out";
                counter = 1;
            }
        }
    });
}

pictureClick('.spring-content .picture', '.spring-content .image-container');
pictureClick('.summer-content .picture', '.summer-content .image-container');
pictureClick('.autumn-content .picture', '.autumn-content .image-container');
pictureClick('.winter-content .picture', '.winter-content .image-container');

const men = document.querySelector('.men');
const women = document.querySelector('.women');
const kids = document.querySelector('.kids');
const arrowMen = document.querySelector('.men .fas');
const arrowWomen = document.querySelector('.women i');
const arrowKids = document.querySelector('.kids i'); 

const men_dropdown = document.querySelector('.men-clothings');
const men_dropdown_list = document.querySelectorAll('.men-clothings li');

const women_dropdown = document.querySelector('.women-clothings');
const women_dropdown_list = document.querySelectorAll('.women-clothings li');

const kids_dropdown = document.querySelector('.kids-clothings');
const kids_dropdown_list = document.querySelectorAll('.kids-clothings li');

men.addEventListener('click', (event) => {
    event.preventDefault();

    // Arrow animation
    arrowMen.classList.toggle('arrow-animate');

    if(!men_dropdown.classList.contains('dropdown-active') && !men_dropdown.classList.contains('dropdown-inactive')){
        men_dropdown.classList.add('dropdown-active');
    }else if(men_dropdown.classList.contains('dropdown-active')){
        men_dropdown.classList.add('dropdown-inactive');
        men_dropdown.classList.remove('dropdown-active');
    }else if(men_dropdown.classList.contains('dropdown-inactive')){
        men_dropdown.classList.add('dropdown-active');
        men_dropdown.classList.remove('dropdown-inactive');
    }

    men_dropdown_list.forEach((elem,index) => {
        if(elem.style.animation){
            elem.style.animation = "";
        }else{
            elem.style.animation = `dropdown-list-animation 0.7s ${index / 7}s ease forwards`;
        }
    })
});


women.addEventListener('click', (event) => {
    event.preventDefault();

    arrowWomen.classList.toggle('arrow-animate');

    if(!women_dropdown.classList.contains('dropdown-active') && !women_dropdown.classList.contains('dropdown-inactive')){
        women_dropdown.classList.add('dropdown-active');
    }else if(women_dropdown.classList.contains('dropdown-active')){
        women_dropdown.classList.add('dropdown-inactive');
        women_dropdown.classList.remove('dropdown-active');
    }else if(women_dropdown.classList.contains('dropdown-inactive')){
        women_dropdown.classList.add('dropdown-active');
        women_dropdown.classList.remove('dropdown-inactive');
    }

    women_dropdown_list.forEach((elem,index) => {
        if(elem.style.animation){
            elem.style.animation = "";
        }else{
            elem.style.animation = `dropdown-list-animation 0.7s ${index / 7}s ease forwards`;
        }
    })
})


kids.addEventListener('click', (event) => {
    event.preventDefault();

    arrowKids.classList.toggle('arrow-animate');

    if(!kids_dropdown.classList.contains('dropdown-active') && !kids_dropdown.classList.contains('dropdown-inactive')){
        kids_dropdown.classList.add('dropdown-active');
    }else if(kids_dropdown.classList.contains('dropdown-active')){
        kids_dropdown.classList.add('dropdown-inactive');
        kids_dropdown.classList.remove('dropdown-active');
    }else if(kids_dropdown.classList.contains('dropdown-inactive')){
        kids_dropdown.classList.add('dropdown-active');
        kids_dropdown.classList.remove('dropdown-inactive');
    }

    kids_dropdown_list.forEach((elem,index) => {
        if(elem.style.animation){
            elem.style.animation = "";
        }else{
            elem.style.animation = `dropdown-list-animation 0.7s ${index / 7}s ease forwards`;
        }
    })
})