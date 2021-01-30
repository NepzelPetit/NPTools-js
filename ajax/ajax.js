function ajax (file) {
	this.file = file;
}

ajax.prototype.json = function( fun ){
	fetch( this.file )
	.then( res => res.json() )
	.then( json => fun( json ) );
};

ajax.prototype.text = function( fun ){
	fetch( this.file )
	.then( res => res.text() )
	.then( text => fun( text ) );
};

export { ajax };