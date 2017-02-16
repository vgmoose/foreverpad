var doNotUpdate = false;

function init() 
{
    window.addEventListener('hashchange', function() {
	if (!doNotUpdate)
        	loadFromURL();
    }, false);

    if (location.hash != "" && location.hash != "#")
            loadFromURL();

}

function loadFromURL()
{
	var lzstring = LZString.decompressFromEncodedURIComponent(window.location.hash.substr(1));
	var content = lzstring;
	document.getElementById("code").value = content;
}

function setToURL()
{
	doNotUpdate = true;
	var lzstring = LZString.compressToEncodedURIComponent(document.getElementById("code").value);

	var url = lzstring;
	window.location.hash = "";
	window.location.hash = url;

	setTimeout(500, function() { doNotUpdate = false; });
}

