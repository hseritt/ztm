const debug = true;
const origMsg = "Click on a box below";
const para = document.querySelector('p');
const button = document.querySelector('button');
const divList = document.getElementsByClassName('box');

const initMsg = function() {
	if (debug) console.log('calling initMsg ...');
	button.style.display = "none";
	para.textContent = origMsg;
}

const displayText = (event) => {
	button.style.display = "";
	const msg = "You clicked the " + event.currentTarget.className;
	if (debug) console.log(msg);
	para.textContent = msg;
}

if (debug) console.log(divList);

initMsg();

for (let i=0; i < divList.length; i++) {
	divList[i].addEventListener('click', displayText);
}

button.addEventListener('click', initMsg);
