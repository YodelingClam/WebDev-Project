document.addEventListener("DOMContentLoaded", load);

function load()
{
	document.getElementById("Example").addEventListener("click", function () {
		displayAll();
		document.getElementsByClassName("exampleDiv")[parseInt(Math.random()*(document.getElementsByClassName("exampleDiv").length))].style.display = "block";
	});	
	document.getElementById("All").addEventListener("click", function () {
		displayAll();
		showAll();
	});
	document.getElementById("Your").addEventListener("click", function () {
		if(localStorage.getItem("xml") != null)
		{
			displayAllYour();
		}
		showAll();
	});	

}

function displayAll() {
	let examples_xml = loadXML('example.xml');
	document.getElementById('mainBody').innerHTML = '';

	Array.from(examples_xml.getElementsByTagName('example')).forEach( function (element, index){
		var div = document.createElement('div');
		div.className = "exampleDiv"
		var h1 = document.createElement('h1');
		h1.innerHTML = element.getElementsByTagName('title')[0].firstChild.nodeValue;
		var h5 = document.createElement('h5');
		h5.innerHTML = element.getElementsByTagName('text')[0].firstChild.nodeValue;
		var p = document.createElement('p');
		p.innerHTML = element.getElementsByTagName('code')[0].firstChild.nodeValue;
		div.appendChild(h1);
		div.appendChild(h5);
		div.appendChild(p);

		div.style.display = "none";

		document.getElementById('mainBody').appendChild(div);
	});
}

function displayAllYour() {
	let examples_xml = jQuery.parseXML(localStorage.getItem("xml"));//loadXML('example.xml');
	document.getElementById('mainBody').innerHTML = '';

	Array.from(examples_xml.getElementsByTagName('example')).forEach( function (element, index){
		var div = document.createElement('div');
		div.className = "exampleDiv"
		var h1 = document.createElement('h1');
		h1.innerHTML = element.getElementsByTagName('title')[0].firstChild.nodeValue;
		var h5 = document.createElement('h5');
		h5.innerHTML = element.getElementsByTagName('text')[0].firstChild.nodeValue;
		var p = document.createElement('p');
		p.innerHTML = element.getElementsByTagName('code')[0].firstChild.nodeValue;
		div.appendChild(h1);
		div.appendChild(h5);
		div.appendChild(p);

		div.style.display = "none";

		document.getElementById('mainBody').appendChild(div);
	});
}

//shows all the animals in the list.
function showAll() {
	Array.from(document.getElementsByClassName('exampleDiv')).forEach( function (element){
		element.style.display = 'block';
	});
}