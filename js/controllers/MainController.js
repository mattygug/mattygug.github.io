app.controller('MainController', ['$scope', function($scope) {
  $scope.websites = [ 
	  
	  
	  { 
	    title: 'Dashmote - Getting information, push feeling and raising expectations | interaction, expectation', 
	    link: 'http://beta.dashmote.com/', 
	    comment: 'draw back: too complicated, buggy, some features do not make sense',
	    images: ['img/img07.png',	 
	    ],
	    	
	    
	  },
	  { 
	    title: 'User Stories & Goals', 
	    link: '', 
	    comment: '',
	    images: ['img/img12.png',		 
	    ],
	    	
	    
	  },
	  { 
	    title: '500px - Basics', 
	    link: 'https://500px.com/signup', 
	    comment: 'Ouch!! This is the one screen everyone hates on the web',
	    images: ['img/img03.png',
	    ],
	    
	  }, 
	  { 
	    title: 'DeliAmsterdam - getting information | interaction, expectations', 
	    link: 'http://www.deliamsterdam.com', 
	    comment: 'A pioneer in sourcing easy infomormation and customizing results for a User. Getting information by choices',
	    images: ['img/img01.png',
	    		  'img/img02.png',
	    ],
	    	
	    
	  },
	  { 
	    title: 'Tailorbrands - getting information | interaction, expectations', 
	    link: 'http://www.tailorbrands.com', 
	    comment: 'A better version as DeliAmsterdam with actual output',
	    images: ['img/img13.png',		  
	    ],
	    	
	    
	  },
	  { 
	    title: 'Coin - Gameing | interaction', 
	    link: 'http://pttrns.com/applications/402', 
	    comment: 'Play a game to interact (It triggers affection in the brain. choose your signup pictures at the begiining instead of a pw)',
	    images: ['img/img04.png',		 
	    ],
	    	
	    
	  },
	  { 
	    title: 'Flickr - Welcome | frictionless simple -> for masses', 
	    link: 'https://www.flickr.com/', 
	    comment: 'Basic explanations about product, frictionless',
	    images: ['img/img05.png',		 
	    ],
	    	
	    
	  },
	  { 
	    title: 'Path - Engage | connect and engage with other users', 
	    link: 'http://pttrns.com/applications/354', 
	    comment: 'Personally I am not a fan of this',
	    images: ['img/img08.png',		 
	    ],
	    	
	    
	  },
	  { 
	    title: 'Bobler - Explain and straight signup | nifty explanations -> simple signup', 
	    link: 'http://uxarchive.com/apps/bobler', 
	    comment: 'Simple but engaging',
	    images: ['img/img09.png',		 
	    ],
	    	
	    
	  },
	  {
	   title: 'Snapchat - simple and interactive | interactive explanations come later', 
	    link: 'https://www.snapchat.com/', 
	    comment: 'draw back: too complicated, buggy, some features do not make sense',
	    images: ['img/img10.png',
	    		'img/img11.png',
	    		],
	    	
	    
	  },
	  
	];
	$scope.landings = [
	{
	   	title: 'Dashmote | snappy, feeling of new, simple & clear info | mobile first, explanations', 
	   	tag: 'Goal', 
	    link: 'http://www.dashmote.com/', 
	    comment: 'Drawbacks old: page: ',
	    images: ['img/img14.png',
	    		'img/img15.png',
	    		],	
	    
	}, 
	{
	   	title: 'User Stories',
	   	tag: 'Requirements', 
	    link: '', 
	    comment: '',
	    images: ['img/img16.png',
	    		],	
	    
	},
	{
	   	title: 'Send a gesture | Scrolling and exlpaining', 
	   	tag: 'Interactive', 
	    link: 'http://sendamessage.to/', 
	    comment: 'requires good photography work: ',
	    images: ['img/img17.png',
	    		
	    		],	
	    
	},
	{ 	
		title: 'We aint plastic | animating and introducing new words svg animation', 
		tag: 'Animation', 
	    link: 'http://weaintplastic.com/', 
	    comment: 'might not be the best direction for us',
	    images: ['img/img18.png',
	    		
	    		],	
	    
	},
	{ 	
		title: 'Adoratorio | introduce cinemagraphs instead of pictures', 
		tag: 'Animation', 
	    link: 'http://www.adoratorio.com/', 
	    comment: 'more for the team page and information',
	    images: ['img/cine.gif',
	    		
	    		],	
	    
	},
	{ 	
		title: 'Kingsman movie | introduce plaful onboarding and introduction, become a superdesigner', 
		tag: 'Interactive', 
	    link: 'http://www.kingsmanmovie.com/becomeakingsman/', 
	    comment: 'marketing needs to help, maybe too time intense',
	    images: ['img/kingsman.gif',
	    		
	    		],	
	    
	},
	
	{ 	
		title: 'Millbank | introdcue a product through steps undertaken', 
		tag: 'Exlpanation', 
	    link: 'http://www.fsmillbank.com/', 
	    comment: 'Prezi style not my favourite',
	    images: ['img/img19.png',
	    		
	    		],	
	    
	},
	
	{ 	
		title: 'The survival kit | introduce a product through steps undertaken',
		tag: 'Interactive', 
	    link: 'http://agencysurvivalkit.com/', 
	    comment: 'hardware into software',
	    images: ['img/img20.png',
	    		
	    		],	
	    
	},
	  ];
	$scope.instas = [
	{
	   	title: 'Freunde von Freunden', 
	   	tag: 'follow', 
	    link: 'https://instagram.com/fvonf/', 
	    comment: 'good style, good target group',
	    images: ['img/img21.png',
	    		'img/img22.png',
	    		],	
	    
	},
	{
	   	title: 'oliviahird', 
	   	tag: 'style', 
	    link: 'https://instagram.com/oliviahird/', 
	    comment: 'good style',
	    images: ['img/img24.png',
	    		
	    		],	
	    
	},
	{
	   	title: 'thingsorganizedneatly', 
	   	tag: 'style', 
	    link: 'https://instagram.com/thingsorganizedneatly/', 
	    comment: 'good style',
	    images: ['img/img25.png',
	    'img/img26.png',
	    		
	    		],	
	    
	},  
	
	{
	   	title: 'miatilio', 
	   	tag: 'style', 
	    link: 'https://instagram.com/myatilio/', 
	    comment: 'good style',
	    images: ['img/img28.png',
	    		
	    		],	
	    
	},  
	{
	   	title: 'jungvonmattsthlm', 
	   	tag: 'agency', 
	    link: 'https://instagram.com/jungvonmattsthlm/', 
	    comment: 'agency, follower base is neat',
	    images: ['img/img32.png',
	    		
	    		],	
	    
	},  
	{
	   	title: 'iarchitectures', 
	   	tag: 'source', 
	    link: 'https://instagram.com/iarchitectures/', 
	    comment: 'follower base need the same for webdesigners',
	    images: ['img/img29.png',
	    		
	    		],	
	    
	},
	{
	   	title: 'vanschneider', 
	   	tag: 'designer', 
	    link: 'https://instagram.com/vanschneider/', 
	    comment: 'follower base, style designers, folower base',
	    images: ['img/img30.png',
	    		
	    		],	
	    
	},
	{
	   	title: 'designmilk', 
	   	tag: 'source', 
	    link: 'https://instagram.com/designmilk/', 
	    comment: 'follower base, style',
	    images: ['img/img31.png',
	    		
	    		],	
	    
	},       
	
	  ];

}]);