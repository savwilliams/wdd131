const menuButton = document.querySelector(".button");
function toggleMenu(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide")    
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");    
    if (window.innerWidth > 1000) {        
        menu.classList.remove("hide");
    } else {        
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);
handleResize();


function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer viewer-button">X</button>
      <img class="viewer-img" src="${pic}" alt="${alt}">
      </div>`;
  }

document.querySelector(".gallery").addEventListener("click", viewHandler);

function  viewHandler(event){
    let clickedElement = event.target;
    let imgSrc = clickedElement.src;
    let imgSrcPart = imgSrc.split("-");
    let newImgSrc = imgSrcPart[0] + "-full.jpg";
    let viewerHtml = viewerTemplate(newImgSrc, clickedElement.alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHtml)
    let closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer(){
    let viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}