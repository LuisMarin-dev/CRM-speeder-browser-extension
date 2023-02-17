// ======================== CRM Automata ==========================
// Created By Me, Luis Marin Jan 9 2023


alert("extension working")

//This function clicks the button once based on the selector.
// Which in this case, it'll be clicking the first number call button
function clickTelOne() {
  document.getElementById("tel1").click();
}

// ----------------------------------------------------

// This function clicks on specific X, Y coordinates. We won't be using it for the moment, it's more of a fun fact lol.
// function blindClick(){
    // document.elementFromPoint(600, 311).click();
// }

// blindClick()

// ---------------------------------------------------
// This event listener listens for the keydowns(holding) and 
document.addEventListener("keydown", e => 
	e.preventDefault();
	if(
		e.key.toLowerCase() === "s"
		&& e.ctrlKey
	){
		alert("Ctrl and key s pressed");
	}	
);

// ----------------------------------------------------
// This is the event listener for the "Next Project" shortcut
document.addEventListener('keydown', (e) => {
    if(
		e.key.toLowerCase() === "n"
		&& e.altKey
	){
		window.location = "https://crm.alarmsofflorida.com/en/project/next";
	}
});


// location.href = 'https://crm.alarmsofflorida.com/en/project/next';
// location.href = "https://crm.alarmsofflorida.com/en/project/next";
