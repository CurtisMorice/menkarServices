let verbose = true;

myApp.service( 'PplService', function( $http ){
    let sv = this;
    if( verbose ) console.log( 'PPL service' );
    sv.getPpl = function(){
        if( verbose ) console.log( 'in service getPpl' );
        return $http({
            method: 'GET',
            url: '/ppl'
        }).then( function( response ){
            if( verbose ) console.log( 'back from GET with:', response );
            sv.thingy = response.data; 
        }).catch( function( error ){
           if( verbose ) console.log( 'error with GET:', error );
        }); // end http
    } //end getPpl
});