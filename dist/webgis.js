const searchControl = L.esri.Geocoding.geosearch({
    position: "topleft",
    placeholder: "Enter address to find out its opt in status",
    useMapBounds: false,
    providers: [
        L.esri.Geocoding.arcgisOnlineProvider({
            apikey: apiKey,
            nearby: {
                lat: -33.8688,
                lng: 151.2093
            }
        })
    ]
}).addTo(map);

const results = L.layerGroup().addTo(map);

searchControl.on("results", function (data) {
    results.clearLayers();
    for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
    }
});
