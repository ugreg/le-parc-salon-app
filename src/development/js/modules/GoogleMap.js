function initialize() {
            var myLatlng = new google.maps.LatLng(29.979390, -90.095690);
            var mapOptions = {
              center: myLatlng,
              zoom: 15,
                disableDefaultUI: true,
                zoomControl: true,
                draggable: false,
                scrollwheel: false,
                tilt: 25
            };
            var map = new google.maps.Map(document.getElementById('salon-map'),
                mapOptions);
            var marker = new google.maps.Marker({
              position: myLatlng,
              map: map
            });
          }
          google.maps.event.addDomListener(window, 'load', initialize);