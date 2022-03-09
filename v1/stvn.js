if (navigator.appVersion.indexOf('Windows') != -1)
{
	document.write('<link rel="stylesheet" type="text/css" href="winnows.css">');
	if (window.chrome) document.write('<link rel="stylesheet" type="text/css" href="/directwrite.css">');
}

window.addEventListener('load', function()
{
    document.getElementById('skrollr-body').className = 'loaded';
});