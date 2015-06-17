app.controller('ToolsController', ['$scope', function($scope) {
  $scope.designs = [ 
    
    
    { 
      title: 'Coolers | simple and nice tones', 
      link: 'http://coolors.co/',  
    },
    { 
      title: 'Atomic | simple wireframing tool, coding style', 
      link: 'https://atomic.io/',  
    },
    { 
      title: 'Adobe color | good for analogous colors', 
      link: 'https://color.adobe.com',  
    },
    
  ];
  $scope.organizations = [ 
    
    
    { 
      title: 'Slack | love the integrations', 
      link: 'http://slack.com',  
    },
    { 
      title: 'Trello | simply the best', 
      link: 'http://trello.com/',  
    },
    { 
      title: 'Google Apps | industry standard, although email threads are crap', 
      link: 'https://www.google.com/work/apps/business/',  
    },
    
  ];



}]);