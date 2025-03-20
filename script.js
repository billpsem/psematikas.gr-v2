const userAgent = navigator.userAgent.toLowerCase();
const emptySpace = document.querySelector(".empty-space");

if (userAgent.includes("opr") || userAgent.includes("opera")) {
    emptySpace.style.paddingTop = "90px";
    emptySpace.style.paddingBottom = "90px"; // Opera GX
} else if (userAgent.includes("edg")) {
    emptySpace.style.paddingTop = "240px";
    emptySpace.style.paddingBottom = "240px"; // Microsoft Edge
} else if (userAgent.includes("chrome")) {
    emptySpace.style.paddingTop = "240px";
    emptySpace.style.paddingBottom = "240px"; // Google Chrome
}
