(function() {
    console.log("Matrix script loaded");

    const matrixCanvas = document.querySelector('.matrix');
    if (!matrixCanvas) {
        console.error("Canvas element not found in DOM");
        return;  // Exit if no canvas is found
    }

    console.log("Canvas found and ready");

    const ctx = matrixCanvas.getContext('2d');
    if (!ctx) {
        console.error("Failed to get canvas context");
        return;  // Exit if canvas context can't be obtained
    }

    console.log("Canvas context obtained");

    // Resize canvas to fit the window
    function resizeCanvas() {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        console.log("Canvas resized to", matrixCanvas.width, matrixCanvas.height);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();  // Initial resize on page load

    // Initialize columns and drop positions
    const fontSize = 20;
    const columns = Math.floor(matrixCanvas.width / fontSize);
    const drops = Array(columns).fill(1);

    // Drawing the Matrix effect
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';  // Create trailing effect
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        ctx.fillStyle = '#0F0';  // Bright green color for Matrix effect
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, index) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);  // Random Katakana characters
            const x = index * fontSize;

            ctx.fillText(text, x, y * fontSize);

            if (y * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[index] = 0;  // Reset drop to top randomly
            }

            drops[index]++;
        });

        requestAnimationFrame(draw);
    }

    console.log("Starting matrix animation");
    draw();  // Start the animation

})();
