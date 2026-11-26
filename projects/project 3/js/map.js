async function init() {
  const {Map, Polyline, InfoWindow} = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const center = { lat: 41.835258945075154, lng: -87.6271428350009 };

  const map = new Map(document.getElementById("canvas"), {
    zoom: 16,
    center: center,
    mapTypeId: "terrain",
    mapId: "DEMO_MAP_ID",
  });

  const locations = [
    {title: "Wishnick Hall", position: center, description: "Our classroom"},
    {title: "IIT Tower", position: {lat: 41.831697413037936, lng: -87.62751200682193}, description: "Handles student needs"},
    {title: "McCormick Tribune Campus Center", position: {lat: 41.83566264486595, lng: -87.6267730598939}, description: "Has food"},
  ];

  const pathCoordinates1 = [
    {lat: 41.83837640726915, lng: -87.62343065774985},
    {lat: 41.83470737828984, lng: -87.6233662847318},
    {lat: 41.83643400636415, lng: -87.6234628442589},
    {lat: 41.836513941720895, lng: -87.62186424764373},
    {lat: 41.83796874776981, lng: -87.62189643415276},
    {lat: 41.834739353307114, lng: -87.62186424764373},
  ];

  const pathCoordinates2 = [
    {lat: 41.834763334559625, lng: -87.62123124629946},
    {lat: 41.83707348642263, lng: -87.62125270397216},
  ]

  const pathCoordinates3 = [
    {lat: 41.83801670784569, lng: -87.62127416164483},
    {lat: 41.83802670784569, lng: -87.62132862066178},
  ]

  const polylineOptions = {
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1,
    strokeWeight: 10,
    map: map,
  };

  new Polyline({ path: pathCoordinates1, ...polylineOptions });
  new Polyline({ path: pathCoordinates2, ...polylineOptions });
  new Polyline({ path: pathCoordinates3, ...polylineOptions });

  const heading = document.createElement('h1');
  const content = document.createElement('div');
  const infoParagraph = document.createElement('p');  
  content.appendChild(infoParagraph);

  const infoWindow = new InfoWindow({
    headerContent: heading,
    content,
    maxWidth: 500,
  });

  locations.forEach((location) => {
    const marker = new AdvancedMarkerElement({
      map,
      position: location.position,
      title: location.title,
      gmpClickable: true,
    });

    marker.addListener("gmp-click", () => {
      heading.textContent = location.title;
      infoParagraph.textContent = location.description;

      infoWindow.open({
        anchor: marker,
        map: map,
      });
    });
  });

  let button = document.getElementById("button");

  function myfunction() {
    alert("If you have questions, contact me at: dbrown70@hawk.illinoistech.edu");
    document.getElementById("textoutput").textContent = message;
  }
  button.addEventListener("click", myfunction);
}
init();
window.addEventListener('load', init);