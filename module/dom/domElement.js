const domElement = selector => document.querySelector( selector );

const domElements = selector => document.querySelectorAll( selector );

const domElementAtt = ( element, object ) => {
	const el = ( typeof element === "string" && typeof element !== "undefined" )? domElement( element ): element;
	for ( let property in object )
		el.setAttribute( property , object[ property ] );
	if ( typeof object !== "object" )
		console.log( " error en el objeto -> " + typeof object ); 
};

export { domElement, domElements, domElementAtt };