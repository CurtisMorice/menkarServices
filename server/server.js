let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
const port = 5000 || process.env.PORT;

app.use( express.static( 'server/public' ) );
app.use( bodyParser.json() );

app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up