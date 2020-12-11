// Random background color on top container
const top_container = document.querySelector('.top-container');
const colors = ['#EEF384', '#c58c85', '#DFE6E6', '#AFD297', '#CA7E8D'];

const random_num = Math.floor((Math.random() * colors.length));
console.log(random_num);

top_container.style.background = `radial-gradient(rgb(197, 184, 184), ${colors[random_num]})`;



// Change picture when clicked
const pictures = document.querySelectorAll('.spring-content .picture');
const image_container = document.querySelector('.image-container');

// const pictures_array = [pictures[2], pictures[0], pictures[1]];
let counter = 0;

// Make picture 2 and 3 invisible so picture 1 shows
for(let i = 1; i < pictures.length; i++){
    pictures[i].style.opacity = '0';
}

image_container.addEventListener('click', () => {
    if(counter == 0){
        pictures[1].style.animation = "fade-in 1s forwards ease-in";
        counter += 2;
    }else if(counter == 1){
        pictures[1].style.animation = "fade-in 1s forwards ease-in";
        pictures[0].style.animation = "fade-out 1s forwards ease-out";
        pictures[2].style.animation = "fade-out 1s forwards ease-out";
        counter++;
    }else if(counter == 2){
        pictures[2].style.animation = "fade-in 1s forwards ease-in";
        pictures[1].style.animation = "fade-out 1s forwards ease-out";
        pictures[0].style.animation = "fade-out 1s forwards ease-out";
        counter++;
    }else{
        pictures[0].style.animation = "fade-in 1s forwards ease-in";
        pictures[1].style.animation = "fade-out 1s forwards ease-out";
        pictures[2].style.animation = "fade-out 1s forwards ease-out";
        counter = 1;
    }
});




