const root = {
    colour: { r: 255, g: 0, b: 0 },
    headerFadeDuration: 50,
    charFadeDuration: 40,
};

// Canvas elements
const c = document.getElementById("codefallCanvas");
const ctx = c.getContext("2d");
[c.width, c.height] = [window.innerWidth, window.innerHeight];

// Matrix characters
const characters = Array.from("日二コ゠アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレワヰヱヲンヺ・ーヽ:・.\"=*+-<>¦｜_ヿ0123456789");

// Configuration
const font_size = 14;
const columns = Math.floor(c.width / font_size);
const drops = Array(columns).fill(1);

// Header configuration
const headerText = "YOUR HEADER";
const headerConfig = {
    enabled: true,
    fadeDuration: 1000,
    spacing: font_size * 8,
    startX: (c.width - (font_size * 8 * headerText.length)) / 2,
    startY: c.height / 2
};

// Color definitions
const {r, g, b} = root.colour;
const colours = {
    primary: `rgb(${r}, ${g}, ${b})`,
    highlight: `rgb(${r}, 30, 30)`,
    square: `rgba(${r}, ${g}, ${b}, 0.8)`
};

// Wallpaper handling
const wallpaper = new Image();
wallpaper.src = "Wallpaper.png";

wallpaper.onload = () => {
    const drawWallpaper = () => ctx.drawImage(wallpaper, 0, 0, c.width, c.height);
    
    drawWallpaper();
    
    setTimeout(() => {
        ctx.clearRect(0, 0, c.width, c.height);
        drawWallpaper();

        // Header animation
        ctx.font = `${font_size * 5}px Anurati`;
        ctx.fillStyle = colours.primary;
        
        const typedCharacters = [];
        let currentLetter = 0;

        const typeHeaderCharacter = (char, x, y) => {
            ctx.fillStyle = colours.primary;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(char, x, y);
        };

        const clearInputSquare = () => {
            drawWallpaper();
            typedCharacters.forEach(({character, x, y}) => typeHeaderCharacter(character, x, y));
        };

        const typeHeader = () => {
            if (currentLetter >= headerText.length) {
                clearInputSquare();
                return fadeHeaderOut();
            }

            const x = headerConfig.startX + currentLetter * headerConfig.spacing;
            const y = headerConfig.startY;

            if (currentLetter > 0) clearInputSquare();

            // Draw input square
            ctx.fillStyle = colours.square;
            ctx.fillRect(x, y - font_size * 3, font_size * 5, font_size * 5.5);

            // Update characters
            typedCharacters.push({
                character: headerText[currentLetter],
                x: x + (font_size * 2.5),
                y
            });

            // Redraw all characters
            typedCharacters.forEach(({character, x, y}) => typeHeaderCharacter(character, x, y));

            currentLetter++;
            setTimeout(typeHeader, 200);
        };

        let matrixStarted = false;
        const fadeHeaderOut = () => {
            const fadeSteps = headerConfig.fadeDuration / root.headerFadeDuration;
            let currentStep = 0;

            const animate = () => {
                if (currentStep >= fadeSteps) {
                    return !matrixStarted && (matrixStarted = true) && startMatrix();
                }

                const opacity = currentStep / fadeSteps;
                drawWallpaper();

                typedCharacters.forEach(({character, x, y}) => {
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${1 - opacity})`;
                    ctx.fillText(character, x, y);
                });

                currentStep++;
                setTimeout(animate, root.headerFadeDuration);
            };

            animate();
        };

        const startMatrix = () => {
            ctx.font = `${font_size}px Arial`;
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
        
            // Maintain animation timing using original interval approach
            const draw = () => {
                drawWallpaper();
        
                drops.forEach((drop, i) => {
                    const char = characters[Math.random() * characters.length | 0];
                    const posY = drop * font_size;
        
                    // Main character
                    ctx.fillStyle = colours.primary;
                    ctx.fillText(char, i * font_size, posY);
        
                    // Highlight effect (immediate, no setTimeout)
                    ctx.fillStyle = colours.highlight;
                    ctx.fillText(char, i * font_size, posY);
        
                    // Update position with original timing logic
                    drops[i] = posY + font_size > c.height && Math.random() > 0.975 ? 0 : drop + 1;
        
                    // Trail effect
                    for (let j = 1; j < 10 && drop - j >= 0; j++) {
                        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0, 1 - j/8)})`;
                        ctx.fillText(characters[Math.random() * characters.length | 0], 
                                   i * font_size, (drop - j) * font_size);
                    }
                });
            };
        
            // Restore original interval-based timing
            setInterval(draw, root.charFadeDuration);
        };

        if(headerConfig.enabled)
        {
            typeHeader();
        }
        else
        {
            startMatrix();
        }

    }, 2000); // Wait before starting. That's to allow Windows to boot up. Remove or edit this as needed. Time is in Milliseconds.
};