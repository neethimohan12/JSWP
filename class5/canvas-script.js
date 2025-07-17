const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.getElementById('clearCanvas');
const colorPicker = document.getElementById('colorPicker');
let isDrawing = false;
// Start drawing
canvas.addEventListener('mousedown', function(e) {
isDrawing = true;
ctx.beginPath();
ctx.moveTo(e.offsetX, e.offsetY);
});
// Draw as mouse moves
canvas.addEventListener('mousemove', function(e) {
if (isDrawing) {
ctx.strokeStyle = colorPicker.value;
ctx.lineWidth = 3;
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
}
});

// Stop drawing

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseleave', () => isDrawing = false);
// Clear canvas
clearBtn.addEventListener('click', () => {
ctx.clearRect(0, 0, canvas.width, canvas.height);
});