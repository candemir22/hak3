let featureLayer;
let marker;

async function initMap() {

    await google.maps.importLibrary("maps");

    const mapElement = new google.maps.Map(document.getElementById("map"), {    zoom: 18,    center: { lat: 37.214931, lng: 28.363885 },    mapTypeId: "terrain",  });
    // Get the inner map.
    const innerMap = mapElement.innerMap;
    // Get the feature layer.
    featureLayer = innerMap.getFeatureLayer(google.maps.FeatureType.LOCALITY);
    // Define a style with purple fill and border.
    
     marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 42.327, lng: 42.067 },
  }); 
    
    
    
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




