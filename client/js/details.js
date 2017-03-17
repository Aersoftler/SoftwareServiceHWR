angular.module(
    "details", []
)
    .controller(
        'detailCtrl',
        function ($scope, $http) {
            $http.post(window.location.pathname).then(function (response) {
                $scope.appli = response.data[0];
                $scope.appli.logo = buildLogoUrl($scope.appli);
                for (let i in response.data[0].screenshots) {
                    $scope.appli.screenshots[i] = picUrl + '/' + $scope.appli.name + '/' + $scope.appli.screenshots[i];
                }
                if ($scope.appli.download.length > 0) {
                    $scope.appli.download[0] = '/download/' + $scope.appli.download[0];
                }
            })
        }
    );