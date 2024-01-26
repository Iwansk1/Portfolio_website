const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle("open")
  const isOpen = dropDownMenu.classList.contains("open")

  toggleBtnIcon.classList = isOpen
  ? "fa-solid fa-xmark"
  : "fa-solid fa-bars"
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


//! Category selection and image shuffle
//* Function to shuffle images within a container
function shuffleImagesInPlace(container) {
    const images = Array.from(container.children);
    shuffleArray(images);

    container.innerHTML = ''; // Clear the container

    images.forEach(image => {
        container.appendChild(image);
    });
}

//* Reveal all images and shuffle
function showAllImages() {
    const container = document.querySelector('#artstation_container');
    const images = document.querySelectorAll('.maya, .design, .code');
    
    images.forEach(image => {
        image.style.display = 'flex';
        image.style.opacity = '0';
        setTimeout(() => {
            image.style.opacity = '1';
        }, 300);
    });

    shuffleImagesInPlace(container);
}


//* Shows images according to category selected
function filterImages(category, container) {
    const images = document.querySelectorAll('.maya, .design, .code');

    images.forEach(image => {
        if (category === 'all' || image.classList.contains(category)) {
            setTimeout(() => {
                image.style.opacity = '1';
            }, 300);
            image.style.display = 'flex';
        } else {
            image.style.opacity = '0';
            setTimeout(() => {
                image.style.display = 'none';
            }, 300);
        }
    });
}

// Randomize images within a container
function randomizeImages(container) {
    shuffleImagesInPlace(container);
}

const container = document.querySelector('#artstation_container');


randomizeImages(container);
//!



//? Old functions for filtering
/*
function filterImages(category){
    const imageContainers = document.querySelectorAll('.projects_box');
    
    imageContainers.forEach(container => {
        if (container.classList.contains(category)){
            setTimeout(() => {
                container.style.display = 'flex'
                enableImages(container)
            }, 150);
           
        } else{
            setTimeout(() => {
                container.style.display = 'none'
                disableImages(container)
            }, 150);
           
        }
    });
}

function enableImages(container){
    const images = container.querySelectorAll('.projects_img')
    images.forEach(image =>{
        image.removeAttribute('disabled')
        setTimeout(() => {
            container.style.opacity = '1';
        }, 150);
    })
}

function disableImages(container){
    const images = container.querySelectorAll('.projects_img')
    images.forEach(image =>{
        image.setAttribute('disabled', true)
        setTimeout(() => {
            container.style.opacity = '0';
        }, 150);
    })
}
*/
//?