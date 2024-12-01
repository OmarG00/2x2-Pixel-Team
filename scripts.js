document.addEventListener("DOMContentLoaded", function () {
    const drawButton = document.getElementById('draw-button');
    const canvasnumbers = document.getElementById('canvas');

    const canvasWidth = 650;
    const canvasHeight = 650;

    drawButton.addEventListener('click', function () {
        const number = document.getElementById('numberenter').value; // the number is getting from the user when he or she enter the number to numberenter section (you can see additional infroamtion about it in css and html)

        if (number < 1 || number > 10) {
            alert("Please enter a number between 1 and 10");     // we firstly check that it is valid number or not. If it is not the valid number the use will see the--Please enter a number between 1 and 10
            return;
        }

        canvasnumbers.innerHTML = ''; // We did it due to delete the previous picture

        const canvaselement = document.createElement('canvas');
        canvaselement.width = canvasWidth;
        canvaselement.height = canvasHeight;
        canvasnumbers.appendChild(canvaselement);

        const gettingcontextt = canvaselement.getContext('2d');
        if (!gettingcontextt) return;

        gettingcontextt.clearRect(0, 0, canvasWidth, canvasHeight);

        drawSnowVariation(number, gettingcontextt); // we have 10 variaation of snow flake, the based on the user's number the code draw the figure 
    });

    function drawSnowVariation(variation, gettingcontextt) {
        switch (variation) {
            case "1":
                drawSnow(gettingcontextt, 6, 80, 4, 30); 
                break;
            case "2":
                drawSnow(gettingcontextt, 8, 100, 5, 20); 
                break;
            case "3":
                drawSnow(gettingcontextt, 4, 120, 3, 45); 
                break;
            case "4":                                                      // we added just some numbers as variables
                drawSnow(gettingcontextt, 12, 50, 6, 15); 
                break;
            case "5":
                drawSnow(gettingcontextt, 5, 80, 4, 60); 
                break;
            case "6":
                drawSnow(gettingcontextt, 10, 70, 5, 25); 
                break;
            case "7":
                drawSnow(gettingcontextt, 6, 150, 3, 50); 
                break;
            case "8":
                drawSnow(gettingcontextt, 7, 110, 6, 20); 
                break;
            case "9":
                drawSnow(gettingcontextt, 6, 60, 7, 10); 
                break;
            case "10":
                drawSnow(gettingcontextt, 9, 85, 5, 35); 
                break;
        }
    }

    // it is the our main part. There are branches, branch length, depth, and angle variation. So the branches are defined as the number of branches starting from starting point like the middle

    function drawSnow(gettingcontextt, branches, branchLength, depth, angleVariation) {
        function drawBranch(x, y, length, angle, depth) {
            if (depth === 0) return;


            const radian = (angle * Math.PI) / 180;
            const x1 = x + length * Math.cos(radian);
            const y1 = y + length * Math.sin(radian);

            gettingcontextt.moveTo(x, y);
            gettingcontextt.lineTo(x1, y1);

            // Recursive branches
            drawBranch(x1, y1, length * 0.7, angle - angleVariation, depth - 1);
            drawBranch(x1, y1, length * 0.7, angle + angleVariation, depth - 1);
        }

        gettingcontextt.beginPath();

        const centerX = gettingcontextt.canvas.width / 2;                // we made it to start from the middle. When we devide the witdh and height by two, we get the exactly middle of the canva part
        const centerY = gettingcontextt.canvas.height / 2;

        // Draw branches in symmetrical directions
        for (let i = 0; i < branches; i++) {
            drawBranch(centerX, centerY, branchLength, i * (360 / branches), depth); // we have loop to draw the ieach branch. it starts from the middle and contiune to until the end of branch like the final depth or sub branch
        }

        gettingcontextt.strokeStyle = "black";
        gettingcontextt.lineWidth = 1.5;
        gettingcontextt.stroke();
    }
});



