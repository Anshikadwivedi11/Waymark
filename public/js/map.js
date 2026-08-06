// GeoJSON stores coordinates as [longitude, latitude]
// Leaflet expects [latitude, longitude]

const map = L.map("map").setView(
    [listingCoordinates[1], listingCoordinates[0]], // center
    9                                              // zoom
);

// OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markerIcon = L.divIcon({
    className: "custom-marker",
    html: `
        <div class="map-marker">
            <i class="fa-solid fa-house"></i>
        </div>
    `,
    iconSize: [42, 42],
    iconAnchor: [21, 42],
    popupAnchor: [0, -35],
});

L.marker([listingCoordinates[1], listingCoordinates[0]], {icon: markerIcon})
  .addTo(map)
  .bindPopup(`
        <h5>${listingTitle}</h5>
        <p>Exact location will be provided after booking.</p>
    `)
  .openPopup();