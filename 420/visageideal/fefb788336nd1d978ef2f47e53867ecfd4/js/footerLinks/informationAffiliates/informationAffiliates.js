$(document).ready(function() {
	if ($('form').hasClass('start_valid')) {
		$(".row_box>input, .row_box>textarea").each(function() {
			isEmpty(this)
			isNumberValid(this)
			isEmailValid(this)
		})
		unlockSubmit()
	}

	$("input, textarea").blur(function() {
		isEmpty(this)
		unlockSubmit()
	}).keyup(function() {
		isEmpty(this)
		unlockSubmit()
		captcha(this)
		isNumberValid(this)
		isEmailValid(this)
	})
})

function isEmpty(el) {
	var parent = $(`.row_${$(el).attr('id')}`);
	if ($(el).val() != '') {
		if ($(el).attr('id') === 'captcha') {
			if (parent.hasClass('empty')) {
				parent.removeClass('empty')
				if ($(`.error_${$(el).attr('id')}.empty`).hasClass('active')) {
					$(`.error_${$(el).attr('id')}.empty`).removeClass('active')
				}
			}

			if (parent.hasClass('invalid')) {
				if ($(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
					$(`.error_${$(el).attr('id')}.valid`).removeClass('active')
				}
				if (!$(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
					$(`.error_${$(el).attr('id')}.invalid`).addClass('active')
				}
			}

			if (parent.hasClass('valid')) {
				if (!$(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
					$(`.error_${$(el).attr('id')}.valid`).addClass('active')
				}
				if ($(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
					$(`.error_${$(el).attr('id')}.invalid`).removeClass('active')
				}
			}

		} else {
			if ($(el).attr('id') === 'mail') {
				if (!parent.hasClass('invalid')) {
					if (!parent.hasClass('valid')) {
						parent.addClass('valid')
					}
					if (!$(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
						$(`.error_${$(el).attr('id')}.valid`).addClass('active')
					}
				}
			} else if ($(el).attr('id') === 'phone') {
				if (!parent.hasClass('invalid')) {
					if (!parent.hasClass('valid')) {
						parent.addClass('valid')
					}
					if (!$(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
						$(`.error_${$(el).attr('id')}.valid`).addClass('active')
					}
				}
			} else {
				if (!parent.hasClass('valid')) {
					parent.addClass('valid')
				}
				if (!$(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
					$(`.error_${$(el).attr('id')}.valid`).addClass('active')
				}
			}

			if (parent.hasClass('empty')) {
				parent.removeClass('empty')
			}
			if ($(`.error_${$(el).attr('id')}.empty`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.empty`).removeClass('active')
			}

		}
	} else if ($(el).attr('id') === 'telegram') {
		if (parent.hasClass('valid')) {
			parent.removeClass('valid')
		}
		if ($(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
			$(`.error_${$(el).attr('id')}.valid`).removeClass('active')
		}
	} else {
		if (!parent.hasClass('empty')) {
			parent.addClass('empty')
		}
		$(`.error_${$(el).attr('id')}.empty`).addClass('active')
		if (parent.hasClass('valid')) {
			parent.removeClass('valid')
		}
		if ($(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
			$(`.error_${$(el).attr('id')}.valid`).removeClass('active')
		}
		if ($(el).attr('id') === 'mail') {
			if ($(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.invalid`).removeClass('active')
			}
		}
		if ($(el).attr('id') === 'phone') {
			if ($(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.invalid`).removeClass('active')
			}
		}
		if ($(el).attr('id') === 'captcha') {
			if ($(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.invalid`).removeClass('active')
			}
		}
	}
}

function isEmailValid(el) {
	if ($(el).attr('id') === 'mail') {
		var parent = $(`.row_${$(el).attr('id')}`);
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	if (!re.test($(el).val())) {
			if (parent.hasClass('valid')) {
				parent.removeClass('valid')
			}
			if ($(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.valid`).removeClass('active')
			}
			if (!$(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.invalid`).addClass('active')
			}
			parent.addClass('invalid')
		} else {
			if (parent.hasClass('invalid')) {
				parent.removeClass('invalid')
			}
			parent.addClass('valid')
			if (!$(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.valid`).addClass('active')
			}
			if ($(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.invalid`).removeClass('active')
			}
		}
	}
}

function isNumberValid(el) {
	if ($(el).attr('id') === 'phone') {
		var parent = $(`.row_${$(el).attr('id')}`);
		var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  	if (!re.test($(el).val())) {
			if (!parent.hasClass('invalid')) {
				parent.addClass('invalid')
			}
			if (parent.hasClass('valid')) {
				parent.removeClass('valid')
			}
			if ($(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.valid`).removeClass('active')
			}
			if (!$(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.invalid`).addClass('active')
			}
		} else {
			if (parent.hasClass('invalid')) {
				parent.removeClass('invalid')
			}
			parent.addClass('valid')
			if (!$(`.error_${$(el).attr('id')}.valid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.valid`).addClass('active')
			}
			if ($(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
				$(`.error_${$(el).attr('id')}.invalid`).removeClass('active')
			}
		}
	}
}

function unlockSubmit() {
	var counter = 0;
	$('.row_box').each(function() {
		if (($(this).hasClass('empty') || $(this).hasClass('invalid')) && !$(this).hasClass('row_captcha')) {
			counter++;
		}
	})
	if (counter !== 0) {
		$("button").prop('disabled', true).css({"cursor" : "not-allowed"});
	} else {
		$("button").prop('disabled', false).css({"cursor" : "pointer"});
	}
}

function captcha(el) {
	var parent = $(`.row_${$(el).attr('id')}`);
	if (parent.hasClass('invalid')) {
		if ($(`.error_${$(el).attr('id')}.invalid`).hasClass('active')) {
			$(`.error_${$(el).attr('id')}.invalid`).removeClass('active')
		}
		parent.removeClass('invalid')
	}
}

