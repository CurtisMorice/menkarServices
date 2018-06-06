let express = require( 'express' );
let app = express();
let bodyParser = require( 'body-parser' );
let ppl = require( './modules/routers/ppl.router' );
const port = 5000 || process.env.PORT;

app.use( express.static( 'server/public' ) );
app.use( bodyParser.json() );
app.use( '/ppl', ppl );

app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end server up