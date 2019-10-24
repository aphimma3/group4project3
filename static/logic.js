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
d3.json('/api/lynx', function(response) {

  // Create a new marker cluster group
  var lynx_markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var name = response[i].name;

    // Check for location property
    if (name) {

      // Add a new marker to the cluster group and bind a pop-up
      lynx_markers.addLayer(L.marker([response.latitude, response.longitude])
        .bindPopup(response[i].name));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(lynx_markers);

});

d3.json('/api/restaurants', function(response) {

  // Create a new marker cluster group
  var eats_markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var name = response[i].name;

    // Check for location property
    if (name) {

      // Add a new marker to the cluster group and bind a pop-up
      eats_markers.addLayer(L.marker([response.latitude, response.longitude])
        .bindPopup(response[i].name));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(eats_markers);

});

d3.json('/api/attractions', function(response) {

  // Create a new marker cluster group
  var spots_markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {

    // Set the data location property to a variable
    var name = response[i].name;

    // Check for location property
    if (name) {

      // Add a new marker to the cluster group and bind a pop-up
      spots_markers.addLayer(L.marker([response.latitude, response.longitude])
        .bindPopup(response[i].name));
    }

  }

  // Add our marker cluster layer to the map
  myMap.addLayer(spots_markers);

});

var myIcon = new
L.icon({iconUrl:"/marker-icon.png"});

// function tourismHotspot (feature,
// layer) {
// 	layer.bindPopup("<h1 class='infoHeader'>Hi, I'm an info window</h1><p class='infoHeader'>" +
// 	feature.properties.location +"</p>");
// 		layer.setIcon(myIcon);
// };

// L.geoJSON(lynx.json, {
// 	onEachFeature: tourismHotspot
// }).addTo(map);

