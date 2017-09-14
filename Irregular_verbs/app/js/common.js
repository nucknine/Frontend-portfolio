$(document).ready(function(){
function getVerb(verb) {
	var req = getXMLHttpRequest();

	req.onreadystatechange = function() {
		if(req.readyState != 4) return;

		var result = document.getElementById('result');
		result.innerHTML = req.responseText;

	}
	req.open('GET','../inc/result-table.php?infinitive='+verb, true);
	req.send(null);
}

function showVerbs(e){
	e.preventDefault();
	var txt = document.getElementById('txtVerb');
	getVerb(txt.value);
}

var sub = document.getElementById("sub");
sub.addEventListener("click", showVerbs);
});

