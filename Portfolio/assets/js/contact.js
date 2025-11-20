//Contact modal
var contactModal = document.getElementById("contact-modal");
var btnOpenContactModal = document.getElementById("contact-floating-btn");
var btnCloseContactModal = document.getElementById("contact-modal-close");
//Ouverture 
function openContactModal() {
	contactModal.style.display = "block";
	document.getElementsByTagName('html')[0].style = "overflow-y:hidden; position: relative;";
	btnOpenContactModal.classList.add("rm-hide");
}
//Fermeture
function closeContactModal() {
	contactModal.style.display = "none";
	document.getElementsByTagName('html')[0].style = "overflow-y:visible; position: static;";
	btnOpenContactModal.classList.remove("rm-hide");
}
btnCloseContactModal.onclick = function() {
	closeContactModal();
}
window.onclick = function(event) {
	if (event.target == contactModal) {
		closeContactModal();
	}
}


//Contrôle de saisie
function controlField(field, type)
{
	switch (type) {
		case 'email':
			controlEmail(field);
			break;
		case 'text':
		default:
			controlText(field);
	}
}
//Gestion erreur de saisie
function setFieldError(field, error) {
	var fieldIcon = document.getElementById(field.id+'-icon')
	if(error) {
		fieldIcon.classList.remove("input-none");
		fieldIcon.classList.remove("input-valid");
		fieldIcon.classList.add("input-error");
	} else {
		fieldIcon.classList.remove("input-none");
		fieldIcon.classList.remove("input-error");
		fieldIcon.classList.add("input-valid");
	}
}
//Contrôle d'un champ texte
function controlText(field)
{
	if(field.value.trim().length < 1) {
		setFieldError(field, true);
		field.setCustomValidity(translations.form.fielderror.text[currentLang]);
		return false;
	} else {
		setFieldError(field, false);
		field.setCustomValidity("");
		return true;
	}
}
//Contrôle d'un champ email
function controlEmail(field)
{
	var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(!regex.test(field.value.trim())) {
		setFieldError(field, true);
		field.setCustomValidity(translations.form.fielderror.email[currentLang]);
		return false;
	} else {
		setFieldError(field, false);
		field.setCustomValidity("");
		return true;
	}
}
//Contrôle du formulaire de contact avant tentative d'envoi
function controlForm()
{
	var Ok = true;
	
	var nameField = document.forms["contact"]["name"];
    if (nameField.value.trim().length < 1) {
        setFieldError(nameField, true);
		nameField.setCustomValidity("blablabla");
		nameField.setCustomValidity(translations.form.fielderror.text[currentLang]);
		Ok = false;
    }
	
	var emailField = document.forms["contact"]["email"];
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(!regex.test(emailField.value.trim())) {
		setFieldError(emailField, true);
		emailField.setCustomValidity(translations.form.fielderror.email[currentLang]);
		Ok = false;
	}
	
	var subjectField = document.forms["contact"]["subject"];
    if (subjectField.value.trim().length < 1) {
        setFieldError(subjectField, true);
		subjectField.setCustomValidity("blablabla");
		subjectField.setCustomValidity(translations.form.fielderror.text[currentLang]);
		Ok = false;
    }
	
	var messageField = document.forms["contact"]["message"];
    if (messageField.value.trim().length < 1) {
        setFieldError(messageField, true);
		messageField.setCustomValidity("blablabla");
		messageField.setCustomValidity(translations.form.fielderror.text[currentLang]);
		Ok = false;
    }
	
	return Ok;
}
//Réinitialisation du formulaire de contact
function resetForm()
{
	//Champs à réinitialiser
	var nameField = document.forms["contact"]["name"];
	var emailField = document.forms["contact"]["email"];
	var subjectField = document.forms["contact"]["subject"];
	var messageField = document.forms["contact"]["message"];
	var remarkField = document.forms["contact"]["remark"];
	
	//Réinitialisation Texte
	nameField.value = '';
	emailField.value = '';
	subjectField.value = '';
	messageField.value = '';
	remarkField.value = '';
	
	//Réinitialisation Statut Erreur
	resetFieldStatus(nameField);
	resetFieldStatus(emailField);
	resetFieldStatus(subjectField);
	resetFieldStatus(messageField);
	resetFieldStatus(remarkField);
}
//Réinitialisation icône erreur saisie
function resetFieldStatus(field) {
	var fieldIcon = document.getElementById(field.id+'-icon')
	fieldIcon.classList.remove("input-valid");
	fieldIcon.classList.remove("input-error");
	fieldIcon.classList.remove("input-none");
	fieldIcon.classList.add("input-none");
}

//Tentative d'envoi email
$(function(){
	$("#form_contact").submit(function(event){
		var form_name = $("#name").val();
		var form_email = $("#email").val();
		var form_subject = $("#subject").val();
		var form_message = $("#message").val();
		var form_data;
		$.ajax({
			type: "POST",
			url: "assets/php/contact.php",
			data: $(this).serialize(),
			success: function(result){
				if (result == "true") {
					showAlert(translations.form.sendmsg.success.title[currentLang], translations.form.sendmsg.success.message[currentLang], "success");
					resetForm();
				}
				else if (result == "robot") {
					//On ne fait rien
					resetForm();
				}
				else {
					showAlert(translations.form.sendmsg.error.title[currentLang], translations.form.sendmsg.error.message[currentLang], "error");
				}
            },
            error: function() {
				alert("Technical error")
            }
		});
		closeContactModal();
        return false;
    });
});