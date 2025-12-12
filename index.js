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
    gmp-map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 42.327, lng: 42.067 },
  }); 
    





    
}

initMap();






