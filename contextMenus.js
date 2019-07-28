var menuItem = {
	"id": "Speak",
	"title": "Speak",
	"contexts": ["selection"]
};

chrome.contextMenus.create(menuItem);

let rate = 0.7;
let gender = 'male';
let volume = 1.0;
chrome.storage.sync.get(['rate', 'gender', 'volume'], function (obj) {
	rate = parseFloat(obj.rate);
	gender = obj.gender;
	volume = parseFloat(obj.volume);
});

chrome.storage.onChanged.addListener(function (changes, area) {
	if (area == "sync") {
		if ("volume" in changes) {
			volume = parseFloat(changes.volume.newValue);
		}
		if ("gender" in changes) {
			gender = changes.gender.newValue;
		}
		if ("rate" in changes) {
			rate = parseFloat(changes.rate.newValue);
		}
	}
});

chrome.contextMenus.onClicked.addListener(function (clickData) {

	// 	if (clickData.menuItemId == "Speak" && clickData.selectionText) {
	// 		chrome.tts.speak(clickData.selectionText,
	// 			{
	// 				'rate': 0.7,
	// 				// 'gender': gender,
	// 				//	'volume': volume,
	// 				'onEvent': function (event) {
	// 					console.log('Event ' + event.type, ' at position ' + event.charIndex);

	// 				}
	// 			});
	// 	}
	// });
	if (clickData.menuItemId == "Speak" && clickData.selectionText) {
		chrome.tts.speak(clickData.selectionText,
			{
				'rate': 0.7
			});
	}
});




