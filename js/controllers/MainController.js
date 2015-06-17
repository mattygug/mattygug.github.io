app.controller('MainController', ['$scope', function($scope) {
  $scope.websites = [ 
	  { 
	    title: 'DeliAmsterdam', 
	    link: 'http://www.deliamsterdam.com', 
	    comment: 'Quick onboarding raising expectations',
	    images: ['img/img01.png',
	    		  'img/img02.png',

	    ],
	    	
	    
	  },
	  { 
	    title: 'FB', 
	    link: 'http://www.fb.com', 
	    comment: 'easy',
	    
	  },  
	  
	];
}]);