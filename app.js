'use strict';

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

    .controller('DropBoxCtrl', ['$scope', 'DropBoxSettings', function($scope, DropBoxSettings) {
        $scope.dpfiles = [];
        $scope.remove = function(idx){
            $scope.dpfiles.splice(idx,1);
            }
        $scope.boxfiles = [];
        $scope.removeboxfiles = function(idx){
            $scope.boxfiles.splice(idx,1);
            }

    }]);