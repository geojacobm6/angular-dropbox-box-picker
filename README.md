angular-dropbox-box-picker
==========================

A simple and cool angular directive which interacts with box and dropbox file pickers

Demo
==========================

http://geojacobm6.github.io/angular-dropbox-box-picker/

Installation
==========================

Download https://github.com/geojacobm6/angular-dropbox-box-picker/archive/master.zip

Usage
==========================


 1. Include script in html
 
   ```html
  <script src="dropbox-picker.min.js"></script>
  ```
  
For Dropbox:
  
   ```
  <script type="text/javascript" src="https://www.dropbox.com/static/api/2/dropins.js" id="dropboxjs"  data-app-key="APP_KEY"></script>
  ```
  
 Don't forgot ot replace APP_KEY with appkey which get from dropbox app console  https://www.dropbox.com/developers/apps
 
For Box:

 
   ```
  <script type="text/javascript" src="https://app.box.com/js/static/select.js"></script>
  ```
    

 2. Include the dropbox-picker as a dependency for your app

       ```
      angular.module('myApp', ['dropbox-picker'])
       ```
       
       
 3. Configuration
 
  for more details about options got https://www.dropbox.com/developers/dropins/chooser/js and      https://developers.box.com/the-box-file-picker/


       angular.module('DropboxControllers', ['dropbox-picker'])
    
        .config(['DropBoxSettingsProvider', function(DropBoxSettingsProvider) {
    
          // Configure the options
            DropBoxSettingsProvider.configure({
                linkType: 'preview',//dropbox link type
                multiselect: true,//dropbox multiselect
                extensions: ['.pdf', '.doc', '.docx'],//dropbox file extensions
                box_clientId: 'tdjpulviw9wzj20gd1t8rlh93vpvvh4m',// box CLient Id
                box_linkType: 'shared',//box link type
                box_multiselect: 'true'//box multiselect
              });
        }])
        
 4.  Create scope to handle choosed files
 
  ```
      .controller('DropBoxCtrl', ['$scope', 'DropBoxSettings', function($scope, DropBoxSettings) {
   
        $scope.dpfiles = []; // dropbox files will be here
        
        $scope.boxfiles = []; // box files will be here
      }]);   
 ```

 5. Add the directive to your HTML element
 
    Dropbox:
      
          <a href="javascript:;" drop-box-picker dbpicker-files="dpfiles">Dropbox Picker</a>

    Box:
    
          <a href="javascript:;" box-picker boxpicker-files="boxfiles">Box Picker</a>
          
 6. Done.

 
