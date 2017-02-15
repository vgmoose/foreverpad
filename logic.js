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
	var content = atob(window.location.hash.substr(1));
	document.getElementById("code").value = content;
}

function setToURL()
{
	doNotUpdate = true;
	var url = btoa(document.getElementById("code").value);
	window.location.hash = "";
	window.location.hash = url;

	setTimeout(500, function() { doNotUpdate = false; });
}

