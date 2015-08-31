//angular.module('app.memberList', []);

var app = angular.module('app.memberList', []); 
app.controller('memberCtrl', function($scope) {

   // member List Arrays
	$scope.membersList = [];

		var i = 0;
		function id(){
			return i = i+1;
		
		}
		$scope.membersList = [
			{
				arry_id: id(),
				arry_name:'teeg',
				arry_email:'tg@aol.com',
				arry_tele:'017-9552153',
				arry_date:new Date().toUTCString(),
				arry_done:false
			}
		
		];
		//console.log($scope.membersList[0].email);
		
	
		$scope.todoAdd = function() {
			
			 if($scope.Name.length == 0 || $scope.Email.length == 0 || $scope.Tel.length == 0) {alert("Error");return;}
			 
			  $scope.membersList.unshift({
				arry_id: id(),
				arry_name: $scope.Name,
				arry_email : $scope.Email,
				arry_tele: $scope.Tel,
				arry_date:  new Date().toUTCString(),
				arry_done:false
				
			});
			$scope.Name="";
			$scope.Email="";
			$scope.Tel ="";
		};

	
		$scope.remove = function() {
		var oldmembers = $scope.membersList;
		$scope.membersList = [];
			angular.forEach(oldmembers, function(members) {
				if (!members.arry_done) $scope.membersList.push(members);
			});
		};
});