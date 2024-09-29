const themeSelector = document.querySelector("#theme-select");

function changeTheme() {    
    const selectedTheme = themeSelector.value;    
    const body = document.body;     
    const logo = document.querySelector(".image");
    
    if (selectedTheme === "dark") {        
        body.classList.add("dark");   
        logo.src = "images/byui-logo_white.png";
    } else {        
        body.classList.remove("dark");      
        logo.src = "images/byui-logo_blue.webp";
    }
}

themeSelector.addEventListener('change', changeTheme);
