var ubs = angular.module('ubs', []);


ubs.HangoutController = function ($scope) {

    $scope.setHangout = function () {

      hangout =
              prompt("Please enter the url to the desired hangout", $scope.hangout);

      if(hangout)
          {
              $scope.hangout = hangout;
          }

    };

};