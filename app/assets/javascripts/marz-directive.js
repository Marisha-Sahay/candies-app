angular.module("app").directive("marzDirective",function(){
  return {
    restrict: 'E',
    template: '<h1>This is mars directive</h1><h2>I can add this text anywhere</h2>'
  }
});