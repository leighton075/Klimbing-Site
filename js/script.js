// Set up the map and set its location to the first gym listed in the data set
const map = L.map('map', {
    attributionControl: false // Disable the default attribution control
}).setView([locations[0].latitude, locations[0].longitude], 5);

// Add the tile layer without the default attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

// Add your custom attribution
L.control.attribution({
    prefix: false // Removes the "Leaflet" prefix
}).addAttribution('Leighton Simmons 2024').addTo(map);

// Loop through the locations from the data.js file and add a marker for each one
locations.forEach(location => {
    const marker = L.marker([location.latitude, location.longitude]).addTo(map);
    marker.bindPopup(`<div class="marker-popup">
                        <strong>${location.title}</strong><br>
                        <a href="${location.url}" target="_blank">Visit</a>
                      </div>`);
});

// When hovered over, show the info popup
map.on('mouseover', function (e) {
    if (e.layer instanceof L.Marker) {
        e.layer.openPopup();
    }
});
