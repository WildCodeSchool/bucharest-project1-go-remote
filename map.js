
    function initMap() {
    // The location of Wild Code School
    var WildCodeSchool = {lat: 44.452625, lng: 26.075969};
    // The map, centered at Wild Code School
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: WildCodeSchool});
    // The marker, positioned at Wild Code School
    var marker = new google.maps.Marker({position: WildCodeSchool, map: map});
  }