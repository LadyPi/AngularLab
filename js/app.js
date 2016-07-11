angular
  .module("Raise", ["firebase", "ngRoute"])
  // .controller("RecruiterCtrl", RecruiterCtrl);

  .controller('RecruitersIndexCtrl', function($scope, RecruiterService) {
  	console.log('index working');
  	$scope.recruiters = RecruiterService.query();
  });

RecruitersIndexCtrl.$inject = ["$scope", "$firebaseArray"];


function RecruitersIndexCtrl($scope, $firebaseArray) {
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

















// $scope.recruiter = "";
	// var self = this;
	// self.all = [];
	// self.addRecruiter = addRecruiter;
	// self.newRecruiter = {};
	// self.getRecruiters = getRecruiters;
	// self.deleteRecruiter = deleteRecruiter;