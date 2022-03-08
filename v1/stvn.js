if (navigator.appVersion.indexOf('Windows') != -1)
{
	document.write('<link rel="stylesheet" type="text/css" href="winnows.css">');
	if (window.chrome) document.write('<link rel="stylesheet" type="text/css" href="/directwrite.css">');
}

(function()
{
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

window.addEventListener('load', function()
{
    document.getElementById('skrollr-body').className = 'loaded';
});