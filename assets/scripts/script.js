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




