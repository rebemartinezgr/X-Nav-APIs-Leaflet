
jQuery(document).ready(function() {

  var map = L.map('map').setView([40.2838, -3.8215], 18);//crea el mapa y lo ajsuta al punto dado

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://           creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
  }).addTo(map);

 	//Funcionalidades de ejercicios anteriores
    L.marker([40.2838, -3.8215]).addTo(map) //añade marcador
	.bindPopup('Aulario III. Campus Fuenlabrada') // añade y abre el popup
	.openPopup();

    map.on('click', function(e) {
    	L.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
	.bindPopup(""+e.latlng) // añade y abre el popup
	.openPopup();
    });

    map.locate({setView: true, maxZoom: 16}); //se localiza en el mapa

   function onLocationFound(e) {

	var radius = e.accuracy / 2;

   	L.marker(e.latlng).addTo(map) //añade marcador de posicion
        .bindPopup("Exactitud de localizacizacion: " + radius + " metros").openPopup(); //añade popup

   	L.circle(e.latlng, radius).addTo(map); //añade circulo alrededor de la posicion
}

map.on('locationfound', onLocationFound); //cuando ha encontrado la localizacion llama a la funcion

});
