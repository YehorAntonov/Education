let canvas = document.getElementById("canvas");
let colors = document.getElementsByClassName('colors')[0];
let clearButton = document.getElementById('clear');
let saveButton = document.getElementById('save');
let isDrawing = false;
function setMouseCoordinates(event) {
    let bound = canvas.getBoundingClientRect();
    let mX = 0;
    let mY = 0;
    mX = event.clientX - bound.left;
    mY = event.clientY - bound.top;
}

colors.addEventListener('click', function(event) {
    let context = canvas.getContext("2d");
    context.strokeStyle = event.target.value;
});

canvas.addEventListener('mousedown', function(event) {
    let bound = canvas.getBoundingClientRect();
    let context = canvas.getContext("2d");
    mX = event.clientX - bound.left;
    mY = event.clientY - bound.top;
    let thickness = document.getElementById('thickness')
    setMouseCoordinates(event);
    isDrawing = true;
    context.lineWidth = thickness.value
    context.beginPath();
    context.moveTo(mX, mY);
});

canvas.addEventListener('mousemove', function(event) {
    let bound = canvas.getBoundingClientRect();
    let context = canvas.getContext("2d");
    mX = event.clientX - bound.left;
    mY = event.clientY - bound.top;
    setMouseCoordinates(event);
    if(isDrawing){
        context.lineTo(mX, mY);
        context.stroke();
    }
});

canvas.addEventListener('mouseup', function(event) {
    setMouseCoordinates(event);
    isDrawing = false;
});

clearButton.addEventListener('click', function() {
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
});

saveButton.addEventListener('click', function() {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(canvas.toDataURL(), null, 2)], {
        type: "text/plain"
    }));
    a.setAttribute("download", "data.json");
    saveButton.appendChild(a);
    a.click();
    saveButton.removeChild(a);
});








