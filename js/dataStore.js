var distilleries = {
			"laphroaig" : {
				"name" : "Laphroaig",
				"address" : "Laphroaig Distillery Port Ellen Isle of Islay Argyll PA42 7DU",
				"phone" : "+44 (0)1496 302 418",
				"email" : "",
				"owner" : "Beam, Inc."
			},
			"balvenie" : {
				"name" : "The Balvenie Distillery Company LTD",
				"address" : "THE BALVENIE DISTILLERY Balvenie Maltings, Dufftown, Scotland, AB55 4BB",
				"phone" : "+44 (0) 1340 822 210",
				"email" : "info@thebalvenie.com",
				"owner" : "William Grant & Sons"
			},
			"bruichladdich" : {
				"name" : "Bruichladdich",
				"address" : "Bruichladdich Distillery  Isle of Islay Argyll,  Scotland PA49 7UN  United Kingdom",
				"phone" : "+44 (0)1496 850 190",
				"email" : "mary@bruichladdich.com",
				"owner" : "Rémy Cointreau"
			},
			"aberlour" : {
				"name" : "Aberlour",
				"address" : "Aberlour Distillery, Aberlour, Banffshire, AB38 9PJ, UK",
				"phone" : "+44 (0)1340 881249",
				"email" : "",
				"owner" : "Pernod Ricard"
			},
			"ardbeg" : {
				"name" : "Ardbeg",
				"address" : "Ardbeg Distillery, Port Ellen, Isle of Islay, Argyll, PA42 7EB, Scotland",
				"phone" : "+441496 302244",
				"email" : "",
				"owner" : "Glenmorangie Plc."
			},
			"caolIla" : {
				"name" : "Caol Ila",
				"address" : "Caol Ila Distillery Port Askaig, Isle of Islay PA46 7RL United Kingdom",
				"phone" : "",
				"email" : "",
				"owner" : "Diageo"
			},
			"springbank" : {
				"name" : "Springbank ",
				"address" : "Springbank Distillers Ltd 85 Longrow, Campbeltown Argyll, PA28 6EX",
				"phone" : "+44 (0) 1586 551710",
				"email" : "tours@jandamitchell.com",
				"owner" : "Family Owned"
			},
			"jimBeam" : {
				"name" : "Jim Beam",
				"address" : "Jim Beam American Stillhouse 526 Happy Hollow Rd Clermont, KY 40110",
				"phone" : "(502) 543-9877",
				"email" : "",
				"owner" : "Beam Inc."
			},
			"buffaloTrace" : {
				"name" : "Buffalo Trace Distillery",
				"address" : "113 Great Buffalo Trace Frankfort, KY 40601",
				"phone" : "(800) 654-8471",
				"email" : "",
				"owner" : "Sazerac Co."
			},
			"woodford" : {
				"name" : "Woodford Reserve/Labrot & Graham",
				"address" : "7855 McCracken Pike Versailles, KY 40383-9781",
				"phone" : "(859) 879-1812",
				"email" : "",
				"owner" : "Brown Forman"
			}
}

var dataStore = [
			{
				"name" : "Laphroaig 10Yr",
				"region/style" : "Scotch - Islay",
				"distillery" : distilleries.laphroaig,
				"image" : "images/laphroaig10.jpg
				",
				"mj_review" : "86",
				"reddit_avg" : "85",
				"user_avg" : "88",
				"status" : "Own",
				"price_purchased" : "$32.99"
			},
			{
				"name" : "Laphroaig Quarter Cask",
				"region/style" : "Scotch - Islay",
				"distillery" : distilleries.laphroaig,
				"image" : "images/laphroaig-quarter-cask.jpg",
				"mj_review" : "91",
				"reddit_avg" : "91",
				"user_avg" : "89",
				"status" : "Own",
				"price_purchased" : "$54.99"
			},
			{
				"name" : "Laphroaig 10Yr Cask Strength III",
				"region/style" : "Scotch - Islay",
				"distillery" : distilleries.laphroaig,
				"image" : "images/laphroaig_10_caskStrength.jpg",
				"mj_review" : "88",
				"reddit_avg" : "91",
				"user_avg" : "92",
				"status" : "Own",
				"price_purchased" : "$0.00"
			},
			{
				"name" : "Blanton's Original Single Barrel",
				"region/style" : "Bourbon",
				"distillery" : distilleries.buffaloTrace,
				"image" : "images/blantons.jpg",
				"mj_review" : "NA",
				"reddit_avg" : "87",
				"user_avg" : "84",
				"status" : "Tried",
				"price_purchased" : "$0.00"
			},
			{
				"name" : "Bruichladdich Port Charlotte",
				"region/style" : "Scotch - Islay",
				"distillery" : distilleries.bruichladdich,
				"image" : "images/bruichladdich_port_charlotte.png",
				"mj_review" : "90",
				"reddit_avg" : "93",
				"user_avg" : "NA",
				"status" : "Want",
				"price_purchased" : "$0.00"
			},
			{
				"name" : "Springbank 10Yr",
				"region/style" : "Scotch - Campbeltown",
				"distillery" : distilleries.springbank,
				"image" : "images/springbank_10.jpg",
				"mj_review" : "83",
				"reddit_avg" : "85",
				"user_avg" : "91",
				"status" : "Previously Owned",
				"price_purchased" : "$54.99"
			},
			{
				"name" : "Balvenie 12Yr Doublewood",
				"region/style" : "Scotch - Speyside",
				"distillery" : distilleries.balvenie,
				"image" : "images/balvenie_12_doublewood.JPG",
				"mj_review" : "87",
				"reddit_avg" : "81",
				"user_avg" : "90",
				"status" : "Own",
				"price_purchased" : "$39.99"
			},
			{
				"name" : "Springbank 10Yr (100 proof)",
				"region/style" : "Scotch- Campbeltown",
				"distillery" : distilleries.springbank,
				"image" : "images/springbank_10_100_proof.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Aberlour a'bunadh",
				"region/style" : "",
				"distillery" : distilleries.aberlour,
				"image" : "images/aberlour_abunadh.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Ardbeg 10Yr",
				"region/style" : "",
				"distillery" : distilleries.ardbeg,
				"image" : "images/ardbeg_10.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Ardbeg Uigeadail",
				"region/style" : "",
				"distillery" : distilleries.ardbeg,
				"image" : "images/ardbeg_uigeadail.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Balvenie 14Yr Caribbean Cask",
				"region/style" : "",
				"distillery" : distilleries.balvenie,
				"image" : "images/balvenie_14_caribbean.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Balvenie 21Yr Portwood",
				"region/style" : "",
				"distillery" : distilleries.balvenie,
				"image" : "images/balvenie_21_portwood.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Bulleit Rye",
				"region/style" : "",
				"distillery" : distilleries.laphroaig,
				"image" : "images/bulleit_rye.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Caol Ila 12Yr",
				"region/style" : "",
				"distillery" : distilleries.caolIla,
				"image" : "images/caol_ila_12.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Knob Creek",
				"region/style" : "",
				"distillery" : distilleries.jimBeam,
				"image" : "images/knob_creek.jpg",
				"mj_review" : "",
				"reddit_avg" : "",
				"user_avg" : "",
				"status" : "",
				"price_purchased" : ""
			},
			{
				"name" : "Woodford Reserve",
				"region/style" : "Bourbon",
				"distillery" : distilleries.woodford,
				"image" : "images/woodford_reserve.jpg",
				"mj_review" : "NA",
				"reddit_avg" : "80",
				"user_avg" : "87",
				"status" : "Previously Owned",
				"price_purchased" : "$29.99"
			}
		]


