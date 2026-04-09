# Editorial Lookbook Grid

## Project Idea
The Editorial Grid is an asymmetric layout designed for creative agencies, fashion portfolios, or digital magazines. It departs from standard uniform galleries by utilizing a custom proportion system (alternating landscape and square formats) to create a dynamic "lookbook" feel. The layout is paired with cinematic scroll animations and advanced typography lighting to deliver a premium user experience.

## Technical Realization

This project is built purely with vanilla web technologies, ensuring high performance without the overhead of external libraries.

### 1. Asymmetrical Architecture (CSS Grid)
The core of the image gallery relies on a 3-column CSS Grid (`grid-template-columns: repeat(3, 1fr)`). 
* Asymmetry is engineered by applying specific column spans to the child elements.
* `.rect` classes span 2 columns (`grid-column: span 2`), creating landscape blocks.
* `.square` classes span 1 column (`grid-column: span 1`), creating proportional squares.
* The HTML structure alternates these classes row by row to prevent visual repetition.

### 2. Typography & Lighting Engines
* **Metallic Glow:** The massive "champ" header utilizes a multi-layered, low-blur `text-shadow` combined with gray color channels. This transitions smoothly on hover to simulate a realistic, brushed-metal backlit effect rather than a generic neon glow.
* **Link Kinematics:** The "Studio" link features a pseudo-element (`::after`) that scales its width from 0 to 100% on hover, combined with a physical `translateX` shift of the arrow icon, creating a sense of forward momentum.

### 3. Image Filtering & State Changes
The portfolio items default to a muted editorial state using CSS filters (`filter: grayscale(100%) brightness(0.8)`). Upon user interaction (hover), the images transition to their true color states while simultaneously executing a slight negative `translateY` to lift them off the page.

### 4. Cinematic Scroll Reveal (JavaScript)
To enhance the premium feel, the gallery does not load all at once. 
* A vanilla JavaScript `IntersectionObserver` monitors the viewport.
* As the grid enters the screen, the observer triggers a staggered CSS animation.
* A dynamic `setTimeout` calculates a delay based on the image's DOM index (e.g., `index * 150ms`), causing the case studies to cascade upward into view sequentially.
