(function( $ ) {

     $.fn.loremDicksum = function() {

    	var getRand = function(low, spread) {
			return Math.floor( ( Math.random() * spread) + low);
		};

		var capitalize = function(word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		};

    	$( this ).each(function() {
 			var el = $( this );
	    	var lorem = '';
	    	var cap = true;
	    	var wordcount = getRand(50, 50); 	// Number of words in this paragraph (50-100)
	    	var phrasecount = getRand(5, 13);	// Number of words in the next sentence (5-18)
	    	if ( el.is( 'a, button') ) {
	    		wordcount = 1; 
	    		phrasecount = 4;
	    	} else if ( el.is( 'h1, h2, h3, h4, h5, h6, label' ) ) {
	    		wordcount = getRand(6, 6);
	    		phrasecount = 16;
	    	}
	    	while (wordcount--) {
	    		if ( cap ) {
	    			lorem += capitalize( dicktionary[ getRand ( 0, dicktionary.length ) ] );
	    			cap = false;
	    		} else {
	    			lorem += dicktionary[ getRand (0, dicktionary.length )];
	    		}
	    		if ( phrasecount-- && wordcount ) {
	    			// 20% chance of comma
	    			if ( getRand ( 0, 1.2 ) ) {
	    				lorem += ',';
	    			}
	    			lorem += ' ';
	    		} else {
	    			lorem += '. ';
	    			phrasecount = getRand(5, 13);
	    			cap = true;
	    		}	
	    	}
	    	el.empty().append(lorem);
	    });
	};

    var dicktionary = [
    	'butts',
    	'dicks',
    	'anal',
    	'axe wound',
    	'meat curtains',
    	'pussywillow',
    	'fartknocker',
    	'cumdumpster',
    	'shit-eating',
    	'cockwallet',
    	'moist',
    	'penetration',
    	'scissoring',
    	'frottage',
    	'handjob',
    	'blowie',
    	'five-digit disco',
    	'jackoff',
    	'cunt',
    	'hairy beaver',
    	'cock',
    	'"down there"',
    	'delicate flower',
    	'rump',
    	'wet lips',
    	'clitoris',
    	'vagina',
    	'vaginal',
    	'discharge',
    	'penis',
    	'logjam',
    	'cock',
    	'buggery',
    	'titties',
    	'boobs',
    	'nipples',
    	'pussy',
    	'doggy style',
    	'labia',
    	'areola',
    	'vas deferens',
    	'docking',
    	'rimjob',
    	'sphincter',
    	'taint',
    	'wet',
    	'juicy',
    	'sloppy',
    	'rock-hard',
    	'fondling',
    	'kisses down low',
    	'fuckboi',
    	'fetish',
    	'meatpacker',
    	'money shot',
    	'reverse',
    	'boner',
    	'jimmy hat',
    	'beast of two backs',
    	'fisting',
    	'strap-on',
    	'pegged',
    	'right-in-the-asshole',
    	'coitus',
    	'basket-making',
    	'making time',
    	'blowing the grounsils',
    	'netflix and chill',
    	'blowjob',
    	'threesome',
    	'consensual',
    	'virginal',
    	'nasty',
    	'bean-flicking',
    	'skullfucking',
    	'meaty',
    	'clackers',
    	'balls',
    	'wrinkly',
    	'gang-bang',
    	'sweaty',
    	'ass-to-mouth',
    	'Alaskan pipeline',
    	'fucked',
    	'nailed',
    	'railed',
    	'ramming',
    	'"just the tip"',
    	'booty call',
    	'voyeurism',
    	'play',
    	'down his',
    	'down her',
    	'down their',
    	'deep throat',
    	'cum-guzzling',
    	'Cleveland steamer',
    	'glass-bottom boat',
    	'golden shower',
    	'erotic',
    	'sex-positive',
    	'sex-negative',
    	'sexual',
    	'casual',
    	'shame',
    	'prudish',
    	'buttplugs',
    	'vibrator',
    	'dongs',
    	'dildos',
    	'schlong',
    	'chubby',
    	'brussel sprouts',
    	'sack',
    	'dongle',
    	'dingleberry',
    	'fanny',
    	'BBW',
    	'DTF',
    	'FWB',
    	'fish taco',
    	'lemon party',
    	'distended',
    	'gaping',
    	'glory hole',
    	'pornographic',
    	'fingerbang',
    	'fingerblasting',
    	'ejaculate',
    	'squirt',
    	'cumswap',
    	'jizz',
    	'sperm donor',
    	'chlamydia',
    	'ass bandit',
    	'butt pirate',
    	'snake charmer',
    	'santorum',
    	'sodomize',
    	'mustache ride',
    	'pussy bumper',
    	'fat',
    	'skinny',
    	'long',
    	'erect',
    	'erection',
    	'dysfunctional',
    	'bite',
    	'all-day',
    	'premature',
    	'sore',
    	'rash',
    	'shagging',
    	'acrobatic',
    	'queer',
    	'gay',
    	'saggy',
    	'straight',
    	'super gay',
    	'hetero-normative',
    	'butch',
    	'spanking',
    	'moan',
    	'orgasm',
    	'climax',
    	'quivering',
    	'mediocre',
    	'pleasurable',
    	'kinky',
    	'vanilla',
    	'lesbian',
    	'scat',
    	'poop',
    	'quickie',
    	'ass play',
    	'diddle',
    ];

	$( '.dicksum' ).loremDicksum();

}( jQuery ));
