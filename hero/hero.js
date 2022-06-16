"use strict";
// floating-hero-images
let heroGraphicDiv = document.querySelector(".hero-graphic");



// pointing man
const pointingPerson = new Image(450);
pointingPerson.src = "hero/img/pointingPerson33.png";
pointingPerson.classList.add("pointing-man-animation");

// floating woman
const floatingWoman = new Image(525);
floatingWoman.src = "hero/img/MetaverseGirl(1).png";
floatingWoman.classList.add("floating-woman-animation");

// leaning man
const leaningMan = new Image(450);
leaningMan.src = "hero/img/3d-Metaverse-man(2).png";
leaningMan.classList.add("leaning-man-animation");

// diving woman
const divingWoman = new Image(505);
divingWoman.src = "hero/img/Metaverse Girl (4).png";
divingWoman.classList.add("diving-woman-animation");

// array of image objects
let floatingHeroImages = [pointingPerson, floatingWoman, leaningMan, divingWoman];

// random image generator (from floatingHeroImages array)
let setFloatingHeroImage = () => {
    let randNum = Math.floor(Math.random() * 4);
    heroGraphicDiv.appendChild(floatingHeroImages[Math.floor(Math.random() * 4)])
};

// function call
setFloatingHeroImage();

// for of loop
// create a counter
// go through array and update counter



// setInterval(()=>{
//
//     heroGraphicDiv.removeChild(floatingHeroImages[setNum]);
//     setNum++
//     if(setNum > 3){setNum = 0;}
//     else(heroGraphicDiv.appendChild(floatingHeroImages[setNum]))
// },2000);
 // .lemgth = 4
// let arrayCurrNum = 0;
// let arrayPrevNum = 0;
// heroGraphicDiv.appendChild(floatingHeroImages[0]); // image 0


// for(let i = 0; i < floatingHeroImages.length; i++){
//     if(i < floatingHeroImages.length){
//
//         setInterval(()=>{
//
//      // remove image 3
// }

// setInterval(()=>{
//
//     do {
//
//
//         arrayPrevNum = arrayCurrNum; // prevnum = 3
//         heroGraphicDiv.removeChild(floatingHeroImages[arrayPrevNum]); // remove image 3
//
//         arrayCurrNum += 1; // currnum now = 4
//         heroGraphicDiv.appendChild(floatingHeroImages[arrayCurrNum]); //add image 3
//
//
//         if(arrayCurrNum >= floatingHeroImages.length){ // 3 is greater then 4
//         arrayCurrNum= 0;
//             console.log(arrayCurrNum);
//     }
//
//     } while (arrayCurrNum <= floatingHeroImages.length); //currnum = 3 greater than or equal to 4
// },2000);





// TODO: REALLY COOL EFFECT
// let setNum = 0
// heroGraphicDiv.appendChild(floatingHeroImages[setNum]);
// setInterval(()=>{
//     heroGraphicDiv.appendChild(floatingHeroImages[setNum]);
//
//     setNum++
//     if(setNum > 3){
//         setNum = 0;
//     }
// },2000);