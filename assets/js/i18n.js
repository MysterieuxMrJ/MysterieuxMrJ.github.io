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
		},
		"trading":{
			"fr": "trading",
			"en": "trading"
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
        		"fr": "Bonjour à toutes et à tous et bienvenue sur mon portfolio",
        		"en": "Hello everyone and welcome to my portfolio"
   			},
    		"details": {
        		"fr": "Je me nomme Jules VUILLAUME, j’ai 19 ans, et je suis titulaire d’un baccalauréat professionnel Systèmes Numériques (SN) obtenu avec mention Bien. Actuellement, je poursuis ma deuxième année de BTS SIO (Services Informatiques aux Organisations), option SLAM (Solutions Logicielles et Applications Métiers), où je développe mes compétences en programmation, développement web et conception d’applications métiers.<br><br>Mon parcours se caractérise par une forte curiosité pour les nouvelles technologies et un intérêt particulier pour la finance et le trading. Depuis plusieurs mois, je me consacre activement au trading, en utilisant notamment des stratégies basées sur le Smart Money Concept (SMC), l’analyse des Order Blocks (OB) et des Fair Value Gaps (FVG). Mon objectif est de construire une approche disciplinée et méthodique, capable de générer des résultats cohérents et durables sur les marchés financiers.<br><br>Je me fixe plusieurs objectifs ambitieux pour les prochaines années : <br> - Intégrer une école spécialisée en trading pour approfondir mes connaissances et perfectionner mes stratégies sur les marchés financiers.<br> - Ouvrir ma propre entreprise, combinant mes compétences en informatique, en cybersécurité et en trading, afin de proposer des solutions innovantes et adaptées aux besoins du marché.<br> - Devenir financièrement indépendant grâce à une gestion rigoureuse des investissements et à la création de sources de revenus diversifiées.<br> - Continuer à développer mes compétences en cybersécurité, en automatisation et en analyse de données pour renforcer mon expertise technique et être capable de concevoir des projets à la fois sécurisés et performants.<br><br>Au-delà de mes objectifs académiques et professionnels, je m’efforce de transformer mes projets en expériences concrètes. Chaque apprentissage, chaque projet ou stage est une opportunité pour progresser, tester mes idées et construire un profil polyvalent et autonome. Mon ambition est de combiner mes passions pour la technologie et la finance afin de créer un impact durable et de devenir un professionnel capable d’innover dans des environnements complexes et compétitifs.",
        		"en": "My name is Jules VUILLAUME, I am 19 years old, and I hold a vocational diploma in Digital Systems (SN) with honors. I am currently in my second year of BTS SIO (IT Services for Organizations), specializing in SLAM (Software Solutions and Business Applications), where I focus on programming, web development, and business application design.<br><br>My journey is characterized by a strong curiosity for new technologies and a particular interest in finance and trading. For several months, I have been actively dedicated to trading, using strategies based on the Smart Money Concept (SMC), Order Blocks (OB), and Fair Value Gaps (FVG). My goal is to build a disciplined and methodical approach capable of generating consistent and sustainable results in the financial markets.<br><br>I have set ambitious goals for the coming years: <br> - Enroll in a specialized trading school to deepen my knowledge and refine my market strategies.<br> - Launch my own business, combining my skills in IT, cybersecurity, and trading, to offer innovative solutions tailored to market needs.<br> - Achieve financial independence through disciplined investment management and the creation of diversified income streams.<br> - Continue developing my skills in cybersecurity, automation, and data analysis to strengthen my technical expertise and design projects that are both secure and high-performing.<br><br>Beyond my academic and professional goals, I strive to turn projects into tangible experiences. Every learning opportunity, project, or internship is a chance to advance, test ideas, and build a versatile and autonomous profile. My ambition is to combine my passions for technology and finance to create a lasting impact and become a professional capable of innovating in complex and competitive environments."
    		}
		},

		"professions": {
    		"PICARD": {
       			"fr": "Je travaille en CDI chez Picard depuis le 25 janvier 2025 dans le cadre de mon emploi étudiant. Mon rôle est polyvalent et comprend la gestion de la caisse, le réapprovisionnement des bacs, la préparation des commandes, la mise en place des promotions et diverses tâches nécessaires au bon fonctionnement du magasin.<br><br>Cette expérience m’a permis de développer un sens aigu du service client, en apprenant à répondre rapidement et efficacement aux besoins des clients et à résoudre les problèmes avec professionnalisme. J’ai également renforcé ma capacité à travailler en équipe, à communiquer clairement avec mes collègues et à m’adapter à un environnement dynamique où les priorités peuvent changer rapidement.<br><br>Au fil du temps, j’ai amélioré mon organisation personnelle et ma gestion du temps, en apprenant à planifier mes tâches pour garantir que toutes les opérations du magasin soient réalisées de manière efficace. Ce poste m’a également permis de comprendre l’importance de la rigueur, de la précision et de la responsabilité dans un environnement professionnel. Ces compétences transversales sont des atouts précieux que j’applique désormais dans mes projets académiques et personnels.",
        		"en": "I have been employed on a permanent contract at Picard since January 25, 2025, as part of my student job. My role is versatile, including handling the cash register, restocking freezers, preparing orders, setting up promotions, and various tasks necessary for the smooth operation of the store.<br><br>This experience allowed me to develop strong customer service skills, learning to respond quickly and efficiently to client needs and resolve problems professionally. I also strengthened my ability to work in a team, communicate clearly with colleagues, and adapt to a dynamic environment where priorities can change rapidly.<br><br>Over time, I improved my personal organization and time management, learning to plan my tasks to ensure all store operations are completed efficiently. This role also taught me the importance of rigor, precision, and responsibility in a professional setting. These transferable skills are now valuable assets that I apply to my academic and personal projects."
    		},
    		"AXI": {
        		"fr": "En tant que partenaire d’AXI, je trade sur mon compte personnel et dispose également d’un compte financé appelé \"AXI Select\". Depuis octobre, je me consacre sérieusement au trading, avec l’objectif de développer une approche disciplinée et durable des marchés financiers. Mon activité se concentre principalement sur la paire XAUUSD (or), que j’apprécie pour sa volatilité et les nombreuses opportunités techniques qu’elle offre.<br><br>Dans mon analyse des marchés, j’utilise les concepts du Smart Money Concept (SMC), en intégrant l’analyse des structures de marché, les Order Blocks (OB) et les Fair Value Gaps (FVG). Ces outils me permettent de repérer les zones de liquidité et de prévoir les mouvements des institutions pour optimiser mes entrées et sorties de position.<br><br>Au fil du temps, j’ai développé des compétences solides en analyse technique, gestion du risque et psychologie du trading. Je pratique également l’analyse statistique et la planification stratégique pour évaluer la performance de mes positions et améliorer mes stratégies.<br><br>En parallèle, je m’intéresse aux technologies appliquées au trading, telles que l’automatisation, le traitement de données et l’intelligence artificielle. J’explore des méthodes pour intégrer ces technologies dans mes analyses afin de rendre mes décisions plus précises et rapides. Mon objectif est de construire des stratégies reproductibles et fiables tout en continuant à apprendre et à m’adapter à l’évolution constante des marchés.<br><br>Cette expérience m’a appris la discipline, la patience et la résilience, des qualités essentielles non seulement dans le trading mais également dans la gestion de projets professionnels et la création future de mon entreprise.",
        		"en": "As an AXI partner, I trade on my personal account and also have a funded account called \"AXI Select\". Since October, I have been seriously dedicated to trading, aiming to develop a disciplined and sustainable approach to the financial markets. My activity primarily focuses on the XAUUSD (gold) pair, which I appreciate for its volatility and the numerous technical opportunities it offers.<br><br>In my market analysis, I apply the Smart Money Concept (SMC), incorporating market structure analysis, Order Blocks (OB), and Fair Value Gaps (FVG). These tools allow me to identify liquidity zones and anticipate institutional movements to optimize my trade entries and exits.<br><br>Over time, I have developed solid skills in technical analysis, risk management, and trading psychology. I also practice statistical analysis and strategic planning to evaluate trade performance and improve my strategies.<br><br>Additionally, I am interested in technologies applied to trading, such as automation, data processing, and artificial intelligence. I explore methods to integrate these technologies into my analyses to make decisions more accurate and faster. My goal is to build reproducible and reliable strategies while continuously learning and adapting to the constantly evolving markets.<br><br>This experience has taught me discipline, patience, and resilience—qualities essential not only in trading but also in project management and the future creation of my own business."
    		}
		},
		"stage": {
    		"asti": {
        		"fr": "Stage dans le domaine du MELEC (Métiers de l'Électricité et de ses Environnements Connectés). Durant ce stage, j’ai participé à la maintenance et à l’entretien de bornes électroniques utilisées pour scanner des cartes dans le cadre du transport ferroviaire. Mes missions incluaient le remplacement de batteries et de composants, ainsi que le changement des écrans affichant les trains à venir. Cette expérience m’a permis de comprendre le fonctionnement des systèmes électroniques connectés et des interfaces utilisateur dans un environnement professionnel.<br><br>J’ai appris à diagnostiquer rapidement les problèmes techniques, à suivre des procédures de sécurité strictes et à documenter mes interventions de manière rigoureuse. Ce stage m’a également sensibilisé à l’importance de la maintenance préventive et de la gestion efficace du matériel dans des systèmes critiques pour les utilisateurs finaux.",
        		"en": "Internship in the field of MELEC (Electrical Engineering and Connected Environments). During this internship, I participated in the maintenance and servicing of electronic terminals used for card scanning in railway transport. My tasks included replacing batteries and components, as well as changing screens displaying upcoming trains. This experience allowed me to understand the operation of connected electronic systems and user interfaces in a professional setting.<br><br>I learned to quickly diagnose technical issues, follow strict safety procedures, and document my interventions rigorously. This internship also highlighted the importance of preventive maintenance and effective hardware management in systems critical to end users."
    		},
    		"ovsg1": {
        		"fr": "Réalisation de projets et gestion de données via Excel et JD Edwards. J’ai travaillé sur l’organisation et l’analyse de données commerciales et opérationnelles, la création de rapports automatisés et l’optimisation de processus internes. Grâce à ce projet, j’ai développé ma capacité à structurer des informations complexes, à produire des résultats précis et à communiquer efficacement mes analyses aux équipes concernées.<br><br>J’ai également appris à manipuler des bases de données professionnelles, à concevoir des tableaux de bord interactifs et à automatiser des tâches répétitives pour améliorer l’efficacité. Cette expérience m’a donné une vision concrète de l’importance des outils informatiques dans la prise de décision en entreprise et de l’impact direct de l’analyse de données sur les opérations quotidiennes.",
        		"en": "Project management and data handling using Excel and JD Edwards. I worked on organizing and analyzing commercial and operational data, creating automated reports, and optimizing internal processes. Through this project, I developed the ability to structure complex information, produce accurate results, and effectively communicate my analyses to the relevant teams.<br><br>I also learned to handle professional databases, design interactive dashboards, and automate repetitive tasks to improve efficiency. This experience provided me with a concrete understanding of the importance of IT tools in decision-making and the direct impact of data analysis on daily operations."
    		},
    		"mtc": {
        		"fr": "Stage de réparation et maintenance d’ordinateurs portables fournis par la région Grand Est. J’ai réalisé des diagnostics complets, remplacé des composants défectueux et réinstallé des systèmes d’exploitation pour assurer le bon fonctionnement des appareils. Ce stage m’a permis de développer des compétences techniques avancées en matériel informatique et en dépannage logiciel, ainsi que de comprendre les enjeux liés à la maintenance des équipements dans un cadre professionnel.<br><br>J’ai appris à travailler méthodiquement, à respecter les protocoles de sécurité et à documenter chaque intervention pour garantir un suivi précis. Cette expérience m’a également sensibilisé à l’importance de l’efficacité et de la fiabilité dans le service technique.",
        		"en": "Internship focused on laptop repair and maintenance provided by the Grand Est region. I performed comprehensive diagnostics, replaced faulty components, and reinstalled operating systems to ensure proper device functionality. This internship allowed me to develop advanced technical skills in hardware and software troubleshooting, as well as understand the challenges of maintaining equipment in a professional setting.<br><br>I learned to work methodically, follow safety protocols, and document each intervention to ensure accurate tracking. This experience also made me aware of the importance of efficiency and reliability in technical services."
    		},
    		"sunnyshark1": {
        		"fr": "Création de plusieurs programmes Python pour dessiner des schémas de piscines à partir de plans techniques. Chaque programme a été conçu pour automatiser le processus de visualisation, en transformant des données complexes en représentations claires et précises. Cette activité m’a permis de pratiquer la programmation orientée objet, la manipulation de bibliothèques graphiques et le traitement de données structurées.<br><br>J’ai développé une approche méthodique pour résoudre les problèmes, optimiser le code et rendre les programmes modulaires et réutilisables. Cette expérience a renforcé ma capacité à concevoir des outils logiciels fonctionnels et à comprendre l’importance de l’interface entre données et visualisation graphique.",
        		"en": "Creation of several Python programs to draw swimming pool schematics from technical plans. Each program was designed to automate the visualization process by transforming complex data into clear and precise representations. This work allowed me to practice object-oriented programming, manipulate graphical libraries, and handle structured data.<br><br>I developed a methodical approach to problem-solving, code optimization, and making programs modular and reusable. This experience strengthened my ability to design functional software tools and understand the importance of the interface between data and graphical visualization."
    		},
    		"sunnyshark2": {
        		"fr": "Développement d’un programme Python pour créer une base de données CSV regroupant toutes les piscines de France. Grâce à ce programme, j’ai pu utiliser PowerBI pour générer une carte interactive des piscines, facilitant ainsi l’analyse et la visualisation des données. Parallèlement, j’ai utilisé SketchUp pour modéliser en 3D les piscines à partir des plans disponibles, combinant programmation, visualisation et design 3D.<br><br>Ce projet m’a permis d’intégrer différentes compétences : programmation, analyse de données, visualisation et modélisation 3D. J’ai appris à concevoir un workflow complet, de la collecte des données à la création d’outils interactifs, et à gérer un projet de bout en bout en alliant rigueur technique et créativité.",
        		"en": "Development of a Python program to create a CSV database compiling all swimming pools in France. Using this program, I utilized PowerBI to generate an interactive map of the pools, facilitating data analysis and visualization. Simultaneously, I used SketchUp to model the pools in 3D based on available plans, combining programming, visualization, and 3D design.<br><br>This project allowed me to integrate multiple skills: programming, data analysis, visualization, and 3D modeling. I learned to design a complete workflow from data collection to creating interactive tools, managing a project end-to-end while combining technical rigor and creativity."
    		},
    		"ovsg2": {
        		"fr": "Développement d’une application pour l’entreprise en C# en collaboration avec un développeur interne. Ce projet m’a permis de participer activement à un travail d’équipe, de comprendre le cycle de développement complet et d’implémenter des fonctionnalités selon les besoins spécifiques de l’entreprise. J’ai travaillé sur la structuration du code, la gestion des erreurs et la communication avec la base de données.<br><br>Cette expérience m’a appris à gérer un projet collaboratif, à suivre les bonnes pratiques de développement et à documenter efficacement mon travail pour faciliter la maintenance future. J’ai également renforcé mes compétences en programmation orientée objet et en conception d’applications métier.",
        		"en": "Development of an application for the company in C# in collaboration with an internal developer. This project allowed me to actively participate in teamwork, understand the complete development lifecycle, and implement features according to the company's specific needs. I worked on code structuring, error handling, and database communication.<br><br>This experience taught me how to manage a collaborative project, follow development best practices, and document my work effectively to facilitate future maintenance. I also enhanced my skills in object-oriented programming and business application design."
    		},
    		"ovsg3": {
        		"fr": "Création d’une extension Excel en C# permettant de se connecter directement à la base de données de l’entreprise, afin d’automatiser la récupération et le traitement de données. J’ai également utilisé JD Edwards en mode no-code pour simplifier la création de nouveaux clients. Ces projets m’ont permis d’allier programmation, automatisation et optimisation des processus métiers.<br><br>J’ai appris à analyser les besoins des utilisateurs, à développer des outils pratiques et à tester leur fiabilité. Cette expérience m’a donné une vision complète de l’intégration de solutions logicielles dans un environnement professionnel, de l’efficacité des outils informatiques et de la valeur ajoutée qu’ils apportent à l’entreprise.",
        		"en": "Creation of an Excel add-in in C# that connects directly to the company's database to automate data retrieval and processing. I also used JD Edwards in no-code mode to simplify the creation of new clients. These projects allowed me to combine programming, automation, and business process optimization.<br><br>I learned to analyze user needs, develop practical tools, and test their reliability. This experience gave me a comprehensive view of integrating software solutions in a professional environment, the efficiency of IT tools, and the added value they bring to a company."
    		},
    		"ovsg4": {
        		"fr": "Durant ce stage, j’ai participé à plusieurs projets variés et complexes pour l’entreprise. J’ai développé un site internet pour un client afin de renforcer sa visibilité en ligne et répondre à ses besoins spécifiques. J’ai également conçu un programme permettant de convertir des fichiers Excel en JSON, facilitant l’intégration et l’exploitation des données dans différents systèmes informatiques. Enfin, j’ai contribué à la création d’un coffre-fort numérique pour centraliser et sécuriser les informations sensibles de l’entreprise.<br><br>Ces projets m’ont permis de renforcer mes compétences en développement web, en programmation, en gestion de données et en sécurité informatique. J’ai appris à gérer un projet de bout en bout, à collaborer avec différents interlocuteurs et à livrer des solutions robustes et professionnelles, tout en respectant les contraintes techniques et les délais imposés.",
        		"en": "During this internship, I participated in several diverse and complex projects for the company. I developed a website for a client to enhance their online visibility and meet specific needs. I also designed a program to convert Excel files into JSON, facilitating data integration and processing across different information systems. Finally, I contributed to creating a digital vault to centralize and secure the company's sensitive information.<br><br>These projects allowed me to strengthen my skills in web development, programming, data management, and IT security. I learned to manage projects end-to-end, collaborate with different stakeholders, and deliver robust and professional solutions while respecting technical constraints and deadlines."
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
		"gold": {
			"fr": "GOLD (XAUUSD)",
			"en": "GOLD (XAUUSD)"
		},
		"silver": {
			"fr": "Silver (XAGUSD)",
			"en": "Silver (XAGUSD)"
		},
		"btc": {
			"fr": "bitcoin (BTC)",
			"en": "bitcoin (BTC)"
		},
		"eurusd": {
			"fr": "eurusd",
			"en": "eurusd"
		},
		"nasdaq": {
			"fr": "nasdaq (NDX)",
			"en": "nasdaq (NDX)"
		},
		"dax": {
			"fr": "DAX",
			"en": "DAX"
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
