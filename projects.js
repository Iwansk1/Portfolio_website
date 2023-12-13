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
    })
}

function disableImages(container){
    const images = container.querySelectorAll('.projects_img')
    images.forEach(image =>{
        image.setAttribute('disabled', true)
    })
}