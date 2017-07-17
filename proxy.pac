var comNetUrlsToBlock = {
			regexPrefix: "*[^a-z]",
			regexSuffix: ".(com|net)[^a-z]*",
			list: ["double-click",
			"doubleclick",
			"doubleclickbygoogle",
			"googleadservices",
			"googleadsyndication",
			"google-analytics",
			"googleapis",
			"googlecode",
			"googlesyndication",
			"googletagmanager",
			"googletagservices",
			"2mdn",
			"2o7",
			"33across",
			"3lift",
			"accmgr",
			"adadvisor",
			"adblade",
			"adbrn",
			"addroll",
			"addthis",
			"addthisedge",
			"addtoany",
			"adform",
			"adformdsp",
			"adgrx",
			"adition",
			"adkernel",
			"adlucent",
			"adnxs",
			"adobedtm",
			"adobetm",
			"adroll",
			"adrtx",
			"ads234",
			"ads345",
			"adsafeprotected",
			"adsymptotic",
			"adtechus",
			"advertising",
			"adx1",
			"adzerk",
			"afy11",
			"agkn",
			"akamaihd",
			"alcmpn",
			"amazon-adsystem",
			"amazonaws",
			"amazontrust",
			"amgdgt",
			"analytics.msnbc.msn",
			"analytics.twitter",
			"analytics.yahoo",
			"answerscloud",
			"apis.google",
			"appier",
			"apxlv",
			"areyouahuman",
			"atdmt",
			"atwola",
			"auto.search.msn",
			"azureedge",
			"baidu",
			"baynote",
			"bc.yahoo",
			"bdex",
			"betrad",
			"bf-ad",
			"bidswitch",
			"bing",
			"bizographics",
			"bizrate",
			"bkrtx",
			"bluecava",
			"blueconic",
			"bluekai",
			"bnmla",
			"bootstrapcdn",
			"bounceexchange",
			"bridgetrack",
			"brightcove",
			"btrll",
			"bttrack",
			"budgetedbauer",
			"c1exchange",
			"carbonads",
			"cardlytics",
			"casalemedia",
			"cedexis",
			"chango",
			"chartbeat",
			"choicestream",
			"circularhub",
			"clickagy",
			"clients1.google",
			"cloudflare",
			"clrstm",
			"cnevids",
			"cnzz",
			"cogocast",
			"collective-media",
			"company-target",
			"comscore",
			"condenastdigital",
			"conductrics",
			"connexity",
			"contextweb",
			"conversionlogic",
			"convertkit",
			"coresecure",
			"crazyegg",
			"creditcards",
			"crispadvertising",
			"crisppremium",
			"criteo",
			"crsspxl",
			"crwdcntrl",
			"csdata1",
			"cse.google",
			"ctnsnet",
			"d26t7ex48mr4bn.cloudfront",
			"d31qbv1cthcecs.cloudfront",
			"d37sfqor0g25ph.cloudfront",
			"d3qxwzhswv93jk.cloudfront",
			"d5nxst8fruw4z.cloudfront",
			"d8rk54i4mohrb.cloudfront",
			"decenthat",
			"demdex",
			"deployads",
			"dff7tx5c2qbxc.cloudfront",
			"disqus",
			"disquscdn",
			"dmtry",
			"dnkzzz1hlto79.cloudfront",
			"dnn506yrbagrg.cloudfront",
			"domdex",
			"doubleverify",
			"dp8hsntg6do36.cloudfront",
			"dpclk",
			"dwgyu36up6iuz.cloudfront",
			"dy48bnzanqw0v.cloudfront",
			"ensighten",
			"eviltracker",
			"exelator",
			"eyeota",
			"eyereturn",
			"eyeviewads",
			"facebook",
			"fallingfalcon",
			"fastclick",
			"fbcdn",
			"flashtalking",
			"flite",
			"fonts",
			"force",
			"foresee",
			"fqtag",
			"fullstory",
			"fwmrm",
			"gannett-cdn",
			"ggpht",
			"gigya",
			"globalwebindex",
			"gravatar",
			"gtrk.s3.amazonaws",
			"gumgum",
			"gwallet",
			"hlserve",
			"hotjar",
			"hs-analytics",
			"hubspot",
			"hupso",
			"iab",
			"iasds01",
			"ib-ibi",
			"images-amazon",
			"imrworldwide",
			"imshopping",
			"indexww",
			"innovid",
			"insightexpressai",
			"instinctiveads",
			"interstateanalytics",
			"ipowow",
			"ipredictive",
			"ixiaa",
			"jivox",
			"jsonip",
			"jsrdn",
			"jumptap",
			"kampyle",
			"ketchuponnews",
			"kissmetrics",
			"kixer",
			"komoona",
			"krxd",
			"launchbit",
			"lifestreet",
			"lijit",
			"liveperson",
			"liverail",
			"llnwd",
			"load.s3.amazonaws",
			"lpsnmedia",
			"lrcdn",
			"marketo",
			"mathtag",
			"maxymiser",
			"mdotm",
			"media",
			"media6degrees",
			"mediavoice",
			"mediawallahscript",
			"meida6degrees",
			"mentad",
			"metric.gstatic",
			"mixpanel",
			"ml314",
			"moatads",
			"monetate",
			"mookie1",
			"mouseflow",
			"mparticle",
			"msadcenter.msn",
			"mxptint",
			"myvisualiq",
			"nativeads",
			"netmng",
			"netseer",
			"newrelic",
			"newsinc",
			"nexac",
			"nr-data",
			"nuggad",
			"omtrdc",
			"onesignal",
			"onestatfree",
			"opendsp",
			"openx",
			"optimahub",
			"optimizely",
			"outbrain",
			"owneriq",
			"parsely",
			"peer39",
			"perfectmarket",
			"petametrics",
			"pippio",
			"pixel.wp",
			"polarmobile",
			"postrelease",
			"ppjol",
			"pricegrabber",
			"profile.ams50.cloudfront",
			"pro-market",
			"pubmatic",
			"pubnation",
			"qualtrics",
			"quantcount",
			"quantserve",
			"quantserver",
			"query.yahoo",
			"raasnet",
			"rapleaf",
			"reson8",
			"revcontent",
			"revsci",
			"rfihub",
			"rlcdn",
			"ru4",
			"rubiconproject",
			"rundsp",
			"rvty",
			"s3.amazonaws",
			"sail-horizon",
			"sascdn",
			"sbal4kp",
			"scanscout",
			"scorecardresearch",
			"securedvisit",
			"securemetrics.apple",
			"servedbyopenx",
			"serving-sys",
			"sharethis",
			"sharethrough",
			"shinystat",
			"simplereach",
			"sitefinder.verisign",
			"sitemeter",
			"sitescout",
			"skimresources",
			"smaato",
			"smartadserver",
			"smartclip",
			"sonobi",
			"sovrn",
			"spongecell",
			"spotxchange",
			"sprinkletxt",
			"statcounter",
			"staticworld",
			"stats.wp",
			"sundaysky",
			"survata",
			"surveymonkey",
			"switchadhub",
			"swoop",
			"taboola",
			"tailsweep",
			"tapad",
			"tealiumiq",
			"techhive",
			"tekblue",
			"telemetry.microsoft",
			"theadex",
			"thebrighttag",
			"tidaltv",
			"tiqcdn",
			"townnews",
			"travelaudience",
			"tribalfusion",
			"truoptik",
			"tubemogul",
			"turn",
			"twimg",
			"typekit",
			"undertone",
			"univide",
			"uts-af",
			"videoamp",
			"video.google",
			"vindicosuite",
			"visiblemeasures",
			"visualdna",
			"visualrevenue",
			"vmweb",
			"voicefive",
			"w3counter",
			"w55c",
			"weborama",
			"wishabi",
			"wtp101",
			"xad",
			"xg4ken",
			"yieldify",
			"yieldlab",
			"yieldmo",
			"yieldoptimizer",
			"yieldpartners",
			"yimg",
			"yldbt",
			"youtubei.youtube",
			"youtube-nocookie",
			"ytimg",
			"yume",
			"zemanta",
			"zergnet",
			"zqtk"
]
		  };

var wordsToBlock = {
			regexPrefix: "*",
			regexSuffix: "*",
			list: ["adsense","page-view","pageview","page_view","pagead","tracker","campaign","pixel","stats","recaptcha","ptracking","adexchange","beacon","syndication","_logs","generate_204","impression","ping","pre-bid","count-data","prebid","countdata","showads","adfarm"]
		   };

var nonComNetUrlsToBlock = {
		regexPrefix: "*",
		regexSuffix: "[^a-z]*",
		list: ["districtm.ca",
		"google.se",
		"adap.tv",
		"adsrvr.org",
		"adtech.de",
		"atsfi.de",
		"bidr.io",
		"bildstatic.de",
		"contactimpact.de",
		"df-srv.de",
		"do-not-tracker.org",
		"emetriq.de",
		"gemius.pl",
		"google.se",
		"hrnorth.se",
		"ioam.de",
		"ntv.io",
		"prfct.co",
		"roq.ad",
		"rutarget.ru",
		"simpli.fi",
		"spotad.co",
		"trackersimulator.org",
		"videohub.tv",
		"volvelle.tech",
		"weborama.fr",
		"weborama.io",
		"workey.se",
		"wt1.rqtrk.eu",
		"xplosion.de",
		"yadro.ru",
		"gfx.ms",
		"onestore.ms",
		"t.co",
		"tns-counter.ru"
]
};

var listsToBlock = [wordsToBlock, comNetUrlsToBlock, nonComNetUrlsToBlock];

var bypassList = {
			regexPrefix: "*",
			regexSuffix: "*",
			list: ["better.fyi","ajax.googleapis.com","maps.googleapis.com","kalibrate.local"]
		 };

function isValueInList(val, listObj) {
	for(var listItem of listObj.list) {
		if(shExpMatch(val, listObj.regexPrefix + listItem + listObj.regexSuffix)) {
			alert("TRIGGER: " + listItem.toString());
			return true;
		}
	}
	return false;
}

function FindProxyForURL(url, host) {
	if(!isValueInList(url, bypassList)) {
		for(var list of listsToBlock) {
			if(isValueInList(url, list)) {
				alert("BLOCKED: " + url.toString());
				return "PROXY localhost:9090";
			}
		}
	}
	alert("DIRECT: " + url.toString());
	return "DIRECT";
}
