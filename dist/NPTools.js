// Ajax Functions
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

// Dom elements

const domElement = selector => document.querySelector( selector );

const domElements = selector => document.querySelectorAll( selector );

const domElementAtt = ( element, object ) => {
	const el = ( typeof element === "string" && typeof element !== "undefined" )? domElement( element ): element;
	for ( let property in object )
		el.setAttribute( property , object[ property ] );
	if ( typeof object !== "object" )
		console.log( " error en el objeto -> " + typeof object ); 
};