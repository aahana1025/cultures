// main JS
document.addEventListener('DOMContentLoaded',()=>{console.log('Project loaded')})
function text(e){
    coordinate.setText("(" + e.getX() + "," + e.getY() + ")");
    coordinate.setPosition(e.getX(), e.getY());
    coordinate.setColor(Color.black);
}