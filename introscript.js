const colors = [
    "rgba(226, 239, 44, 0.5)",  // Red with 50% transparency
    "rgba(104, 244, 104, 0.5)",  // Green with 50% transparency
    "rgba(98, 240, 195, 0.5)",  // Blue with 50% transparency
    "rgba(244, 149, 232, 0.5)", // Yellow with 50% transparency
    "rgba(238, 122, 126, 0.5)", // Brown with 50% transparency
    "rgba(233, 153, 73, 0.5)", // White with 50% transparency
];
let colorindex=0;

function changeBackground(){
    document.body.style.backgroundColor=colors[colorindex];
    
    colorindex=[colorindex+1]%colors.length;

}
changeBackground();

setInterval(changeBackground,2000);

/*const borderc=[[ #ff6347, #ff7e5f, #feb47b], [ #3498db, #8e44ad, #9b59b6],[ #2ecc71, #1abc9c, #16a085]];
let index=0;
const rectangle=document.getElementsByClassName('rectangle-box')
const style = window.getComputedStyle(rectangle);
console.log(style.borderColor)*/