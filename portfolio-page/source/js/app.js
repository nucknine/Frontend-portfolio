/* globals svg4everybody*/
import { initMap } from './google-map.js';
import { mouseParallax, scrollParallax } from './parallax.js';
import { waypoint } from './waypoint-animation.js';

svg4everybody();

let mapBox = document.getElementById('map');

if (mapBox) {
    initMap(mapBox);
}
waypoint();
window.addEventListener('mousemove', mouseParallax);
window.addEventListener('scroll', scrollParallax);