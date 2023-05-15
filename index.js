let studioImages;
let studioDisplay;
let studioWallpaper;
let macStudio;
let studioTitle;

function onScroll() {
    // Images
    let percent = Math.min(Math.max((studioImages.getBoundingClientRect().top / window.outerHeight - 0.4) * 2, 0), 1);
    let dist = window.outerWidth * percent;
    studioDisplay.style.transform = "translateX(" + -dist + "px)";
    studioDisplay.style.opacity = 1 - percent * 2;
    macStudio.style.transform = "translateX(" + dist + "px)";
    macStudio.style.opacity = 1 - percent * 2;
    
    // Screen Parallax
    let rect = studioWallpaper.getBoundingClientRect();
    percent = Math.min(Math.max((rect.bottom / (window.outerHeight + rect.height)), 0), 1)
    dist = percent * 100;
    studioWallpaper.style.backgroundPosition = "50% " + dist + "%"

    // Title
    percent = Math.min(Math.max((studioTitle.getBoundingClientRect().top / window.outerHeight - 0.35) * 3, 0), 1);
    dist = percent * 200;
    studioTitle.style.transform = "translateY(" + dist / 2 + "px) scale(" + (1 + percent / 2) + ")";
}

window.addEventListener("load", () => {
    studioImages = document.querySelector(".studio-images")
    studioDisplay = document.querySelector(".studio-display");
    studioWallpaper = document.querySelector(".studio-wallpaper");
    macStudio = document.querySelector(".mac-studio");
    studioTitle = document.querySelector(".studio h2");
    
    onScroll();
    window.addEventListener("scroll", onScroll);
})
