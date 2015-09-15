// angular.module("app", [])

// var mainControllerFunc = function($scope){

// 	$scope.markers = []
	
// 	$scope.addMarker = function(event){
// 		$scope.markerBox = {
// 			xposition: (event.pageX - 24),
// 			yposition: (event.pageY - 24),
// 			//comment: prompt('enter a comment'),
// 			commentVisibility: false,
// 		}
// 		$scope.markers.push($scope.markerBox)
// 		console.log($scope.markers)
		
// 	}
	
// 	$scope.removeMarker = function(index){
// 		$scope.markers.splice(index,1) 
// 	}

// 	$scope.toggleComment = function(index) {
// 		$scope.markers[index].commentVisibility = !$scope.markers[index].commentVisibility
// 	}	
// }

// angular.module("app").controller("mainController", ["$scope", mainControllerFunc])



var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  	center: {lat:-16.5004126, lng: -151.74149039},
    zoom: 8
  });


 marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
  	posiiton: {lat:-16.5004126, lng: -151.74149039}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}



    //center: {lat: 40.25220729, lng: -105.8230671},