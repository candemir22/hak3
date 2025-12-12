let marker;
async function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 42.325, lng: 42.07 },
  });

	  const triangleCoords = [
    { lat: 42.774, lng: 42.19 },
    { lat: 42.466, lng:42.118 },
    { lat: 42.321, lng: 42.757 },
    { lat: 42.774, lng: 42.19 },
  ];
  // Construct the polygon.
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  bermudaTriangle.setMap(map);

  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 42.327, lng: 42.067 },
  });

    marker.addListener("mouseover", kazibol);
 marker.addListener("click", cikis);
}

function kazibol() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    	window.speechSynthesis.speak(new SpeechSynthesisUtterance('kazı bölgesi '));
    marker.setAnimation(google.maps.Animation.BOUNCE);
  
  }}

function cikis() {
     marker.setAnimation(null);
     	window.speechSynthesis.speak(new SpeechSynthesisUtterance('bu bölgenin proje kodu 128.60'));  
		}

  
window.initMap = initMap;

