document.addEventListener("DOMContentLoaded", load);

function load()
{
	document.getElementById("inputCode").addEventListener("keypress", function() {
		var html_string= document.getElementById("inputCode").value;
		document.getElementById('output').src = "data:text/html;charset=utf-8," + escape(html_string);

	});
	document.getElementById("run").addEventListener("click", function() {
		var html_string= document.getElementById("inputCode").value;
		document.getElementById('output').src = "data:text/html;charset=utf-8," + escape(html_string);

	});
}
