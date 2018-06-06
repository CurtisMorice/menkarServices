let express = require( 'express' );
let router = express.Router();

router.get( '/', ( req, res )=>{
    console.log( 'in GET' );
    res.send( 'cacaw' );
}); // end GET

module.exports = router;