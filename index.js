
var reducer=(state={todos:[]},action)=>{
    console.log(state,action)
   switch(action.type){
        case "ADD":{
             state.todos.push(action.payload);
            return state 
        }
        case "DEL":
            return  state;
        default:
            return state;
    }

    return state;      
}
var app=angular.module("angular-redux",["ngMaterial","ngRedux"]);
app.config(function($ngReduxProvider){
$ngReduxProvider.createStoreWith(reducer)
});
