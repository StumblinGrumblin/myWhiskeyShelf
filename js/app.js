Object.size = function(obj) {
	var size = 0, key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};

var size = Object.size(dataStore);
console.log(size);

function displayWhiskey(data) {
	var img = $('<img />');

	for (var i = 0; i < size; i++) {
		$("#main #shelf").append("<div class='whiskey'><img src='" + data[i].image + "' /><h2><span>" + data[i].name + "</span></h2></div>");
		// $("#main #shelfData").append("<div class='whiskeyData'>"))
	}
}


//ICON FUNCTIONALITY
// $(document).ready(
// 	$("body").on("click", "div.whiskey", function() {
// 		var selectedIndex = ($(this).index());
// 		var wrapper = $(this).parents("div.subMain");
// 		var selectedContent = ($(wrapper).find(".content")[selectedIndex]);

// 	 	$(this).addClass('active');
// 		$(this).siblings('.tabs li.active').removeClass('active');
// 		$(wrapper).find('.display').removeClass('display');
// 		$(selectedContent).addClass('display');
// 		return false;
// 	}));