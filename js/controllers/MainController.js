app.controller('MainController', ['$scope', function($scope) {
  $scope.websites = [ 
	  
	  { 
	    title: '500px - Basics', 
	    link: 'https://500px.com/signup', 
	    comment: 'classic onboarding!! We do not want that.',
	    images: ['img/img03.png',
	    ],
	    
	  },
	  { 
	    title: 'DeliAmsterdam - getting information | interaction', 
	    link: 'http://www.deliamsterdam.com', 
	    comment: 'Getting information by choices',
	    images: ['img/img01.png',
	    		  'img/img02.png',
	    ],
	    	
	    
	  },
	  { 
	    title: 'Coin - Gameing | interaction', 
	    link: 'http://pttrns.com/applications/402', 
	    comment: 'Play a game to interact (It triggers affection in the brain.)',
	    images: ['img/img04.png',
	    		 
	    ],
	    	
	    
	  },
	  { 
	    title: 'Flickr - Welcome | frictionless simple -> for masses', 
	    link: 'http://pttrns.com/applications/402', 
	    comment: 'Basic explanations about product, frictionless)',
	    images: ['img/img05.png',
	    		 
	    ],
	    	
	    
	  },   
	  
	];
}]);