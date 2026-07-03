// main JS
document.addEventListener('DOMContentLoaded',()=>{console.log('Project loaded')})
console.log("JS is running!");

const img = document.getElementById("map");
const output = document.getElementById("output");

// Guard against missing elements so script doesn't throw
if (img && output) {
    img.addEventListener("mousemove", (e) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        output.innerText = `X: ${Math.floor(x)}, Y: ${Math.floor(y)}`;
    });
} else {
    console.warn('Map image or output element not found', { img, output });
}

//const img = document.querySelector("img");