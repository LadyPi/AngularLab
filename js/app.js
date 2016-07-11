angular
  .module("Raise", ["firebase"])
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















// $scope.recruiter = "";
	// var self = this;
	// self.all = [];
	// self.addRecruiter = addRecruiter;
	// self.newRecruiter = {};
	// self.getRecruiters = getRecruiters;
	// self.deleteRecruiter = deleteRecruiter;