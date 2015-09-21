$( document ).ready(function (){
	$( '#generate').click( function() {
		var markup = '<h2 class="example-dicksum"></h2>';
		var i = $('input[name="paragraphs"]').val();
		while( i-- ) {
			markup += '<p class="example-dicksum"></p>';
		}
		$( '#example' ).empty().append( markup );
		$( '.example-dicksum').loremDicksum();
		$( this ).loremDicksum();
	} );
} );