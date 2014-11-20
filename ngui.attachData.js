(function(window, document, undefined) {

  var module = angular.module('ngui.attachData', []);

  module.directive('attachData', [ '$rootScope',
    function($rootScope) {
      return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
          var variableName = $attrs.attachData;
          try {
            $rootScope[variableName] = JSON.parse($element.text());
          } catch (e) {
            console.error(e);
          }
        }
      }
    }
  ]);

})(window, document);

