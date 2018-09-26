
$( document ).ready(function() {

	// Option de la map
	var options = {
						center: [48.505, -2], 
						zoom: 6,	
						minZoom	:4,
						maxZoom	:17,

						};
				
	var mymap = L.map('map',options);
/*
	var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	});

	var defaultLayer = OpenStreetMap_Mapnik.addTo(mymap);
*/
	// Add background image
	var img_background = 'img/earth_diffuse_mercator2_2048_BW.jpg';
	var img_background_bounds = [[90,-180], [-90,180]];
	var imgo_background = L.imageOverlay(img_background, img_background_bounds).addTo(mymap);

	// Add svg world image		
	var img_svg = 'img/world-poly.svg';
	var img_svg_bounds = [[90,-180], [-90,180]];
	var imgo_svg = L.imageOverlay(img_svg, img_svg_bounds).addTo(mymap);

	// Add markers for validate svg
	L.marker([47.709166666667, -3.8305],{'title':'jaune'}).addTo(mymap);
	L.marker([48.639059074533, -2.0473522443237],{'title':'p1'}).addTo(mymap);
	L.marker([48.642150053564, -2.0317739743653],{'title':'p2'}).addTo(mymap);
	L.marker([48.577710789127, 	-1.9592041272583],{'title':'p3'}).addTo(mymap);
	L.marker([48.687600729657, 		-2.3180193204346],{'title':'Cap Frehel'}).addTo(mymap);

	
	L.control.layers(baseLayers, overlayLayers, {collapsed: false}).addTo(mymap);

	/*
	var LayerClouds = L.tileLayer('http://b.tile.openweathermap.org/map/clouds/{z}/{x}/{y}.png?appid=34c074918fc5b1b839aa5c2d07830a41', {
		apikey: '34c074918fc5b1b839aa5c2d07830a41',
	});

	LayerClouds.addTo(mymap);
	LayerClouds.remove();
	*/

	// resize layers control to fit into view.
	function resizeLayerControl () {
		var layerControlHeight = document.body.clientHeight - (10 + 50);
		var layerControl = document.getElementsByClassName('leaflet-control-layers-expanded')[0];
		layerControl.style.overflowY = 'auto';
		layerControl.style.maxHeight = layerControlHeight + 'px';
	}
	mymap.on('resize', resizeLayerControl);
	resizeLayerControl();
			
	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);

	$( "#chbx_hide_svg" ).click(function() {

	  if ($(this).is(":checked"))
	  {
	  	imgo_background.removeFrom(mymap);		
		imgo_svg.removeFrom(mymap);

	  }
	  else
	  {
	  	imgo_background = L.imageOverlay(img_background, img_background_bounds).addTo(mymap);		
		imgo_svg = L.imageOverlay(img_svg, img_svg_bounds).addTo(mymap);
	  }
	});


});



var baseLayers = {
	'OpenStreetMap Default': L.tileLayer.provider('OpenStreetMap'),
	'OpenStreetMap German Style': L.tileLayer.provider('OpenStreetMap.DE'),
	'OpenStreetMap Black and White': L.tileLayer.provider('OpenStreetMap.BlackAndWhite'),
	'OpenStreetMap H.O.T.': L.tileLayer.provider('OpenStreetMap.HOT'),
	'Thunderforest OpenCycleMap': L.tileLayer.provider('Thunderforest.OpenCycleMap'),
	'Thunderforest Transport': L.tileLayer.provider('Thunderforest.Transport'),
	'Thunderforest Landscape': L.tileLayer.provider('Thunderforest.Landscape'),
	'Hydda Full': L.tileLayer.provider('Hydda.Full'),
	'Stamen Toner': L.tileLayer.provider('Stamen.Toner'),
	'Stamen Terrain': L.tileLayer.provider('Stamen.Terrain'),
	'Stamen Watercolor': L.tileLayer.provider('Stamen.Watercolor'),
	'Esri WorldStreetMap': L.tileLayer.provider('Esri.WorldStreetMap'),
	'Esri DeLorme': L.tileLayer.provider('Esri.DeLorme'),
	'Esri WorldTopoMap': L.tileLayer.provider('Esri.WorldTopoMap'),
	'Esri WorldImagery': L.tileLayer.provider('Esri.WorldImagery'),
	'Esri WorldTerrain': L.tileLayer.provider('Esri.WorldTerrain'),
	'Esri WorldShadedRelief': L.tileLayer.provider('Esri.WorldShadedRelief'),
	'Esri WorldPhysical': L.tileLayer.provider('Esri.WorldPhysical'),
	'Esri OceanBasemap': L.tileLayer.provider('Esri.OceanBasemap'),
	'Esri NatGeoWorldMap': L.tileLayer.provider('Esri.NatGeoWorldMap'),
	'Esri WorldGrayCanvas': L.tileLayer.provider('Esri.WorldGrayCanvas'),
	'Geoportail France Maps': L.tileLayer.provider('GeoportailFrance'),
	'Geoportail France Orthos': L.tileLayer.provider('GeoportailFrance.orthos'),
	'Geoportail France classic maps': L.tileLayer.provider('GeoportailFrance.ignMaps'),
	'MapBox': L.tileLayer.provider('MapBox')
};
var overlayLayers = {
	'OpenSeaMap': L.tileLayer.provider('OpenSeaMap'),
	'OpenWeatherMap Clouds': L.tileLayer.provider('OpenWeatherMap.Clouds', {'apiKey': 'd814acaf33e0b6eaa3a1119c2350ae71'}),
	'OpenWeatherMap CloudsClassic': L.tileLayer.provider('OpenWeatherMap.CloudsClassic', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap Precipitation': L.tileLayer.provider('OpenWeatherMap.Precipitation', {'apiKey': '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap PrecipitationClassic': L.tileLayer.provider('OpenWeatherMap.PrecipitationClassic', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap Rain': L.tileLayer.provider('OpenWeatherMap.Rain', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap RainClassic': L.tileLayer.provider('OpenWeatherMap.RainClassic', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap Pressure': L.tileLayer.provider('OpenWeatherMap.Pressure', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap PressureContour': L.tileLayer.provider('OpenWeatherMap.PressureContour', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap Wind': L.tileLayer.provider('OpenWeatherMap.Wind', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap Temperature': L.tileLayer.provider('OpenWeatherMap.Temperature', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
	'OpenWeatherMap Snow': L.tileLayer.provider('OpenWeatherMap.Snow', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'}),
		'Geoportail France Parcels': L.tileLayer.provider('GeoportailFrance.parcels', {apiKey: '34c074918fc5b1b839aa5c2d07830a41'})
};