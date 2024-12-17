

import * as L from "leaflet";

// initialize the map
const map = L.map ("map").setView([51.505,-0.09], 13)

L.tileLayer ("https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright"' 
).addTo(map);