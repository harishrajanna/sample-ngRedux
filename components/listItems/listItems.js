angular.module("angular-redux")
    .component("listItems", {
        templateUrl: "components/listItems/listItems.html",
        controller: function ($ngRedux, $timeout) {
            var ctrl=this;
            ctrl.$onInit=function(){
                ctrl.todos = {
                    todos: ["sample Todo"]
                }
            };
            $ngRedux.subscribe(function () {
                    ctrl.todos = $ngRedux.getState()
            })

        }
    })