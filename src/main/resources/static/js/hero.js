"use strict";
// floating-hero-area-images
let heroAreaGraphicDiv = document.querySelector(".hero-area-graphic");



// pointing man
const pointingPerson = new Image(450);
pointingPerson.src = "../../img/pointingPerson33.png";
pointingPerson.classList.add("pointing-man-animation");

// floating woman
const floatingWoman = new Image(525);
floatingWoman.src = "../../img/MetaverseGirl(1).png";
floatingWoman.classList.add("floating-woman-animation");

// leaning man
const leaningMan = new Image(450);
leaningMan.src = "../../img/3d-Metaverse-man(2).png";
leaningMan.classList.add("leaning-man-animation");

// diving woman
const divingWoman = new Image(505);
divingWoman.src = "../../img/Metaverse Girl (4).png";
divingWoman.classList.add("diving-woman-animation");

// array of image objects
let floatingHeroAreaImages = [pointingPerson, floatingWoman, leaningMan, divingWoman];

// random image generator (from floatinghero-areaImages array)
let setFloatingHeroAreaImage = () => {
    let randNum = Math.floor(Math.random() * 4);
    heroAreaGraphicDiv.appendChild(floatingHeroAreaImages[Math.floor(Math.random() * 4)])
};

setFloatingHeroAreaImage();
console.log("do i work!!!!!")

// TODO: REALLY COOL EFFECT - DON'T DELETE , MIGHT USE
// let setNum = 0
// hero-areaGraphicDiv.appendChild(floatinghero-areaImages[setNum]);
// setInterval(()=>{
//     hero-areaGraphicDiv.appendChild(floatinghero-areaImages[setNum]);
//
//     setNum++
//     if(setNum > 3){
//         setNum = 0;
//     }
// },2000);