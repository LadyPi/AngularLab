angular
  .module("Raise", ["firebase"])
  .controller("RecruiterCtrl", RecruiterCtrl);

RecruiterCtrl.$inject = ["$scope", "$firebaseArray"];

function RecruiterCtrl($scope, $firebaseArray) {
	var ref = firebase.database().ref().child("Recruiters");
	$scope.Recruiters = $firebaseArray(ref);
	$scope.recruiter = {};
}
$scope.addRecruiter = function() {
	$scope.Recruiters.$add({
		name: $scope.recruiter.name,
		industry: $scope.recruiter.industry
	});
	// clear form
	// $scope.recruiter = {};
};
