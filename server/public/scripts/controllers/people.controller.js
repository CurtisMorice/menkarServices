let myApp = angular.module( 'myApp', [] );

myApp.controller( 'PeopleController', function( PplService ){
    let vm = this;
    console.log( 'PeopleController' );
    vm.getPpl = function(){
        console.log( 'in controller, getPpl');
        PplService.getPpl().then( function(){
            console.log( 'back in controller');
            vm.thingy = PplService.thingy;
        });
    } // end getPpl
});