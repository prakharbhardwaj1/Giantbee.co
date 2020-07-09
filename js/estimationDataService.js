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


    $.validator.addMethod("phoneNumber", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 && phone_number.match(/^([0-9]+)/);
    }, "Please specify a valid phone number");

    $("form[name='EstimationForm']").validate({

        rules: {
            firstname: "required",
            lastname: "required",
            jobTitle: "required",
            email: "required",
            mobileNo: {
                required: true,
                phoneNumber: true
            },
            companyName: "required",
            aboutProject: "required"
        },
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            jobTitle: "Please enter your Topic",
            email: "Please enter a valid Email id",
            mobileNo: "Please enter your valid Mobile No",
            companyName: "Please enter your Comapny Name",
            aboutProject: "Please enter Brief about Project"
        },
        submitHandler: function (form) {
            submitEstimationDetails();
        }
    });
});

function submitEstimationDetails() {

    var IsSubmit = false;
    if (IsSubmit == false && isCaptchaVarifyed) {
        IsSubmit = true;

        var jobTitle = '';
        if ($("[name='jobTitle']").val() != '')
            jobTitle = $("[name='jobTitle'] option:selected")[0].text;

        var data = {
            firstName: $("[name='firstName']").val(),
            lastName: $("[name='lastName']").val(),
            jobTitle: jobTitle,
            email: $("[name='email']").val(),
            mobileNo: $("[name='mobileNo']").val(),
            companyName: $("[name='companyName']").val(),
            aboutProject: $("[name='aboutProject']").val(),
        };

       

        var saveData = $.ajax({
            type: 'POST',
            url: "https://api.promptsoftech.com/ContactUs/SubmitEstimation",
            data: data,
            dataType: "json",
            success: function (resultData) {
                console.log(resultData);
                if (resultData.Status) {
                    EstimationForm.reset();
                    
                    $('.message').text(resultData.Message).fadeIn(400).delay(1000).fadeOut(400);
                    history.pushState(null, null, window.location.href.split('?')[0]);
                }
                else {
                   
                    $('.message').text(resultData.Message).fadeIn(400).delay(1000).fadeOut(400);
                }

                IsSubmit = false;
                
				setTimeout(function(){
					location.reload();						
				},1000);	
            }
        });
        saveData.error(function (e) {
           alert("Something went wrong");
        });
    }
}