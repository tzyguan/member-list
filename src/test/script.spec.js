describe('script.js Tests', function() {
    it('should be able to run with \'npm test\'', function() {
        expect(true).toBeTruthy();
    });
});


describe('MemberList Test', function(){
  beforeEach(module('app.memberList'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
  
	//check array
	describe('Read member Test', function(){
		it('Read from array', function(){
		
			var $scope = {};
			var controller = $controller('memberCtrl', { $scope: $scope });
			expect($scope.membersList[0].arry_name).toEqual('teeg');
		});
	});
  
	//add null test
	describe('Add null Test', function(){
		it('add null into array', function(){
		
			var $scope = {};
			var controller = $controller('memberCtrl', { $scope: $scope });

			$scope.Name = '';
			$scope.Email = '';
			$scope.Tel = '';
		
			$scope.todoAdd();
			console.log($scope.todoAdd());
			expect($scope.todoAdd()).toEqual();
		});
	});
	
	//add test
	describe('Add member Test', function(){
		it('add into array', function(){
		
			var $scope = {};
			var controller = $controller('memberCtrl', { $scope: $scope });

			$scope.Name = 'Test';
			$scope.Email = 'test@mail.com';
			$scope.Tel = '017-9552153';

			console.log('before add - Name = '+ $scope.membersList[0].arry_name);
			$scope.todoAdd();
			console.log('after add - Name = '+ $scope.membersList[0].arry_name);

			expect($scope.membersList[0].arry_name).toEqual('Test');
		});
	});
	
		//delete test
	describe('Delete member Test', function(){
		it('remove from array', function(){

		var $scope = {};
		var controller = $controller('memberCtrl', { $scope: $scope });
			
			
		$scope.Name = 'Test1';
		$scope.Email = 'test@mail.com';
		$scope.Tel = '017-9552153';
		$scope.todoAdd();
		console.log('after add - Name = '+ $scope.membersList[0].arry_name);	
				
		$scope.remove(2);
		console.log('after del - Name = '+ $scope.membersList[0].arry_name);
		expect($scope.membersList[0].arry_name).toEqual('teeg'); 

		});
	});

});
