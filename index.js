let featureLayer;
async function initMap() {
    // Request needed libraries.
    await google.maps.importLibrary("maps");
    // Get the gmp-map element.
    //const mapElement = document.querySelector("gmp-map");
    const mapElement = new google.maps.Map(document.getElementById("gmp-map"), {    zoom: 18,    center: { lat: 37.214931, lng: 28.363885 },    mapTypeId: "terrain",  });
    // Get the inner map.
    const innerMap = mapElement.innerMap;
    // Get the feature layer.
    featureLayer = innerMap.getFeatureLayer(google.maps.FeatureType.LOCALITY);
    // Define a style with purple fill and border.
    const featureStyleOptions = {
        strokeColor: '#810FCB',
        strokeOpacity: 1.0,
        strokeWeight: 3.0,
        fillColor: '#810FCB',
        fillOpacity: 0.5
    };
    // Apply the style to a single boundary.
    featureLayer.style = (options) => {
        if (options.feature.placeId == 'ChIJ0zQtYiWsVHkRk8lRoB1RNPo') { // Hana, HI
            return featureStyleOptions;
        }
    };
}

initMap();

