$(function () {

  // menu close
  $("#menu-close").click(function (e) {
    e.preventDefault();
    $("#menu-wrapper").toggleClass("active");
  });

// menu open
  $("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#menu-wrapper").toggleClass("active");
  });

// scrolls
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  // map
  function initialize() {
    var styles = [
      {
        stylers: [
          {hue: "#ffffff"},
          {saturation: -100}
        ]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {lightness: 100},
          {visibility: "simplified"}
        ]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [
          {visibility: "off"}
        ]
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

    var mapOptions = {
      zoom: 6,
      center: new google.maps.LatLng(15.040165, -77.103676),
      scaleControl: false,
      disableDefaultUI: true,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    };

    var map = new google.maps.Map($(".map").get(0), mapOptions);

    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
  }

  initialize();

});