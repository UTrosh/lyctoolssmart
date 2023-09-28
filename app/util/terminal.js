function terminate(term) {
	term.grabInput( false ) ;
	setTimeout( function() { process.exit() } , 100 ) ;
}


module.exports = {
    terminate
}