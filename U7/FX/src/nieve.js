import { createSnow, showSnow } from "pure-snow.js";
import "pure-snow.js/style.css"; 

const BASE_CSS = `
    body {
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        overflow-x: hidden;
        min-height: 100vh; 
        /* If you want to change the site height you can remove overflow-y */
        /* pure-snow will automatically detect height of body tag */
        overflow-y: hidden;
        color: white;
    }
    
    .snowflake {
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        filter: drop-shadow(0 0 10px white);
    }`;

createSnow(); // creates snowflakes and generate css for them
showSnow(true); // snow can be disabled using showSnow function