// Registration validation script
function runFormValidation() {
	

	var $checkoutForm = $('#add-region-form').validate({
	// Rules for form validation
		rules : {
			name : {
				required : true
			},
			ssid : {
				required : true
			},
			security : {
				required : true
			},
			captivePortal : {
				required : true
			}		
		},

		// Messages for form validation
		messages : {

			name : {
				required : 'O nome da região é necessário'
			},
			ssid : {
				required : 'O SSID é necessário'
			},	
			security : {
				required : 'A segurança é necessário'
			},
			captivePortal : {
				required : 'O captive portal é necessário'
			}
			
		},

		// Do not change code below
		errorPlacement : function(error, element) {
			error.insertAfter(element.parent());
		}
	});
			
	var $registerForm = $("#smart-form-register").validate({

		// Rules for form validation
		rules : {
			username : {
				required : true
			},
			email : {
				required : true,
				email : true
			},
			password : {
				required : true,
				minlength : 3,
				maxlength : 20
			},
			passwordConfirm : {
				required : true,
				minlength : 3,
				maxlength : 20,
				equalTo : '#password'
			},
		},

		// Messages for form validation
		messages : {
			login : {
				required : 'Please enter your login'
			},
			email : {
				required : 'Please enter your email address',
				email : 'Please enter a VALID email address'
			},
			password : {
				required : 'Please enter your password'
			},
			passwordConfirm : {
				required : 'Please enter your password one more time',
				equalTo : 'Please enter the same password as above'
			},
			firstname : {
				required : 'Please select your first name'
			},
			lastname : {
				required : 'Please select your last name'
			},
			gender : {
				required : 'Please select your gender'
			},
			terms : {
				required : 'You must agree with Terms and Conditions'
			}
		},

		// Do not change code below
		errorPlacement : function(error, element) {
			error.insertAfter(element.parent());
		}
	});

	var $reviewForm = $("#review-form").validate({
		// Rules for form validation
		rules : {
			name : {
				required : true
			},
			email : {
				required : true,
				email : true
			},
			review : {
				required : true,
				minlength : 20
			},
			quality : {
				required : true
			},
			reliability : {
				required : true
			},
			overall : {
				required : true
			}
		},

		// Messages for form validation
		messages : {
			name : {
				required : 'Please enter your name'
			},
			email : {
				required : 'Please enter your email address',
				email : '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
			},
			review : {
				required : 'Please enter your review'
			},
			quality : {
				required : 'Please rate quality of the product'
			},
			reliability : {
				required : 'Please rate reliability of the product'
			},
			overall : {
				required : 'Please rate the product'
			}
		},

		// Do not change code below
		errorPlacement : function(error, element) {
			error.insertAfter(element.parent());
		}
	});
	
	var $commentForm = $("#comment-form").validate({
		// Rules for form validation
		rules : {
			name : {
				required : true
			},
			email : {
				required : true,
				email : true
			},
			url : {
				url : true
			},
			comment : {
				required : true
			}
		},

		// Messages for form validation
		messages : {
			name : {
				required : 'Enter your name',
			},
			email : {
				required : 'Enter your email address',
				email : 'Enter a VALID email'
			},
			url : {
				email : 'Enter a VALID url'
			},
			comment : {
				required : 'Please enter your comment'
			}
		},

		// Ajax form submition
		submitHandler : function(form) {
			$(form).ajaxSubmit({
				success : function() {
					$("#comment-form").addClass('submited');
				}
			});
		},

		// Do not change code below
		errorPlacement : function(error, element) {
			error.insertAfter(element.parent());
		}
	});

	var $contactForm = $("#contact-form").validate({
		// Rules for form validation
		rules : {
			name : {
				required : true
			},
			email : {
				required : true,
				email : true
			},
			message : {
				required : true,
				minlength : 10
			}
		},

		// Messages for form validation
		messages : {
			name : {
				required : 'Please enter your name',
			},
			email : {
				required : 'Please enter your email address',
				email : 'Please enter a VALID email address'
			},
			message : {
				required : 'Please enter your message'
			}
		},

		// Ajax form submition
		submitHandler : function(form) {
			$(form).ajaxSubmit({
				success : function() {
					$("#contact-form").addClass('submited');
				}
			});
		},

		// Do not change code below
		errorPlacement : function(error, element) {
			error.insertAfter(element.parent());
		}
	});

	var $loginForm = $("#login-form").validate({
		// Rules for form validation
		rules : {
			email : {
				required : true,
				email : true
			},
			password : {
				required : true,
				minlength : 3,
				maxlength : 20
			}
		},

		// Messages for form validation
		messages : {
			email : {
				required : 'Please enter your email address',
				email : 'Please enter a VALID email address'
			},
			password : {
				required : 'Please enter your password'
			}
		},

		// Do not change code below
		errorPlacement : function(error, element) {
			error.insertAfter(element.parent());
		}
	});

	var $orderForm = $("#order-form").validate({
		// Rules for form validation
		rules : {
			name : {
				required : true
			},
			email : {
				required : true,
				email : true
			},
			phone : {
				required : true
			},
			interested : {
				required : true
			},
			budget : {
				required : true
			}
		},

		// Messages for form validation
		messages : {
			name : {
				required : 'Please enter your name'
			},
			email : {
				required : 'Please enter your email address',
				email : 'Please enter a VALID email address'
			},
			phone : {
				required : 'Please enter your phone number'
			},
			interested : {
				required : 'Please select interested service'
			},
			budget : {
				required : 'Please select your budget'
			}
		},

		// Do not change code below
		errorPlacement : function(error, element) {
			error.insertAfter(element.parent());
		}
	});

	// START AND FINISH DATE
	$('#startdate').datepicker({
		dateFormat : 'dd.mm.yy',
		prevText : '<i class="fa fa-chevron-left"></i>',
		nextText : '<i class="fa fa-chevron-right"></i>',
		onSelect : function(selectedDate) {
			$('#finishdate').datepicker('option', 'minDate', selectedDate);
		}
	});
	
	$('#finishdate').datepicker({
		dateFormat : 'dd.mm.yy',
		prevText : '<i class="fa fa-chevron-left"></i>',
		nextText : '<i class="fa fa-chevron-right"></i>',
		onSelect : function(selectedDate) {
			$('#startdate').datepicker('option', 'maxDate', selectedDate);
		}
	});


}; 