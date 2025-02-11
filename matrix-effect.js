const matrixCanvas = document.querySelector('.matrix');
const ctx = matrixCanvas.getContext('2d');

function resizeCanvas() {
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const letters = Array(256).join(1).split('');

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = '15pt monospace';

    letters.map((y_pos, index) => {
        const text = String.fromCharCode(3e4 + Math.random() * 33);
        const x_pos = index * 15;
        ctx.fillText(text, x_pos, y_pos);
        letters[index] = y_pos > matrixCanvas.height + Math.random() * 1e4 ? 0 : y_pos + 15;
    });

    requestAnimationFrame(draw);
}

draw();
