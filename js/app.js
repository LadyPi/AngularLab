angular
  .module("Raise", ["firebase", "ngRoute"])
  .controller("RecruiterCtrl", RecruiterCtrl);

  RecruiterCtrl.$inject = ["$scope", "$firebaseArray"];

  function RecruiterCtrl($scope, $firebaseArray) {
	var ref = firebase.database().ref().child("recruiters");
	$scope.recruiters = $firebaseArray(ref);
	$scope.recruiter = [];

	$scope.addRecruiter = function() {
	$scope.recruiters.$add({
		name: $scope.recruiter.name,
		industry: $scope.recruiter.industry
	});
	// clear form
	$scope.recruiter = {};
  };
}

routes
  .config(function($routeProvider, $locationProvider) {
  	$routeProvider
  	  .when('/', {
  	  	templateURL: '/templates/recruiters-index.html',
  	    controller: 'RecruitersIndexCtrl'
  	  })
  	  .when('/recruiters/:id', {
  	  	templateURL: '/templates/recruiters-show.html',
  	    controller: 'RecruitersShowCtrl'
      });
  	  $locationProvider.html5mode ({
  	  	enabled: true,
  	  	requireBase: false
  	});
});



// Need more time to compelte
// .controller('RecruitersIndexCtrl', function($scope, RecruiterService) {
//   	console.log('index working');
//   	$scope.recruiters = RecruiterService.query();
//   });

// .controller('RecruitersShowCtrl', function($scope, RecruiterService, $routeParams) {
//   	console.log('show working');
//   	$scope.recruiters = RecruiterService.get($routeParams.id);
//   });

// RecruitersIndexCtrl.$inject = ["$scope", "$firebaseArray"];

// factory('RecruiterService', function() {
// 	var RecruiterService = {};
// 	RecruiterService.query = function() {
// 		return ALL_RECRUITERS;
// 	}

// 	RecruiterService.get = function(id) {
// 		var id = parseInt(id);
// 		return ALL_RECRUITERS.find(function(recruiter) {
// 			return recruiter.id == id;
// 		});
// 	};
// 	return RecruiterService;
// });

// $scope.recruiter = "";
	// var self = this;
	// self.all = [];
	// self.addRecruiter = addRecruiter;
	// self.newRecruiter = {};
	// self.getRecruiters = getRecruiters;
	// self.deleteRecruiter = deleteRecruiter;