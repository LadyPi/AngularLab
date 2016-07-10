angular
  .module("Raise", ["firebase"])
  .controller("RecruiterCtrl", recruiterCtrl);

recruiterCtrl.$inject = ["$scope", "$firebaseArray"];
function recruiterCtrl($scope, $firebaseArray) {
	var ref = firebase.database().ref().child("recruiters");
	$scope.recruiters = $firebaseArray(ref);
}


$scope.addRecruiter = function() {
	$scope.recruiter.$add({
		name: $scope.recruiter.name,
		industry: $scope.recruiter.industry
	});
};