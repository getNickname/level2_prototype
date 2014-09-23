function animateSeparation() {

	var leftImg 		= $('#sep-left-img');
	var rightImg 		= $('#sep-right-img');

	// var designerHover	= $('#designer');
	// var coderHover		= $('#coder');
	// var designerDesc	= $('#designer-desc');
	// var coderDesc		= $('#coder-desc');	
	// var designerArrow	= $('#designer-arrow');
	// var coderArrow		= $('#coder-arrow');		
	// var designerBg		= $('#designer-bg');
	// var coderBg			= $('#coder-bg');

	var container 		= $('#sep-container');
	var section 		= $('#section');
	var duration 		= 500;

	var mouseX = 0;
	var relMouseX = 520;
	var xp = 520;
	var loop;
	var frameRate = 30;
	var timeInterval = Math.round( 1000 / frameRate );

	// Get mouse position
	section.mousemove(function(e){

	   	// raw mouse position
	   	mouseX = e.pageX;

	   	// mouse position relative to container div
	   	relMouseX = mouseX - container.offset().left;

	});

	section.mouseenter(function(){

		leftImg.stop();
		rightImg.stop();

		loop = setInterval(function(){

			// zeno's paradox dampens the movement
			xp += (relMouseX - xp) / 12;

			leftImg.css({width:520 + (520 - xp) * 0.9});
		    rightImg.css({width:520 + (xp - 520) * 0.9});

		    // designerBg.css({left: 100 + (520 - xp) * 0.05, opacity: ((1040 - xp)/520)});
		    // coderBg.css({right:  100 + (xp - 520) * 0.05, opacity: (xp/520)});

		    // designerDesc.css({opacity: ((1040 - xp)/520)});
		    // coderDesc.css({opacity: (xp/520)});

		}, timeInterval );

	});

	section.mouseleave(function(){ 

		clearInterval(loop);
		xp 			= 520;
		mouseX 		= 0;
		relMouseX 	= 520;

		// leftImg.css({width: 520});
		// rightImg.css({width: 520});
		// leftImg.finish();
		// rightImg.finish();

		leftImg.finish().animate({width: 520}, duration);
		rightImg.finish().animate({width: 520}, duration);
		
		// coderDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		// designerDesc.hoverFlow(e.type, {opacity: 1}, duration, 'easeOutQuad');
		// coderBg.hoverFlow(e.type, {right:100, opacity: 1}, duration, 'easeOutQuad');
		// designerBg.hoverFlow(e.type, {left:100, opacity: 1}, duration, 'easeOutQuad');

	}); 
	
}

animateSeparation();