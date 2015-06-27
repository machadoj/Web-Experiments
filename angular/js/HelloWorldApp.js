var app = angular.module("HelloWorldApp", []);

app.controller("HelloWorldController",
    function ($scope) {
        console.log("Hello World from Controller");
        $scope.hello = "Hello from Angular JS";
    });

app.controller("SimpleJSObject",
    function ($scope) {

        var employee = {
            first: "Alice",
            last: "Wonderland"
        };
        $scope.employee = employee;
    });

app.controller("ArrayJSObject",
    function ($scope) {

        var employees = [{
            first: "Alice",
            last: "Wonderland"
        },
        {
            first: "Bob",
            last : "Marley"
        }];

        $scope.employees = employees;
    });