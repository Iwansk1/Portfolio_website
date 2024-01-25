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


function showAllImages(contaniner){
    const images = document.querySelectorAll('.projects_box')
    images.forEach(image =>{
        image.style.display = 'flex'
        image.style.opacity = '1'
    })
}
function filterImages(category){
    const imageContainers = document.querySelectorAll('.projects_box');
    
    imageContainers.forEach(container => {
        if (container.classList.contains(category)){
            container.style.display = 'flex'
            enableImages(container)
        } else{
            container.style.display = 'none'
            disableImages(container)
        }
    });
}

function enableImages(container){
    const images = container.querySelectorAll('.projects_img')
    images.forEach(image =>{
        image.removeAttribute('disabled')
        container.style.opacity = '1'
        setTimeout(() => {
            container.style.opacity = '1';
        }, 50);
    })
}

function disableImages(container){
    const images = container.querySelectorAll('.projects_img')
    images.forEach(image =>{
        image.setAttribute('disabled', true)
        container.style.opacity = '0'
        setTimeout(() => {
            container.style.opacity = '0';
        }, 150);
    })
}