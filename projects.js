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



function filterImages(category){
    const imageContainers = document.querySelectorAll('.projects_box');
    
    imageContainers.forEach(container => {
        if (container.classList.contains(category)){
            container.style.display = 'flex'
            container.style.opacity = '1'
            enableImages(container)
        } else{
            container.style.display = 'none'
            container.style.opacity = '0'
            disableImages(container)
        }
    });
}

function enableImages(container){
    const images = container.querySelectorAll('.projects_img')
    images.forEach(image =>{
        image.removeAttribute('disabled')
    })
}

function disableImages(container){
    const images = container.querySelectorAll('.projects_img')
    images.forEach(image =>{
        image.setAttribute('disabled', true)
    })
}