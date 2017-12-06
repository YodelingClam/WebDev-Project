document.addEventListener("DOMContentLoaded", load);

function load()
{
	if (localStorage.getItem("xml") == null)
	{
		localStorage.setItem("xml", xmlToString(loadXML("exampleUsers.xml")));
	}
	hideErrors();
	document.getElementById("example").addEventListener("submit", validate);
	document.getElementById("example").addEventListener("reset", resetForm);

}

function validate(e)
{
	hideErrors();
	if (formHasErrors())
		e.preventDefault();

}

/*
 * Hides all of the error elements.
 */
 function hideErrors()
 {
 	Array.from(document.getElementsByClassName("error")).forEach(function(element)
 	{
 		element.style.display = "none";
 	});
 }

 function resetForm(e)
 {
	// Confirm that the user wants to reset the form.
	if ( confirm('Clear example?') )
	{
		// Ensure all error fields are hidden
		hideErrors();
		
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();
	
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;	
}

function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

function formHasErrors()
{
	var errors = false;
	//check name
	if (!trim(document.getElementById("title").value))
	{
		if (!errors)
			document.getElementById("title").focus();
		errors = true;
		document.getElementById("title_error").style.display = "block";
	}

	if (!trim(document.getElementById("text").value))
	{
		if (!errors)
			document.getElementById("text").focus();
		errors = true;
		document.getElementById("text_error").style.display = "block";
	}

	if (!trim(document.getElementById("code").value))
	{
		if (!errors)
			document.getElementById("code").focus();
		errors = true;
		document.getElementById("code_error").style.display = "block";
	}

	return errors;
}

function addExample()
{
	var xml_doc = jQuery.parseXML(localStorage.getItem("xml"));
	xml_root = xml_doc.documentElement;
	var node = xml_doc.createElement("example");
	var title = xml_doc.createElement("title");
	title.innerHTML = document.getElementById("title").value;
	node.appendChild(title);
	var text = xml_doc.createElement("text");
	text.innerHTML = document.getElementById("text").value;
	node.appendChild(text);
	var code = xml_doc.createElement("code");
	code.innerHTML = document.getElementById("code").value.replace('<', "&amp;lt;").replace('>', "&amp;gt;");
	node.appendChild(code);
	xml_root.insertBefore(node, xml_root.getElementsByTagName("end")[0]);
	localStorage.setItem("xml", xmlToString(xml_doc));
}