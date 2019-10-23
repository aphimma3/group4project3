 // JS & Leaflet stuff
 
 var map = L.map('map', {
  center: [35.227087, -80.843127],
  zoom: 12,
  minZoom: 3,
  maxZoom: 18
});

// Adding tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add geoJSON

var myIcon = new
L.icon({iconUrl:"/marker-icon.png"});

function tourismHotspot (feature,
layer) {
	layer.bindPopup("<h1 class='infoHeader'>Hi, I'm an info window</h1><p class='infoHeader'>" + 
	feature.properties.location +"</p>");
		layer.setIcon(myIcon);
};

L.geoJSON(lynx.json, {
	onEachFeature: tourismHotspot
}).addTo(map);

