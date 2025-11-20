/*--- DEBUT Exécution des fonctions au chargement de la page ---*/
document.getElementById('my-age').innerHTML = getAge();
var currentTheme = initTheme();
/*--- FIN Exécution des fonctions au chargement de la page ---*/


/*--- DEBUT Déclarations des fonctions ---*/

// Date du jour pour le post de présetation
function getPostDate(lang){
	var d = new Date();
	var day = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();
	var monthArrEN = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
	var monthArrFR = ["Janvier", "Février","Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre","Decembre"];
	if (lang == "FR") {
		return day+" "+monthArrFR[month]+" "+year;
	} else if (lang == "EN"){ 
	return monthArrEN[month]+" "+day+", "+year;
	}
}

//Age en fonction de la date du jour
function getAge(date) { 
	var birthdate = new Date("2006/11/14");
	var age = new Date(Date.now() - birthdate.getTime()); 
	return Math.abs(age.getUTCFullYear() - 1970);
}

// Message avertissement résolution écran non prise en charge
resolutionError();
function resolutionError() {
	var w = window.screen.availWidth;
	var h = window.screen.availHeight;
	if (window.matchMedia("(orientation: portrait)").matches) {	
		if (w < 350 || h < 600) {
			showAlert("", translations.alert.screenreso[currentLang], "warning");
		}
	}
	if (window.matchMedia("(orientation: landscape)").matches) {
		if (w < 600 || h < 350) {
			//showAlert("", "Résolution d'écran non supportée", "warning");
			showAlert("", translations.alert.screenreso[currentLang], "warning");
		}
	}
}

// Alert message box
function showAlert(title, message, type) {
	// Background de l'alert
	var alertDiv = document.createElement("div");
	alertDiv.setAttribute("id","alert")
	alertDiv.classList.add("alert");
	// Box de l'alert
	var alertContentDiv = document.createElement("div");
	alertContentDiv.classList.add("alert-content");
	alertContentDiv.classList.add("fade-in");
	alertContentDiv.classList.add(type);
	// Titre de l'alert
	if(title.length > 0){
		var alertTitleDiv = document.createElement("div");
		alertTitleDiv.classList.add("alert-title");
		alertTitleDiv.innerHTML = title;
		alertContentDiv.appendChild(alertTitleDiv);
	}
	// Message de l'alert
	if(message.length > 0){
		var alertTextDiv = document.createElement("div");
		alertTextDiv.classList.add("alert-text");
		alertTextDiv.innerHTML = message;
		alertContentDiv.appendChild(alertTextDiv);
	}
	// Séparation bouton
	var hr = document.createElement("hr");
	alertContentDiv.appendChild(hr);
	// Bouton de l'alert
	var alertButtonDiv = document.createElement("div");
	alertButtonDiv.classList.add("alert-button");
	alertButtonDiv.innerHTML = "Ok";
	alertButtonDiv.addEventListener("click", function() {
		closeAlert("alert")
	});
	alertContentDiv.appendChild(alertButtonDiv);
	// Construction de l'alert
	alertDiv.appendChild(alertContentDiv);
	document.body.appendChild(alertDiv);
	// Blocage du scroll
	document.getElementsByTagName('html')[0].style = "overflow-y:hidden; position: relative;";
}

function closeAlert(id) {
	var alertDelete = document.getElementById(id);
	alertDelete.remove();
	document.getElementsByTagName('html')[0].style = "overflow-y:visible; position: static;";
}





// Theme
function initTheme() {
	var theme = getThemeCookie();
	if (theme == ""){
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) { currentTheme = "dark"; }
		else { currentTheme = "light"; }
		setThemeCookie(currentTheme)
	} else {
		currentTheme = theme;
	}
	setTheme();
	return currentTheme;
}

function setTheme(){
	var themecssLink = document.getElementById("themecss");
	switch (currentTheme) {
		case 'dark':
			themecssLink.href = "assets/css/style-dark.css";
			document.getElementById("btn-theme-label").innerHTML = translations.settings.lightmode[currentLang];
			break;
		case 'light':
		default:
			themecssLink.href = "assets/css/style-light.css";
			document.getElementById("btn-theme-label").innerHTML = translations.settings.darkmode[currentLang];
			break;
	}
}

function changeTheme() {
	switch (currentTheme) {
		case 'dark':
			currentTheme = 'light';
			break;
		case 'light':
		default:
			currentTheme = 'dark';
			break;
	}
	setTheme();
	setThemeCookie();
}

//Création/Édition du cookie de thème
function setThemeCookie() {
	if (location.protocol !== 'https:') {
		//http
		document.cookie = "theme=" + currentTheme + ";max-age=31536000;";
	} else {
		//https
		document.cookie = "theme=" + currentTheme + ";max-age=31536000;SameSite=None;Secure";
	}
}

//Récupération cookie de thème
function getThemeCookie() {
	let name = "theme=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
