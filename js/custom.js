// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Notification
function notification() {
    alert('Thank you very much!')
}

$(".read-more").click(function() {
    $(".more").show(1000);
    $(".read-more").hide();
});

$(window).bind("load", function () {
    jQuery("#status").fadeOut();
    jQuery("#loader").fadeOut();
});
