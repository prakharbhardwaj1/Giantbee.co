var isCaptchaVarifyed = false;
$(document).ready(function () {
	$('form').on('submit', function (e) {
		if (grecaptcha.getResponse() == "") {
			e.preventDefault();
			isCaptchaVarifyed = false;
			$('.message').text("Please verify captcha!").fadeIn(400).delay(3000).fadeOut(400);
		} else {
			isCaptchaVarifyed = true;
			return true;
		}
	});

	$("form[name='ContactUsForm']").validate({
		rules: {
			firstname: "required",
			lastname: "required",
			email: "required",
			subject: "required",
			message: "required"
		},
		messages: {
			firstname: "Please enter your First Name",
			lastname: "Please enter your Last Name",
			email: "Please enter a valid Email id",
			subject: "Please enter your Subject",
			message: "Please enter your Message",
		},
		submitHandler: function (form) {
			submitContactUsDetails();
		}
	});
});

function submitContactUsDetails() {
    $('.message').text("Thank You! For contacting us.").fadeIn(400).delay(3000).fadeOut(400);
    setTimeout(function () {
        $("#contact-button").click()
    }, 1000);
	var IsSubmit = false;
	if (IsSubmit == false && isCaptchaVarifyed) {
		IsSubmit = true;
		var data = {
			firstname: $("[name='firstname']").val(),
			lastname: $("[name='lastname']").val(),
			email: $("[name='email']").val(),
			subject: $("[name='subject']").val(),
			message: $("[name='message']").val(),
		};
		
		var saveData = $.ajax({
			type: 'POST',
			url: "https://api.promptsoftech.com/contactus/SubmitContactUs",
			data: data,
			dataType: "json",
			success: function (resultData) {
				if (resultData.Status) {
					ContactUsForm.reset();
					history.pushState(null, null, window.location.href.split('?')[0]);					
				}
				else {
				}

				IsSubmit = false;
							
			}
		});
		saveData.error(function (er) {
			alert("Something went wrong");
		});
	}
}
