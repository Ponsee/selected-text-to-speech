$(function () {
	chrome.storage.sync.get(['rate', 'gender', 'volume'], function (obj) {
		$('#rate').val(`${obj.rate}`);
		var $radios = $('input:radio[name=gender]');
		if ($radios.is(':checked') === false) {
			$radios.filter('[value=male]').prop('checked', true);
		}
		$('#volume').val(`${obj.volume}`);
	});

	$('#submit').click(function () {
		let rateVal = $('#rate').val();
		let gender = $("input:radio[name ='gender']:checked").val();
		let volume = $('#volume').val();

		chrome.storage.sync.set({ "rate": rateVal, "gender": gender, "volume": volume });
	})

	// $('#reset').click(function () {
	// 	let newRate = 0.7;
	// 	let gender = 'male';
	// 	let volume = 0.5;
		
	// 	chrome.storage.sync.set({ "rate": newRate, "gender": gender, "volume": volume });
	// 	// chrome.tts.pause();
	// })

});
