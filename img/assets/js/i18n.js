/*DEBUT Détection de la langue*/

var currentLang = initLanguage();
loadTranslation();

//Initialisation du toggle
$(window).on('load', function() {
	selectToggleLanguage(currentLang);
});

//Récupération de la langue du navigateur
function getLocalLanguage(){
	var language = navigator.language;
	language.toLowerCase();
	switch (language.includes('fr')) {
		case true:
			return 'fr';
		default:
			return 'en';
	}
}

//Initialisation de la langue des traduction
function initLanguage() {
	var language = getLanguageCookie();
	if (language == ""){
		currentLang = getLocalLanguage();
		setLanguageCookie(currentLang)
	} else {
		currentLang = language;
	}
	return currentLang;
}

//Chargement des traductions
function loadTranslation() {
	$(document).ready( function () {
		var i18n = new I18n();
		i18n.localize();
		i18n.lang(currentLang);
	});
}

//Changement de la langue
function changeLanguage() {
	switch (currentLang) {
		case 'en':
			currentLang = 'fr';
			break;
		case 'fr':
		default:
			currentLang = 'en';
			break;
	}
	selectToggleLanguage(currentLang);
	setLanguageCookie();
	loadTranslation();
	//Bouton thème
	switch (currentTheme) {
		case 'dark':
			document.getElementById("btn-theme-label").innerHTML = translations.settings.lightmode[currentLang];
			break;
		case 'light':
		default:
			document.getElementById("btn-theme-label").innerHTML = translations.settings.darkmode[currentLang];
			break;
	}
}

//Création/Édition du cookie de langue
function setLanguageCookie() {
	if (location.protocol !== 'https:') {
		//http
		document.cookie = "language=" + currentLang + ";max-age=31536000;";
	} else {
		//https
		document.cookie = "language=" + currentLang + ";max-age=31536000;SameSite=None;Secure";
	}
}

//Récupération cookie de langue
function getLanguageCookie() {
	let name = "language=";
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

/*FIN Détection de la langue*/

/*DEBUT Toggle choix de langue*/

function selectToggleLanguage(lang) {
	var toggleFR = $('#lang-fr');
	var toggleEN = $('#lang-en');
	var flagFR = $('#flag-fr');
	var flagEN = $('#flag-en');
	var currentSelection = $('.rm-language-selection');
	currentSelection.removeClass('rm-language-selection_active');
	currentSelection.removeClass('rm-no-click');
	$('.rm-flag-lang').addClass('rm-unselected-lang');
	var toggleHighlight = $('.rm-language-highlight');

	switch (currentLang) {
		case 'en':
			toggleEN.addClass('rm-language-selection_active');
			toggleEN.addClass('rm-no-click');
			flagFR.addClass('rm-unselected-lang');
			toggleHighlight.css({
				//'width': toggleEN.outerWidth(),
				//'left': toggleEN.position().left
				'left': '50%'
			});
			flagEN.removeClass('rm-unselected-lang');
			break;
		case 'fr':
		default:
			toggleFR.addClass('rm-language-selection_active');
			toggleFR.addClass('rm-no-click');
			flagEN.addClass('rm-unselected-lang');
			toggleHighlight.css({
				//'width': toggleFR.outerWidth(),
				//'left': toggleFR.position().left
				'left': '0'
			});
			flagFR.removeClass('rm-unselected-lang');
	}	
}

/*FIN Toggle choix de langue*/

/*DEBUT Traductions*/

var translations  = {
	"nav": {
		"title": {
			"fr": "Portfolio",
			"en": "Portfolio"
		},
		"link" : {
			"message": {
				"fr": "Envoyer un message",
				"en": "Send a message"
			},
			"linkedin": {
				"fr": "LinkedIn",
				"en": "LinkedIn"
			},
			"resume": {
				"fr": "Télécharger CV",
				"en": "Download Resume"
			}
		},
		"floatingbtn" : {
			"message" : {
				"fr": "Envoyer un message",
				"en": "Send a message"
			},
		}
	},
	"intro": {
		"title": {
			"fr": "Intro",
			"en": "Intro"
		},
		"graduation": {
			"fr": "Etudiant en BTS SIO (Services Informatiques au Organisations)",
			"en": "Student in BTS SIO (IT Services for Organisations)"
		},
		"age": {
			"fr": "ans",
			"en": "years old"
		}
	},
	"formation": {
		"title": {
			"fr": "Formation",
			"en": "School training"
		},
		"graduation1": {
			"fr": "BAC Pro SN",
			"en": "BAC Pro SN"
		},
		"graduation2": {
			"fr": "BTS SIO (Services Informatiques au Organisations)",
			"en": "BTS SIO (IT Services for Organisations)"
		}
	},
	"skills": {
		"title": {
			"fr": "Compétences",
			"en": "Skills"
		},
		"softwaredev": {
			"fr": "Programmation",
			"en": "Programming"
		},
		"webdev": {
			"fr": "Développement Web",
			"en": "Web Development"
		},
		"data": {
			"fr": "Données",
			"en": "Data"
		},
		"system": {
			"fr": "Système",
			"en": "System"
		},
		"language": {
			"fr": "Langues",
			"en": "Languages"
		}
	},
	"quality": {
		"title": {
			"fr": "Qualité",
			"en": "Quality"
		},
		"01": {
			"fr": "Bon Relationnel",
			"en": "Good interpersonal skills"
		},
		"02": {
			"fr": "Rigoureux",
			"en": "Rigorous"
		},
		"03": {
			"fr": "Ponctuel",
			"en": "Punctual"
		},
		"04": {
			"fr": "Autonome",
			"en": "Autonomous"
		},
		"05": {
			"fr": "Esprit d'équipe",
			"en": "Team spirit"
		},
		"06": {
			"fr": "Motivé",
			"en": "Motive"
		},
		"07": {
			"fr": "Gestion du stress",
			"en": "Stress management"
		},
		"08": {
			"fr": "Respect des délais",
			"en": "Meeting deadlines"
		}
	},
	"hobbies": {
		"title": {
			"fr": "Loisirs",
			"en": "Hobbies"
		},
		"moto": {
			"fr": "Moto",
			"en": "Moto"
		},
		"hacking": {
			"fr": "hacking",
			"en": "hacking"
		}
	},
	"contact": {
		"header": {
			"title": {
				"fr": "Nouveau message",
				"en": "New message"
			},
			"messageto": {
				"fr": "À :",
				"en": "To:"
			}
		},
		"field": {
			"remark": {
				"fr": "NePasRemplir",
				"en": "DontFill"
			},
			"name": {
				"fr": "Nom",
				"en": "Name"
			},
			"email": {
				"fr": "Email",
				"en": "Email"
			},
			"subject": {
				"fr": "Sujet",
				"en": "Subject"
			},
			"message": {
				"fr": "Message",
				"en": "Message"
			}
		},
		"placeholder": {
			"name": {
				"fr": "Votre nom",
				"en": "Your name"
			},
			"email": {
				"fr": "Votre adresse email",
				"en": "Your email address"
			},
			"subject": {
				"fr": "Sujet de votre message",
				"en": "Subject of your message"
			},
			"message": {
				"fr": "Votre message",
				"en": "Your message"
			}
		},
		"link": {
			"send": {
				"fr": "Envoyer",
				"en": "Send"
			}
		}
	},
	"post": {
		"header": {
			"datenow": {
				"fr": "À l'instant",
				"en": "Just now"
			},
			"datesince": {
				"fr": "Depuis",
				"en": "Since"
			},
			"dateto": {
				"fr": "à",
				"en": "to"
			}
		},
		"month": {
			"jan": {
				"fr": "Janvier",
				"en": "January"
			},
			"feb": {
				"fr": "Février",
				"en": "February"
			},
			"mar": {
				"fr": "Mars",
				"en": "March"
			},
			"apr": {
				"fr": "Avril",
				"en": "April"
			},
			"may": {
				"fr": "Mai",
				"en": "May"
			},
			"jun": {
				"fr": "Juin",
				"en": "June"
			},
			"jul": {
				"fr": "Juillet",
				"en": "July"
			},
			"aug": {
				"fr": "Août",
				"en": "August"
			},
			"sep": {
				"fr": "Septembre",
				"en": "September"
			},
			"oct": {
				"fr": "Octobre",
				"en": "October"
			},
			"nov": {
				"fr": "Novembre",
				"en": "November"
			},
			"dec": {
				"fr": "Décembre",
				"en": "December"
			}
		},
		"link": {
			"message": {
				"fr": "Me contacter",
				"en": "Contact me"
			}
		},
		"diploma": {
			"graduation1": {
				"fr": "BAC Pro SN",
				"en": "BAC Pro SN"
			}
		},
		"welcome": {
			"welcome": {
				"fr": "Bonjour à toutes et à tous et bienvenue",
				"en": "Hello everyone and welcome"
			},
			"details": {
				"fr": "Je me nomme Jules VUILLAUME, j’ai 19 ans, titulaire d’un bac professionnel SN (Systèmes Numériques) obtenu avec mention Bien, et actuellement étudiant en 2ᵉ année de BTS SIO (Services Informatiques aux Organisations), option SLAM (Solutions Logicielles et Applications Métiers). J’ai aujourd’hui plusieurs objectifs : <br> - Trouver un stage du 12/01/2026 au 13/02/2026. <br> - Obtenir une alternance avec un rythme d’une semaine à l’école et deux semaines en entreprise. <br> - Financer mes études. <br> - Développer davantage mes compétences en cybersécurité.",
				"en": "My name is Jules VUILLAUME, I am 19 years old, and I hold a vocational diploma in Digital Systems (SN) with honors. I am currently in my second year of a BTS SIO (IT Services for Organizations), specializing in SLAM (Software Solutions and Business Applications). I currently have several goals: <br> - Find an internship from 01/12/2026 to 02/13/2026. <br> - Obtain a work-study position with a schedule of one week at school and two weeks in a company. <br> - Finance my studies. <br> - Further develop my cybersecurity skills."
			}
		},

		"professions":{
			"PICARD":{
				"fr": "Je suis employé en CDI chez Picard depuis le 25 janvier 2025, dans le cadre de mon job étudiant. Je suis polyvalent : je m’occupe de la caisse, du remplissage des bacs, de la préparation des commandes et de diverses autres tâches liées au bon fonctionnement du magasin. Ce poste m’a permis de développer mon sens du service client, ma réactivité ainsi que ma capacité à travailler en équipe.",
				"en": "I have been employed on a permanent contract at Picard since January 25, 2025, as part of my student job. I am versatile: I handle the cash register, restock the freezers, prepare orders, and perform various tasks to ensure the smooth operation of the store. This position has helped me develop strong customer service skills, responsiveness, and teamwork abilities."
			}
		},
		"stage": {
			"asti": {
				"fr": "Stage dans le domaine du MELEC (Métiers de l'Electricité et de ses Environnements Connectés). J'ai changer des battereie sur des borne qui servent a scanné les carte, et j'ai changer des écran qui affiche les train a venir",
				"en": "Internship in the field of MELEC (Electrical Engineering and Connected Environments). I've changed batteries on terminals that are used to scan cards, and I've changed screens that display upcoming trains."
			},
			"ovsg1": {
				"fr": "Réalisation de projet via exel ou JD Edwards",
				"en": "Project management via exel or JD Edwards"
			},
			"mtc": {
				"fr": "Réparation d'ordinateur portable fournie par la region Grand Est",
				"en": "Laptop repairs provided by the Grand Est region"
			},
			"sunnyshark1": {
				"fr": "Création de plusieur programme python pour déssiner des shema de piscines",
				"en": "Création de plusieur programme python pour déssiner des shema de piscines"
			},
			"sunnyshark2": {
				"fr": "Création d'un programme python pour faire une base de donné en csv, utilisation du logiciel PowerBI pour avoir une carte de toutes les piscines de France grâce à la base de donnée en CSV que mon programme python a créer. Utilisation du logiciel sketchup pour déssiner en 3D des piscine avec les plan que j'avais.",
				"en": "Creation of a python programme to create a csv database, using PowerBI software to obtain a map of all the swimming pools in France thanks to the CSV database that my python programme created. I used sketchup software to design swimming pools in 3D using the plans I had."
			},
			"ovsg2": {
				"fr": "Développé une aplication pour l'entreprise en C#, c'etait un travail d'équipe car j'ai travailler sur le projet avec un développeur de l'entreprise",
				"en": "Developed an application for the company in C#, it was a team effort as I worked on the project with a developer from the company."
			},
			"ovsg3": {
				"fr": "J’ai développé une extension Excel en C# permettant de se connecter à leur base de données. J’ai également travaillé sur JD Edwards en no-code afin de créer plus facilement de nouveaux clients pour l’entreprise.",
				"en": "I developed an Excel add-in in C# that connects to their database. I also worked with JD Edwards using no-code tools to streamline the creation of new clients for the company."
			}

		}
	},
	"tag": {
		
		"sn": {
			"fr": "Systèmes Numériques",
			"en": "Digital Systeme"
		},
		"sio":{
			"fr": "Services Informatiques au Organisations",
			"en": "IT Services for Organisations"
		},
		"gp": {
			"fr": "Moto GP",
			"en": "Moto GP"
		},
		"driving": {
			"fr": "Conduite sur circuit",
			"en": "Circuit driving"
		},
		"equipement": {
			"fr": "Equipement",
			"en": "Equipment"
		},
		"sport": {
			"fr": "Motos Sportives",
			"en": "Motos Sportives"
		},
		"tryhackme": {
			"fr": "TryHackMe",
			"en": "TryHackMe"
		},
		"rootme": {
			"fr": "Root-Me",
			"en": "Root-Me"
		},
		"teamwork": {
			"fr": "Travail en équipe",
			"en": "Team work"
		},
		"internship": {
			"fr": "Stage d'Études",
			"en": "Internship"
		},
		"professions": {
			"fr": "emploi",
			"en": "professions"
		},
		"french": {
			"fr": "Français",
			"en": "French"
		},
		"english": {
			"fr": "Anglais",
			"en": "English"
		}
	},
	"form": {
		"fielderror": {
			"text": {
				"fr": "Merci de compléter ce champs",
				"en": "Please fill out this field"
			},
			"email": {
				"fr": "Merci de renseigner une adresse email valide",
				"en": "Please fill out this field with a valid email address"
			}
		},
		"sendmsg": {
			"success": {
				"title": {
					"fr": "Merci !",
					"en": "Thank you!"
				},
				"message": {
					"fr": "Votre message a bien été envoyé.",
					"en": "Your message has been sent."
				}
			},
			"error": {
				"title": {
					"fr": "Une erreur est survenue",
					"en": "An error has occurred"
				},
				"message": {
					"fr": "Votre message n'a pas pu être envoyé.<br/>Merci de réessayer plus tard.",
					"en": "Your message could not be sent.<br/>Please try again later."
				}
			}
		}
	},
	"alert": {
		"screenreso": {
			"fr": "Résolution d'écran non supportée",
			"en": "Screen resolution not supported "
		}
	},
	"settings": {
		"darkmode": {
			"fr": "Mode sombre",
			"en": "Dark mode"
		},
		"lightmode": {
			"fr": "Mode clair",
			"en": "Light mode"
		}
	}
};

(function () {
	this.I18n = function (defaultLang) {
		var lang = defaultLang || 'en';
		this.language = lang;

		(function (i18n) {
			i18n.contents = translations;
			i18n.contents.prop = function (key) {
				var result = this;
				var keyArr = key.split('.');
				for (var index = 0; index < keyArr.length; index++) {
					var prop = keyArr[index];
					result = result[prop];
				}
				return result;
			};
			i18n.localize();
		})(this);
	};

	this.I18n.prototype.hasCachedContents = function () {
		return this.contents !== undefined;
	};

	this.I18n.prototype.lang = function (lang) {
		if (typeof lang === 'string') {
			this.language = lang;
		}
		this.localize();
		return this.language;
	};

	this.I18n.prototype.localize = function () {
		var contents = this.contents;
		if (!this.hasCachedContents()) {
			return;
		}
		var dfs = function (node, keys, results) {
			var isLeaf = function (node) {
				for (var prop in node) {
					if (node.hasOwnProperty(prop)) {
						if (typeof node[prop] === 'string') {
							return true;
						}
					}
				}
			}
			for (var prop in node) {
				if (node.hasOwnProperty(prop) && typeof node[prop] === 'object') {
					var myKey = keys.slice();
					myKey.push(prop);
					if (isLeaf(node[prop])) {
						results.push(myKey.reduce( function (previousValue, currentValue, currentIndex, array) {
							return previousValue + '.' + currentValue;
						}));
					} else {
						dfs(node[prop], myKey, results);
					}
				}
			}
			return results;
		};
		var keys = dfs(contents, [], []);
		for (var index = 0; index < keys.length; index++) {
			var key = keys[index];
			if (contents.prop(key).hasOwnProperty(this.language)) {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)[this.language]);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)[this.language]);
			} else {
				$('[data-i18n="'+key+'"]').html(contents.prop(key)['en']);
				$('[data-i18n-placeholder="'+key+'"]').attr('placeholder', contents.prop(key)['en']);
			}
		}
	};

}).apply(window);

/*FIN Traductions*/
