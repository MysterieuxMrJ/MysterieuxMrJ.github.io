// Sticky menu
window.onscroll = function() {stickyNavBar()};
var nav = document.getElementsByClassName("nav")[0];
var sticky = nav.offsetTop;
var navWidth = document.getElementsByClassName("nav-width")[0];
var logo = document.getElementById("logo");
var logoImg = document.getElementById("logo-img");
var logoImgText = document.getElementById("logo-img-text");
function stickyNavBar() {	
	if (window.pageYOffset >= sticky) {
		nav.classList.add("sticky");
		navWidth.classList.add("sticky-sizing");
		logo.classList.add("rm-hide");
		logoImg.classList.remove("rm-hide");
		logoImgText.classList.remove("rm-hide");
	} else {
		nav.classList.remove("sticky");
		navWidth.classList.remove("sticky-sizing");
		logo.classList.remove("rm-hide");
		logoImg.classList.add("rm-hide");
		logoImgText.classList.add("rm-hide");
	}
}

function openMenuLink(btn) {
	switch (btn.id) {
		case "contact-menu":
			openContactModal()
			break;
		case "linkedin-menu":
			window.open('https://fr.linkedin.com/in/jules-vuillaume', '_blank');
			break;
		case "cv-menu":
			window.open('files/' + translations.files.cv[currentLang], '_blank');
			break;
		default:
			break;
	}
	document.getElementById('menu-btn').checked = false
}