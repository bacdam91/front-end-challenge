const RADIO_BTNS = $("input[type='radio']");
const CANCEL_BTNS = $("button.cancel-info");

function uncheckAllRadioButtons() {
	RADIO_BTNS.each(function(index) {
		$(this).prop("checked", false);
	});
}

$(document).ready(function() {
	CANCEL_BTNS.click(uncheckAllRadioButtons);
});
