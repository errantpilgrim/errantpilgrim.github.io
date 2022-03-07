function isMobile()
{
	return ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera));
}

function reflow()
{
	if (isMobile)
	{
		window.location.href = window.location.href;
	}
	else if ((window.innerWidth >= 1050 && initWidth < 1050) || (window.innerWidth < 1050 && initWidth >= 1050))
	{
		window.location.href = window.location.href;
	}
}

var initWidth = window.innerWidth;
var isMobile = isMobile();

if (isMobile)
{
	setTimeout(function ()
	{
		document.body.addEventListener('touchmove', function(e)
		{
			e.preventDefault();
		}, false);
	}, 0);
}
else
{
	document.write('<link rel="stylesheet" type="text/css" href="reveal.css" media="screen and (min-width: 1050px)" data-skrollr-stylesheet>');
}

window.addEventListener('load', function()
{
	if(isMobile)
	{
		document.getElementById('hdr').style.height = window.innerHeight + "px";
		document.getElementById('ftr').style.height = window.innerHeight + "px";
	}

	window.addEventListener('resize', reflow, true);
	window.addEventListener('orientationchange', reflow, true);

    var s = skrollr.init({forceHeight: false});
});