angular.module("angular-redux")
    .component("addItems", {
        templateUrl: "./components/addItems/addItems.html",
        controller: function ($ngRedux, $timeout) {
            var ctrl=this;
            ctrl.addTodo=function(){
                $ngRedux.dispatch({type:"ADD",payload:ctrl.todo});
            }
            ctrl.delTodo=function(){
                $ngRedux.dispatch({type:"DEL"});
            }

        }
    })