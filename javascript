<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="_static/css/devsite-cyan.css">
    <link rel="stylesheet" href="/maps/styles/lhstyles/landing/css/landing.css">
    <link rel="stylesheet" href="/maps/documentation/javascript/demos/demos.css">
    <link href="/maps/styles/lhstyles/code/lh-codeframe.css" rel="stylesheet" type="text/css">
  </head>
  <body>

    <iframe class="maps-frame"
      src="/maps/documentation/javascript/demos/basemaps/basemaps"
      id="mtam" name="mtam">
    </iframe>

    <section class="kd-tabbed-vert header-links" id="vertTab">

      <article class="selected">
        <header>
          <a href="/maps/documentation/javascript/demos/basemaps/basemaps"
          class="gc-analytics-event" target="mtam" data-category="demosSampleCode"
          data-action="baseMapsTabClick" data-label="body">Base Maps</a>
        </header>
        <div class="demo-container vertical max-code-height">
          <div class="code-container">
            <pre class="prettyprint">function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    zoom: 8
  });
}
</pre>

          </div>
        </div>
      </article>

      <article>
        <header>
          <a href="/maps/documentation/javascript/demos/styledmaps/styledmaps"
          class="gc-analytics-event" target="mtam" data-category="demosSampleCode"
          data-action="styledMapsTabClick" data-label="body">Styled Maps</a>
        </header>
        <div class="demo-container vertical max-code-height">
          <div class="code-container">
            <pre class="prettyprint">function initMap() {

  // Specify features and elements to define styles.
  var styleArray = [
    {
      featureType: &quot;all&quot;,
      stylers: [
       { saturation: -80 }
      ]
    },{
      featureType: &quot;road.arterial&quot;,
      elementType: &quot;geometry&quot;,
      stylers: [
        { hue: &quot;#00ffee&quot; },
        { saturation: 50 }
      ]
    },{
      featureType: &quot;poi.business&quot;,
      elementType: &quot;labels&quot;,
      stylers: [
        { visibility: &quot;off&quot; }
      ]
    }
  ];

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    scrollwheel: false,
    // Apply the map style array to the map.
    styles: styleArray,
    zoom: 8
  });
}
</pre>

          </div>
        </div>
      </article>

      <article>
        <header>
          <a href="/maps/documentation/javascript/demos/satellite/satellite"
          class="gc-analytics-event" target="mtam" data-category="demosSampleCode"
          data-action="satelliteTabClick" data-label="body">Satellite</a>
        </header>
        <div class="demo-container vertical max-code-height">
          <div class="code-container">
            <pre class="prettyprint">function initMap() {
  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    // Set mapTypeId to google.maps.MapTypeId.SATELLITE in order
    // to activate satellite imagery.
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    scrollwheel: false,
    zoom: 8
  });
}
</pre>

          </div>
        </div>
      </article>

      <article>
        <header>
          <a href="/maps/documentation/javascript/demos/routing/routing"
          class="gc-analytics-event" target="mtam" data-category="demosSampleCode"
          data-action="directionsTabClick" data-label="body">Directions</a>
        </header>
        <div class="demo-container vertical max-code-height">
          <div class="code-container">
            <pre class="prettyprint">function initMap() {
  var chicago = {lat: 41.85, lng: -87.65};
  var indianapolis = {lat: 39.79, lng: -86.14};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: chicago,
    scrollwheel: false,
    zoom: 7
  });

  var directionsDisplay = new google.maps.DirectionsRenderer({
    map: map
  });

  // Set destination, origin and travel mode.
  var request = {
    destination: indianapolis,
    origin: chicago,
    travelMode: google.maps.TravelMode.DRIVING
  };

  // Pass the directions request to the directions service.
  var directionsService = new google.maps.DirectionsService();
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Display the route on the map.
      directionsDisplay.setDirections(response);
    }
  });
}
</pre>

          </div>
        </div>
      </article>

      <article>
        <header>
          <a href="/maps/documentation/javascript/demos/markers/markers"
          class="gc-analytics-event" target="mtam" data-category="demosSampleCode"
          data-action="markersTabClick" data-label="body">Markers</a>
        </header>
        <div class="demo-container vertical max-code-height">
          <div class="code-container">
            <pre class="prettyprint">function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });
}
</pre>

          </div>
        </div>
      </article>

    </section>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>
    <script src="/_static2/jsi18n/"></script>
    <script src="/_static/js/script_foot_closure.js"></script>
    <script src="/_static/js/script_foot.js"></script>
    <script>
      $(document).ready(function() {
        window.prettyPrint();
      })
    </script>
  </body>
</html>
