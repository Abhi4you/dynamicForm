var myForm = angular.module("form",[]);

myForm.controller("formController", function( $scope,$http ){
	
	 $scope.getForm = function() {
		 
		 $scope.clicked=function(option){
		     console.log(option)
		   }
		 
		 $scope.selectField = "";
		var formdata =  $http.get("https://randomform.herokuapp.com/")
			.then(function(response){ 
		  		$scope.formDatas = response.data.data;
		  		console.log($scope.formDatas);
		  		
		  	});
		
		};
	    
});
