'use strict';

angular.module('servestrApp.services', ['ngRoute', 'ui.grid', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pinning', 'ui.grid.selection', 'ui.grid.moveColumns'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/services', {
            templateUrl: 'services/services-list.html',
            controller: 'servicesListCtrl'
        });
    }])

    .controller('servicesListCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.servicesGridOptions = {};
        $scope.servicesGridOptions.enableColumnResizing = true;
        $scope.servicesGridOptions.enableFiltering = true;
        $scope.servicesGridOptions.enableGridMenu = true;
        $scope.servicesGridOptions.showGridFooter = true;
        $scope.servicesGridOptions.showColumnFooter = true;

        $scope.servicesGridOptions.columnDefs = [
            {name: 'id', enableCellEdit: false, width: '10%'},
            {name: 'name', displayName: 'Name (editable)', width: '20%'},
            {name: 'age', displayName: 'Age', type: 'number', width: '10%'},
            {name: 'gender', displayName: 'Gender', editableCellTemplate: 'ui-grid/dropdownEditor', width: '20%'},
            {
                name: 'registered',
                displayName: 'Registered',
                type: 'date',
                cellFilter: 'date:"yyyy-MM-dd"',
                width: '20%'
            },
            {name: 'address', displayName: 'Address', type: 'object', width: '30%'},
            {name: 'address.city', displayName: 'Address (even rows editable)', width: '20%'},
            {name: 'isActive', displayName: 'Active', type: 'boolean', width: '10%'},
            {name: 'pet', displayName: 'Pet', width: '20%'}
        ];

    }]);