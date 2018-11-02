/*************************************************************** FLEXBOX *********************************************************/

let topYellowBlock = document.getElementsByClassName("bloc2");
let topRedBlock = document.getElementsByClassName("bloc3");
let topBlueBlock = document.getElementsByClassName("bloc4");
let middleRedBlock = document.getElementsByClassName("bloc9");
let middleBlueBlock = document.getElementsByClassName("bloc12");					// récupère les éléments
let bottomRedBlock = document.getElementsByClassName("bloc14");
let bottomYellowBlock = document.getElementsByClassName("bloc15");
let whiteBlock1 = document.getElementsByClassName("bloc1");
let whiteBlock2 = document.getElementsByClassName("bloc5");
let whiteBlock3 = document.getElementsByClassName("bloc6");
let whiteBlock4 = document.getElementsByClassName("bloc7");
let whiteBlock5 = document.getElementsByClassName("bloc8");
let whiteBlock6 = document.getElementsByClassName("bloc10");
let whiteBlock7 = document.getElementsByClassName("bloc11");
let whiteBlock8 = document.getElementsByClassName("bloc13");
let whiteBlock9 = document.getElementsByClassName("bloc16");



topYellowBlock[0].addEventListener("click", changeColors, false);					// applique les eventListener
topRedBlock[0].addEventListener("click", changeColors, false);
topBlueBlock[0].addEventListener("click", changeColors, false);
middleRedBlock[0].addEventListener("click", changeColors, false);
middleBlueBlock[0].addEventListener("click", changeColors, false);
bottomRedBlock[0].addEventListener("click", changeColors, false);
bottomYellowBlock[0].addEventListener("click", changeColors, false);
whiteBlock1[0].addEventListener("click", changeColors, false);
whiteBlock2[0].addEventListener("click", changeColors, false);
whiteBlock3[0].addEventListener("click", changeColors, false);
whiteBlock4[0].addEventListener("click", changeColors, false);
whiteBlock5[0].addEventListener("click", changeColors, false);
whiteBlock6[0].addEventListener("click", changeColors, false);
whiteBlock7[0].addEventListener("click", changeColors, false);
whiteBlock8[0].addEventListener("click", changeColors, false);
whiteBlock9[0].addEventListener("click", changeColors, false);



function changeColors()																// retire la couleur appliquée et en ajoute une autre
{
	if (this.classList.contains("bg-white")) 
	{
		this.classList.remove("bg-white");
		this.classList.add("bg-red");
	}

	else if (this.classList.contains("bg-red")) 
	{
		this.classList.remove("bg-red");
		this.classList.add("bg-blue");
	}

	else if (this.classList.contains("bg-blue")) 
	{
		this.classList.remove("bg-blue");
		this.classList.add("bg-yellow");
	}

	else if (this.classList.contains("bg-yellow")) 
	{
		this.classList.remove("bg-yellow");
		this.classList.add("bg-white");
	}
}



/******************************************************************* GRID *****************************************************************************/



let colors = ["bg-yellow", "bg-red", "bg-blue", "bg-green", "bg-purple", "bg-white"];						// liste couleurs pour changeColorsGrid

let blocks = document.getElementsByClassName("blocGrid");													// récupère tous les blocs du mondrian dans une liste


for (let i = 0; i < blocks.length; i++) 																	// ajoute les eventListener à tous les blocs
{
	blocks[i].addEventListener("click", changeColorsGrid2, false);											// changeColorsGrid2
}


function getRandomInt(max) 																					// génère un entier aléatoire entre 0 et max
{
  return Math.floor(Math.random() * Math.floor(max));
}

function changeColorsGrid()																					// aléatoire parmi les couleurs de la liste colors
{
	this.classList.remove("bg-yellow", "bg-red", "bg-blue", "bg-green", "bg-purple", "bg-white");			// retire toutes les classes bg-color
	this.classList.add(colors[getRandomInt(colors.length)]);												// en ajoute une aléatoire dans la liste colors
}

function changeColorsGrid2()																				// rgb aléatoire
{
	this.style.backgroundColor = "rgb("+getRandomInt(256)+","+getRandomInt(256)+","+getRandomInt(256)+")";	// ajoute une couleur rgb générée aléatoirement en background-color
}

function changeColorsGrid3()																				// saisie par l'utilisateur
{
	let couleur = prompt("Entrez la couleur de la case :");													// affiche un prompt et stocke la chaine dans couleur
	this.style.backgroundColor = couleur;																	// applique la couleur saisie
}