

function initMap()
{
  var uluru = {lat: 37.466375, lng:  126.932903};
  var map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 14,
    center: uluru
  });
  var marker = new google.maps.Marker
  ({
    position: uluru,
    map: map
  });
}
